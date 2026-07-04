import type { MetadataRoute } from 'next';
import { serverEnvironment } from '@/lib/env/server';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        allow: '/',
        userAgent: '*',
      },
    ],
    sitemap: `${serverEnvironment.BASE_URL}/sitemap.xml`,
  };
}
