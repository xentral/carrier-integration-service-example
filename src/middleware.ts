import { NextRequest, NextResponse } from 'next/server';

function logRequest(request: NextRequest) {
  const timestamp = new Date().toISOString();
  const method = request.method;
  const path = request.nextUrl.pathname;
  const headers: Record<string, string> = {};
  
  request.headers.forEach((value, key) => {
    if (key.toLowerCase() === 'authorization') {
      headers[key] = 'Bearer ***';
    } else {
      headers[key] = value;
    }
  });

  console.log(`[${timestamp}] ${method} ${path}`);
  console.log('Headers:', JSON.stringify(headers, null, 2));
}

function addCorsHeaders(response: NextResponse): NextResponse {
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  response.headers.set('Access-Control-Max-Age', '86400');
  return response;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  logRequest(request);

  if (request.method === 'OPTIONS') {
    return addCorsHeaders(new NextResponse(null, { status: 200 }));
  }

  if (pathname.startsWith('/carriers') || pathname.startsWith('/shipments')) {
    const authHeader = request.headers.get('authorization');
    const expectedToken = 'superSecureBearerToken1234';

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return addCorsHeaders(NextResponse.json(
        {
          type: "developer.xentral.com/errors/unauthorized",
          title: "Unauthorized",
          violations: [{ "Invalid Token": ["The token is not valid"] }]
        },
        { status: 401 }
      ));
    }

    const token = authHeader.substring(7);

    if (token !== expectedToken) {
      return addCorsHeaders(NextResponse.json(
        {
          type: "developer.xentral.com/errors/unauthorized",
          title: "Unauthorized",
          violations: [{ "Invalid Token": ["The token is not valid"] }]
        },
        { status: 401 }
      ));
    }
  }

  return addCorsHeaders(NextResponse.next());
}

export const config = {
  matcher: ['/carriers/:path*', '/shipments/:path*', '/liveness/:path*'],
};
