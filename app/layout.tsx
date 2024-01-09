import type { Metadata } from "next";
import "./globals.css";
import "./resetcss.css";

export const metadata: Metadata = {
  title: "Memory",
  description: "여러분의 행복한 기억을 만들어 드립니다",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="">{children}</body>
    </html>
  );
}
