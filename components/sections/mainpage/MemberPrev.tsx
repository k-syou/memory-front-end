"use client";
import Container from "@/components/atoms/Container";
import Text from "@/components/atoms/Text";
import NewCarousel from "@/components/atoms/NewCarousel";
import Button from "@/components/atoms/Button";
import Title from "@/components/atoms/Title";

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
    <div className="h-auto border-b border-solid border-black w-full box-border">
      <Title
        textClassName="text-h3"
        className="pt-[160px] pb-[40px]"
        text={
          <>
            우리를 소개할게요
            <Button variant={"navbarBtn"} className="absolute right-0 top-[50%] translate-y-[-50%]">
              <Text type="paragraph" className="text-b1">
                전체 보기
              </Text>
            </Button> 
          </>
        }
      />
      <div className="h-auto border-b border-solid border-black w-full box-border "></div>

      <Container
        className="relative h-full"
      >
        <NewCarousel
          images={photoData}
          pictureClassName="h-[315px] w-[230px] border-x border-solid border-black"
          isPrevNextBtn
          isAutoPlay
          isLoop
        />
      </Container>
    </div>
  );
};

export default MemberPrev;
