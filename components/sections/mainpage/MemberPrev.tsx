"use client";
import Container from "@/components/atoms/Container";
import Text from "@/components/atoms/Text";
import NewCarousel from "@/components/atoms/NewCarousel";
import Button from "@/components/atoms/Button";
import Title from "@/components/atoms/Title";
import Section from "@/components/atoms/Section";

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
            우리를 소개할게요
            <Button
              variant={"navbarBtn"}
              className="absolute right-0 top-[50%] translate-y-[-50%]"
            >
              <Text type="paragraph" className="text-b1 sm:text-caption">
                전체보기
              </Text>
            </Button>
          </>
        }
        isUnderLine
      />
      <Section border={"bottom"}>
        <Container className="relative h-full">
          <NewCarousel
            images={photoData}
            pictureClassName="h-[315px] w-[230px] border-x border-solid border-black"
            className="sm:hidden block"
            isPrevNextBtn
            isAutoPlay
            isLoop
          />
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
