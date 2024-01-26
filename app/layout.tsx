import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/modules/navigation/Navbar";
import Footer from "@/components/sections/Footer";

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
    <html lang="ko" className={`bg-milky-white relative`}>
      <body className="max-w-[1920px] relative mx-auto">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
