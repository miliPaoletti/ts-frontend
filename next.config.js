/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: false,
  trailingSlash: true,
  basePath:
    process.env.NEXT_PUBLIC_BASE_PATH === "turismoSerrano"
      ? ""
      : process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix:
    process.env.NEXT_PUBLIC_BASE_PATH === "turismoSerrano"
      ? ""
      : process.env.NEXT_PUBLIC_BASE_PATH,
};

module.exports = nextConfig;
