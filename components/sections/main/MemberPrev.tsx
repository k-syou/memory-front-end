"use client";
import Container from "@/components/atoms/Container";
import Text from "@/components/atoms/Text";
import NewCarousel from "@/components/atoms/NewCarousel";
import Button from "@/components/atoms/Button";
import Title from "@/components/atoms/Title";
import Section from "@/components/atoms/Section";
import { ma_txt_03_01, ma_txt_03_02 } from "./constants";

const photoData = [
  "/images/actors/프사_지은.png",
  "/images/actors/프사_혁진.png",
  "/images/actors/프사_영민.png",
  "/images/actors/프사_지은.png",
  "/images/actors/프사_혁진.png",
  "/images/actors/프사_영민.png",
  "/images/actors/프사_지은.png",
  "/images/actors/프사_혁진.png",
  "/images/actors/프사_영민.png",
];

const MemberPrev = () => {
  return (
    <>
      <Title
        textClassName="text-h3 sm:text-h4 sm:w-[140px]"
        className="pt-[160px] sm:pt-12 pb-[40px] sm:pb-6"
        containerClassName="sm:px-[24px]"
        text={
          <>
            {ma_txt_03_01}
            <Button
              variant={"navbarBtn"}
              className="absolute right-0 top-[50%] translate-y-[-50%]"
            >
              <Text type="paragraph" className="text-b1 sm:text-caption">
                {ma_txt_03_02}
              </Text>
            </Button>
          </>
        }
        isUnderLine
      />
      <Section border={"bottom"}>
        <Container className="relative h-full">
          {/* 테블릿, 데스크탑 캐러셀 */}
          <NewCarousel
            images={photoData}
            pictureClassName="h-[315px] w-[230px] md:h-[256px] md:w-[186px] border-x border-solid border-black"
            className="sm:hidden block"
            isPrevNextBtn
            isAutoPlay
            isLoop
          />
          {/* 모바일 캐러셀 */}
          <NewCarousel
            images={photoData}
            pictureClassName="h-[200px] w-[150px] border-x border-solid border-black"
            className="sm:block hidden"
            isAutoPlay
            isLoop
          />
        </Container>
      </Section>
    </>
  );
};

export default MemberPrev;
