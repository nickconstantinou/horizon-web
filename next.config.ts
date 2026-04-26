import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/horizon-web",
  assetPrefix: "/horizon-web",
};

export default nextConfig;
