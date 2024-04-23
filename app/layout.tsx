import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/sections/Footer";
import Navbar from "@/components/modules/navigation/Navbar";

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
    <html lang="ko" className={`bg-sub2 relative`}>
      <body className="max-w-[1920px] relative mx-auto break-keep">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body> 
    </html>
  );
}
