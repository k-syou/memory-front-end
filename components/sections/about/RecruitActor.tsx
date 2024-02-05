"use client";
import Text from "@/components/atoms/disable/Text";
import Title from "@/components/atoms/Title";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

const RecruitActor = () => {
  const mainImage: StaticImport = require("@/public/images/mainImage01.jpg");
  return (
    <section id="recruit-actor">
      <Title
        isUnderLine={true}
        className="pb-[40px] pt-[160px]"
        text="우리, 함께 할래요?"
        align="text-right"
      />
      <div className="h-auto border-b border-solid border-black w-full box-border flex">
        <div className="h-[617px] flex flex-col pt-[70px] ml-[124px] w-[820px]">
          <Text variant={"web_h4"} className="block mb-6">
            소중한 기억, 함께 만들어요
          </Text>
          <Text variant={"web_h6"} className="block">
            극단 기억에서,
            <br />
            우리는 시인도 목사도 의사도 아버지도, 때론 사람이 아닌 그 무엇인가도
            될 수 있습니다.
            <br />
            우리는 다양한 배경과 경험을 가진 예술가들을 환영하며, 각자의 개성을
            존중합니다.
            <br />
            여러분이 가진 예술적 열정을 함께 나누고, 무대 위에서 함께 특별한
            순간을 기다리고 있습니다.
            <br />
          </Text>
        </div>
        <div className="w-[962px] h-[617px] bg-black relative overflow-hidden">
          <Image
            src={mainImage}
            alt="이미지"
            width={1920}
            height={1920}
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default RecruitActor;
