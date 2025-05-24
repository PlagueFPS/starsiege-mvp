import type { NextConfig } from "next"
import { withPayload } from "@payloadcms/next/withPayload"
import './env'

const nextConfig: NextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
      hmrRefreshes: true,
    }
  },
  experimental: {
    ppr: true,
    serverComponentsHmrCache: true,
  },
  images: {
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: `${process.env.BLOB_STORE_ID}.public.blob.vercel-storage.com`,
      }
    ],
    localPatterns: [
      {
        pathname: '/api/media/file/*',
      }
    ],
    minimumCacheTTL: 31536000, // 1 year in seconds
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
