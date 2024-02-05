"use client";
import Text from "@/components/atoms/Text";
import Title from "@/components/atoms/Title";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

const AboutIntro = () => {
  const mainImage: StaticImport = require("@/public/images/mainImage01.jpg");
  return (
    <section id="about-intro">
      <Title
        textClassName=""
        isUnderLine={true}
        className="pb-[30px] pt-[142px]"
        text="안녕하세요, 극단 기억입니다."
      />
      <div className="h-auto border-b border-solid border-black w-full box-border flex">
        <div className="w-[1086px] h-[697px] bg-black relative overflow-hidden">
          <Image src={mainImage} alt="이미지" className="img"></Image>
        </div>
        <div className="h-[697px] flex flex-col pl-8 pt-[70px]">
          <Text className="block mb-6">
            소중한 기억을 만들어 갑니다.
          </Text>
          <Text className="block">
            극단 기억은 무대 위에서 감동과 웃음을 나누는 뮤지컬/연극
            동호회입니다.
            <br />
            우리는 다양한 직업과 전공을 가진 직장인들, 대학생들이 모여
            <br />
            만들었습니다. 예술을 전공하지 않은 사람들의 순수한 열정과 상상에서
            <br />
            만들어지는 새로운 예술의 즐거움을 공유하며, 배우와 관객 모두에게
            잊지
            <br />
            못할 소중한 기억을 함께 나누고 있습니다.
          </Text>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
