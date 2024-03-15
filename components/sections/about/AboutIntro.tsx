"use client";
import Container from "@/components/atoms/Container";
import Section from "@/components/atoms/Section";
import Text from "@/components/atoms/Text";
import Title from "@/components/atoms/Title";
import { cn } from "@/lib/utils";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

const imgSize = "w-[582px] h-[415px] lg:w-[498px] lg:h-[356px] md:w-[504px] md:h-[360px] sm:w-full sm:h-[201px]"

const AboutIntro = () => {
  const mainImage: StaticImport = require("@/public/images/mainImage01.jpg");
  return (
    <>
      <Title
        id="about-intro"
        className="box-border pt-20 pb-10 md:pt-14 sm:pt-10"
        text={<>안녕하세요, <br className="hidden md:inline sm:inline" />극단 기억입니다.</>}
        textClassName="text-h3"
        isUnderLine
      />
      <Section border={"bottom"}>
        <Container className="flex md:flex-col-reverse sm:flex-col-reverse sm:px-6">
          <div className={cn("overflow-hidden bg-black md:mx-auto md:mb-14 sm:mb-14", imgSize)}>
            <Image
              src={mainImage}
              alt="이미지"
              height={1920}
              width={1920}
              className="h-full"
            ></Image>
          </div>
          <div className="flex flex-col pt-12 pl-[72px] md:pl-0 sm:pt-8 sm:pl-0">
            <Text className="text-h5 mb-4 md:text-h4 sm:text-h4">소중한 기억을 만들어갑니다.</Text>
            <Text className="text-b1 w-[582px] lg:w-[479px] md:w-full md:pb-[30px] sm:w-full sm:pb-8">
              극단 기억은 무대 위에서 감동과 웃음을 나누는 뮤지컬/연극
              동호회입니다. <br />
              우리는 다양한 직업과 전공을 가진 직장인들, 대학생들이 모여
              만들었습니다. <br />
              예술을 전공하지 않은 사람들의 순수한 열정과 상상에서 만들어지는
              새로운 예술의 즐거움을 공유하며, 배우와 관객 모두에게 잊지 못할
              소중한 기억을 함께 나누고 있습니다.
            </Text>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default AboutIntro;
