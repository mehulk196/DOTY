import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // The Ministry of Skill Development logo is a trusted, locally-hosted SVG.
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
