import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod";

export const env = createEnv({
  server: {
    PAYLOAD_SECRET: z.string().nonempty(),
    DATABASE_URI: z.string().url(),
    BLOB_READ_WRITE_TOKEN: z.string().nonempty(),
    BLOB_STORE_ID: z.string().nonempty(),
  },
  client: {
    NEXT_PUBLIC_WEBSITE_URL: z.string().url(),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_WEBSITE_URL: process.env.NEXT_PUBLIC_WEBSITE_URL,
  }
});