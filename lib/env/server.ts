import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const serverEnvironment = createEnv({
  experimental__runtimeEnv: process.env,
  server: {
    API_SECRET_KEY: z.string().min(1),
    BASE_URL: z.string().min(1),
    CLOUDINARY_API_KEY: z.string().min(1),
    CLOUDINARY_API_SECRET: z.string().min(1),
    MONGODB_API_KEY: z.string().min(1),
    MONGODB_ATLAS_CLUSTER: z.string().min(1),
    MONGODB_ATLAS_PRIVATE_KEY: z.string().min(1),
    MONGODB_ATLAS_PROJECT_ID: z.string().min(1),
    MONGODB_ATLAS_PUBLIC_KEY: z.string().min(1),
    MONGODB_URI: z.string().min(1),
  },
});
