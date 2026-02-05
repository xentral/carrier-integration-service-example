import { NextRequest, NextResponse } from 'next/server';
import { logResponse } from '@/lib/logger';

export async function GET(request: NextRequest) {
  const responseData = { status: 'ok' };
  logResponse(200, responseData);
  return NextResponse.json(responseData, { status: 200 });
}
