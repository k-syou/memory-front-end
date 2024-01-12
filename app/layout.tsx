import type { Metadata } from "next";
import "./globals.css";
import "./globalicons.css"
import Navbar from "@/components/modules/navigation/Navbar";
import Footer from "@/components/sections/Footer";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import Container from "@/components/atoms/Container";

// font
// const pretendard = localFont({
//   src: '../public/fonts/PretendardVariable.ttf',
//   variable: '--font-pretendard',
//   display: 'swap'
// })
// const montserrat = localFont({
//   src: '../public/fonts/Montserrat-VariableFont_wght.ttf',
//   display: 'swap',
//   variable: '--font-montserrat'
// })

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
    <html lang="ko" className={`bg-milky-white`}>
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
