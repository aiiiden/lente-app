import "./globals.css";
import type { Metadata } from "next";

import localFont from "next/font/local";

const pretendardFront = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "block",
  // preload: true,
});

export const metadata: Metadata = {
  title: "렌테",
  description: "봄은 온다",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={pretendardFront.className}>{children}</body>
    </html>
  );
}
