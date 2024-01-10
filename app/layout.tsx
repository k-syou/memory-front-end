import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/modules/navigation/Navbar";
import Footer from "@/components/sections/Footer";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import Container from "@/components/atoms/container";

// font
const pretendard = localFont({
  src: [
    {
      path: '../public/fonts/PretendardVariable.ttf',
      weight: '400',
      style: 'normal',
    }
  ],
  variable: '--font-pretendard',
  display: 'swap'
})

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat'
})

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
    <html lang="ko" className={`${pretendard.className} ${montserrat.className}`}>
      <body>
        <Navbar />
        <Container>
          {children}
        </Container>
        <Footer />
      </body>
    </html>
  );
}
