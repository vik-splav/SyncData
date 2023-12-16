/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  env: {
    GOOGLE_CLIENT_ID:
      "",
    GOOGLE_CLIENT_SECRET: "",
    AUTH_SECRET:'78zFZvyspgAIBXPKdA0AhFqcNWXX16/CEmBFOHU3iOg=',
    lemonkey:
      "",
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  output:'export',
  
};

module.exports = nextConfig;
