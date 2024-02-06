"use client";
import Container from "@/components/atoms/Container";
import Section from "@/components/atoms/Section";
import Text from "@/components/atoms/Text";
import Title from "@/components/atoms/Title";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

const AboutIntro = () => {
  const mainImage: StaticImport = require("@/public/images/mainImage01.jpg");
  return (
    <>
      <Title
        className="pt-20 pb-10 box-border"
        text={"안녕하세요, 극단 기억입니다."}
        textClassName="text-h3"
        isUnderLine
      />
      <Section border={"bottom"}>
        <Container className="flex">
          <div className="w-[582px] h-[415px] bg-black overflow-hidden">
            <Image
              src={mainImage}
              alt="이미지"
              height={1920}
              width={1920}
            ></Image>
          </div>
          <div className="flex flex-col pt-12 pl-[72px]">
            <Text className="text-h5 mb-4">소중한 기억을 만들어갑니다.</Text>
            <Text className="text-b1 w-[582px]">
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
