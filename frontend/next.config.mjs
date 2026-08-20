process.env.NEXT_PRIVATE_WORKER_THREADS = 'false';

/** @type {import('next').NextConfig} */
const nextConfig = {
      output: 'export',
      reactStrictMode: true,
      trailingSlash: true,
      images: {
            unoptimized: true,
      },
      typescript: {
            ignoreBuildErrors: true,
      },
};

export default nextConfig;
