import Container from "@/components/atoms/Container";
import Section from "@/components/atoms/Section";
import Title from "@/components/atoms/Title";
import TwoRowCarousel from "@/components/atoms/TwoRowCarousel";
import React from "react";
import ActorBox from "@/components/atoms/ActorBox";
const actorNames:Array<"권혁진" | "김권수" | "김규나" | "김지은" | "온훈" | "이다솜" | "이시아" | "임도균" | "정진우" | "최석호" | "고영민" | "default" | "김지영">= [
  "고영민",
  "권혁진",
  "김권수",
  "김규나",
  "김지은",
  "온훈",
  "이다솜",
  "이시아",
  "임도균",
  "정진우",
  "최석호",
];
const photoData = actorNames.map((value) => {
  return `/images/actors/${value}.png`;
});
const ActorsIntro = () => {
  const actorData = photoData.map((value, idx) => {
    return (
      <ActorBox 
        key={idx}
        actorName={actorNames[idx]}
        image={value}
        actorColor={actorNames[idx]}
      />
    );
  });
  return (
    <>
      <Title
        id="actors-intro"
        className="pt-40 pb-10 md:pt-12 md:pb-[30px] sm:pt-8 sm:pb-6"
        text={"우리를 소개할게요"}
        textClassName="text-h3 md:text-h4 sm:text-h4"
      />
      <Section className="md:border-b md:pb-[78px] sm:border-b sm:pb-[60px]">
        <Container className="px-[106px] lg:px-[34px] md:px-0 sm:px-0">
          <div className="w-full grid place-items-center grid-cols-5 gap-y-9 lg:grid-cols-4 md:grid-cols-4 md:gap-y-6 sm:hidden">
            {actorData}
          </div>
          {/* 2줄 짜리 캐러셀 */}
          <TwoRowCarousel
            images={actorData}
            pictureClassName=""
            className="sm:block hidden"
            isAutoPlay
          />
        </Container>
      </Section>
    </>
  );
};

export default ActorsIntro;
