process.env.NEXT_PRIVATE_WORKER_THREADS = 'false';

/** @type {import('next').NextConfig} */
const nextConfig = {
      reactStrictMode: true,
      trailingSlash: true,
      images: {
            remotePatterns: [
                  {
                        protocol: "https",
                        hostname: "api.stellarstructuresbd.com",
                  },
            ],
      },
      typescript: {
            ignoreBuildErrors: true,
      },
};

export default nextConfig;
