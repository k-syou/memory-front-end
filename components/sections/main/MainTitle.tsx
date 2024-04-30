"use client";
import Image from "next/image";
import MenuImage from "@/public/images/mainImage01.jpg";
import Container from "@/components/atoms/Container";
import Title from "@/components/atoms/Title";
import Section from "@/components/atoms/Section";
import { ma_txt_01_01 } from "./constants";

const MainTitle = () => {
  return (
    <>
      <Title
        isUnderLine={false}
        className="pt-[80px] pb-[40px] sm:pt-10 sm:pb-[30px]"
        text={ma_txt_01_01}
        textClassName="md:text-h4 text-h3 sm:w-[200px] w-full"
      />
      <Section className="relative overflow-visible">
        <div className="bg-gradient-to-b from-grad2-1 to-grad2-2 w-[294px] h-[294px] absolute rounded-full z-20 top-[221px]"></div>
        <div className="bg-gradient-to-b from-grad2-1 to-grad2-2 w-[193px] h-[193px] absolute rounded-full top-[-96px] right-[109px]"></div>
        <div className="bg-gradient-to-b from-grad3-1 to-grad3-2 w-[541px] h-[541px] absolute rounded-full bottom-[-191px] right-[20px]"></div>
        <Container className="mb-[265px] md:mb-[120px] sm:mb-14">
          <div className="w-full h-[762px] lg:h-[540px] md:h-[557px] sm:h-[261px] overflow-hidden grayscale hover:grayscale-0 transition duration-200 rounded-[32px] shadow-2xl">
            <Image src={MenuImage} alt="" width={1920} height={1920}></Image>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default MainTitle;
