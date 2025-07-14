import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 60,
  },
  // i18n: {
  //   locales: ["en-US", "ru-RU"],
  //   defaultLocale: "en-US",
  //   // localeDetection: true,
  // },
  // swcMinify: true,
  // reactStrictMode: true,
};

export default nextConfig;
