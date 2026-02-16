const checkEnvVariables = require("./check-env-variables")

checkEnvVariables()

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      { protocol: "https",
        hostname: "api.ateljevolja.si" 
      },
      {
        protocol: "https",
        hostname: "r2.ateljevolja.si"
      }
    ],
  },
}

module.exports = nextConfig
