import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Firebase Hosting 用の静的エクスポート（out/ に出力）
  output: "export",
  images: {
    // 静的エクスポートでは Next の画像最適化サーバーが使えないため無効化
    unoptimized: true,
  },
};

export default nextConfig;
