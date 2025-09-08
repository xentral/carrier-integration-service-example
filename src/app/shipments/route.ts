import { NextRequest, NextResponse } from 'next/server';
import * as fs from 'fs';
import * as path from 'path';
import { randomUUID } from 'crypto';

function generateTrackingId(): string {
  return Math.floor(100000000 + Math.random() * 900000000).toString();
}

function generateTrackingUrl(trackingId: string): string {
  return `https://tracking.xentral.com/track/${trackingId}`;
}

export async function POST(request: NextRequest) {
  const body = await request.json();

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

  return NextResponse.json({
    shippingLabels: shippingLabels,
    id: randomUUID(),
    carrier: {
      name: body.carrier?.id || "DHL"
    }
  });
}
