"use client";
import Container from "@/components/atoms/disable/Container";
import Text from "@/components/atoms/disable/Text";
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
        className="pt-[188px] pb-[56px]"
        text={
          <>
            우리를 소개할게요
            <Button variant={"navbarBtn"} className="absolute sm:right-[124px] right-[24px]">
              <Text type="paragraph" variant={"web_h6"}>
                전체 보기
              </Text>
            </Button>
          </>
        }
      />
      {/* <Container variant={"main"}>
        <div className="flex justify-between items-center mb-[56px]">
          <Text type="paragraph" variant={"web_h3"} className="">
            우리를 소개할게요
          </Text>
          <Button variant={"navbarBtn"}><Text type="paragraph" variant={"web_h6"}>전체 보기</Text></Button>
        </div>
      </Container> */}
      <div className="h-auto border-b border-solid border-black w-full box-border "></div>

      <Container
        variant={"main"}
        className="relative h-[345px] sm:block hidden"
      >
        <NewCarousel
          images={photoData}
          pictureClassName="h-[345px] w-[252px] border-x border-solid border-black"
          isPrevNextBtn
          isAutoPlay
          isLoop
        />
      </Container>
      <div
        className="relative h-[199px] sm:hidden block"
      >
        <NewCarousel
          images={photoData}
          pictureClassName="h-[199px] w-[148px] border-x border-solid border-black"
          isAutoPlay
          isLoop
        />
      </div>
    </div>
  );
};

export default MemberPrev;
