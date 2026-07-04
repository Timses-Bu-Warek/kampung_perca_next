import { serverEnvironment } from '@/lib/env/server';
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${serverEnvironment.BASE_URL}/sitemap.xml`,
  };
}
