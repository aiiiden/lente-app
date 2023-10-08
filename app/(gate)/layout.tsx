import "@/app/globals.css";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";

import localFont from "next/font/local";

const pretendardFront = localFont({
  src: "../fonts/PretendardVariable.woff2",
  display: "block",
  preload: true,
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
      <body className={pretendardFront.className}>
        <main className="w-screen overflow-x-auto">
          <div className="min-w-[360px]">{children}</div>
        </main>
        <Toaster />
      </body>
    </html>
  );
}
