"use client";
import Container from "@/components/atoms/Container";
import Text from "@/components/atoms/Text";
import NewCarousel from "@/components/atoms/NewCarousel";
import Button from "@/components/atoms/Button";
import Title from "@/components/atoms/Title";
import Section from "@/components/atoms/Section";
import { ma_txt_03_01, ma_txt_03_02 } from "./constants";
import TwoRowCarousel from "@/components/atoms/TwoRowCarousel";
import Image from "next/image";

const actorNames = [
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
  "고영민",
];

const photoData = actorNames.map((value) => {
  return `/images/actors/${value}.png`;
});

const imageData = photoData.map((src, idx) => {
  return (
    <Image src={src} alt="demo_image" width={1920} height={1920} key={idx} />
  );
});

const MemberPrev = () => {
  return (
    <Section className="bg-gradient-to-b from-grad2-1 to-grad2-2 pb-[100px] overflow-hidden relative">
      <div className="absolute w-[430px] h-[430px] bg-gradient-to-b from-grad2-1 to-grad2-2 rounded-full left-[-200px] top-[-162px]"></div>
      <div className="absolute w-[577px] h-[577px] bg-gradient-to-b from-grad3-1 to-grad3-2 rounded-full right-[-303px] bottom-[-315px]"></div>
      <Title
        textClassName="text-h3 sm:text-h4 sm:w-[140px]"
        className="pt-[100px] sm:pt-12 pb-[40px] sm:pb-6 sm:border-b-0"
        containerClassName=""
        text={
          <>
            {ma_txt_03_01}
            <Button
              variant={"navbarBtn"}
              className="absolute right-0 sm:right-6 top-[50%] translate-y-[-50%]"
              btnColor={"sub-point"}
            > 
              <Text type="paragraph" className="text-b1 sm:text-caption">
                {ma_txt_03_02}
              </Text>
            </Button>
          </>
        }
      />
      <Section>
        <Container className="relative h-full sm:pb-14">
          {/* 테블릿, 데스크탑 캐러셀 */}
          <NewCarousel
            images={photoData}
            pictureClassName="h-[316px] w-[235px] md:h-[256px] md:w-[186px] bg-sub2 rounded-[32px]"
            className="sm:hidden block"
            isPrevNextBtn
            isAutoPlay
            isLoop
          />
          {/* 모바일 캐러셀 */}
          <TwoRowCarousel
            images={imageData}
            pictureClassName="h-[200px] w-[150px] border border-solid border-black"
            className="sm:block hidden"
            isAutoPlay
          />
          {/* <NewCarousel
            images={photoData}
            pictureClassName="h-[200px] w-[150px] border-x border-solid border-black"
            className="sm:block hidden"
            isAutoPlay
            isLoop
          /> */}
        </Container>
      </Section>
    </Section>
  );
};

export default MemberPrev;
