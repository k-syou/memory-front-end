"use client";
import Image from "next/image";
import MenuImage from "@/public/images/mainImage01.jpg";
import Container from "@/components/atoms/Container";
import Title from "@/components/atoms/Title";

const MainTitle = () => {
  return (
    <>
      <Title
        isUnderLine={false}
        className="sm:pb-[54px] pb-[28px] sm:pt-[120px] pt-[48px]"
        text="극단 기억에 오신 것을 환영합니다."
      />
      <div className="sm:border-b-black sm:border-b sm:border-solid w-full box-border">
        <Container variant={"main"}>
          <div className="w-full h-[950px] relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 mb-[152px] sm:block hidden">
            <Image src={MenuImage} alt="" className="img scale-125"></Image>
          </div>
        </Container>
        <div className="w-full h-[360px] relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 sm:hidden block">
          <Image src={MenuImage} alt="" className="img scale-125"></Image>
        </div>
      </div>
    </>
  );
};

export default MainTitle;
