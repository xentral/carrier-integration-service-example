import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Only apply middleware to API routes
  if (!request.nextUrl.pathname.startsWith('/api/')) {
    return NextResponse.next();
  }

  const authHeader = request.headers.get('authorization');
  const expectedToken = 'superSecureBearerToken1234';

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return NextResponse.json(
      {
        type: "developer.xentral.com/errors/unauthorized",
        title: "Unauthorized",
        violations: [
          {
            "Invalid Token": [
              "The token is not valid"
            ]
          }
        ]
      },
      { status: 401 }
    );
  }

  const token = authHeader.substring(7);

  if (token !== expectedToken) {
    return NextResponse.json(
      {
        type: "developer.xentral.com/errors/unauthorized",
        title: "Unauthorized",
        violations: [
          {
            "Invalid Token": [
              "The token is not valid"
            ]
          }
        ]
      },
      { status: 401 }
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*',
};