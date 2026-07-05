import { NextResponse } from 'next/server';
import { serverEnvironment } from '@/lib/env/server';

const allowedOrigins =
  process.env.NODE_ENV === 'production' ? [serverEnvironment.BASE_URL] : ['http://localhost:3000'];

export function middleware(request: Request) {
  const origin = request.headers.get('origin');
  console.log(origin);

  if (origin && !allowedOrigins.includes(origin)) {
    return new NextResponse(null, {
      headers: {
        'Content-Type': 'text/plain',
      },
      status: 400,
      statusText: 'Bad Request',
    });
  }
  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*',
};
