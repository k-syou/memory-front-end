"use client";
import Text from "@/components/atoms/Text";
import Image from "next/image";
import React from "react";
import MenuImage from "@/public/images/mainImage01.jpg";
import Container from "@/components/atoms/Container";

const Main01 = () => {
  return (
    <div className="h-auto border-b border-solid border-black w-full box-border pt-[183px]">
      <Container variant={"main"}>
        <Text type="paragraph" variant={"web_h3"} className="mb-[54px]">극단 기억에 오신 것을 환영합니다.</Text>
        <div className="w-full h-[950px] relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 mb-[152px]">
          <Image src={MenuImage} alt="" className="img scale-125"></Image>
        </div>
      </Container>
    </div>
  );
};

export default Main01;
