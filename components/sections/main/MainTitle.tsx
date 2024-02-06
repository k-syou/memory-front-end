"use client";
import Image from "next/image";
import MenuImage from "@/public/images/mainImage01.jpg";
import Container from "@/components/atoms/Container";
import Title from "@/components/atoms/Title";
import Section from "@/components/atoms/Section";

const MainTitle = () => {
  return (
    <>
      <Title
        isUnderLine={false}
        className="pt-[80px] pb-[40px]"
        text="극단 기억에 오신 것을 환영합니다."
        containerClassName="sm:px-[24px]"
        textClassName="md:text-h4 text-h3 sm:w-[200px] w-full"
      />
      <Section border={"bottom"}>
        <Container className="mb-40 md:mb-[120px] sm:mb-14">
          <div className="w-full h-[762px] lg:h-[540px] md:h-[557px] sm:h-[261px] overflow-hidden grayscale hover:grayscale-0">
            <Image src={MenuImage} alt="" width={1920} height={1920}></Image>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default MainTitle;