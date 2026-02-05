import { NextRequest, NextResponse } from 'next/server';
import * as fs from 'fs';
import * as path from 'path';
import { randomUUID } from 'crypto';
import { logResponse, logRequestBody } from '@/lib/logger';

function generateTrackingId(): string {
  return Math.floor(100000000 + Math.random() * 900000000).toString();
}

function generateTrackingUrl(trackingId: string): string {
  return `https://tracking.xentral.com/track/${trackingId}`;
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  logRequestBody(body);

  const shippingLabels = body.parcels.map((parcel: any) => {
    const trackingId = generateTrackingId();
    return {
      parcelId: parcel.id,
      trackingId: trackingId,
      trackingUrl: generateTrackingUrl(trackingId),
      label: {
        type: "pdf",
        data: fs.readFileSync(path.join(process.cwd(), 'public', 'dhl-example-label.pdf')).toString('base64')
      }
    };
  });

  const responseData = {
    shippingLabels: shippingLabels,
    id: randomUUID(),
    carrier: {
      name: body.carrier?.id || "DHL"
    }
  };

  logResponse(200, responseData);
  return NextResponse.json(responseData);
}
