/** @type {import('next').NextConfig} */
const nextConfig = {
  crossOrigin: "anonymous",
  async rewrites() {
    return [
      {
        source: "/api/product/:path*",
        destination: "http://testingbackend.farseit.com/Product/:path*", // Change to HTTPS if available
      },
    ];
  },
};

export default nextConfig;
