import type { NextConfig } from "next";
import { nextHeaderSource } from "@dcw/config/headers";

const nextConfig: NextConfig = {
  transpilePackages: ["@dcw/brand", "@dcw/ui", "@dcw/config"],
  poweredByHeader: false,
  async headers() {
    return nextHeaderSource();
  },
};

export default nextConfig;
