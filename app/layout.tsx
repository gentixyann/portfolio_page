import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gento — App / Frontend Developer",
  description:
    "Flutter でのアプリ開発を軸に、フロントエンド・バックエンド・デザインまで手がける Gento のポートフォリオ。",
  openGraph: {
    title: "Gento — App / Frontend Developer",
    description:
      "Flutter でのアプリ開発を軸に、フロントエンド・バックエンド・デザインまで手がける Gento のポートフォリオ。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
