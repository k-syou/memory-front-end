"use client";
import Button from "@/components/atoms/Button";
import Container from "@/components/atoms/Container";
import Enter from "@/components/atoms/Enter";
import Section from "@/components/atoms/Section";
import Text from "@/components/atoms/Text";
import Title from "@/components/atoms/Title";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

const RecruitActor = () => {
  const mainImage: StaticImport = require("@/public/images/mainImage01.jpg");
  return (
    <>
      <Title
        id="recruit-actor"
        textClassName="text-h3 md:text-h4 sm:text-h4"
        isUnderLine
        className="pb-11 pt-[160px] md:pt-12 md:pb-4 md:border-b-0 sm:pt-8 sm:pb-4 sm:border-b-0"
        text={<>함께, <Enter sm/>기억 할래요?</>}
      /> 
      <Section border={"bottom"} className="md:pb-14 sm:pb-14">
        <Container className="flex md:flex-col sm:px-6 sm:flex-col">
          <div className="flex flex-col w-[858px] pt-11 lg:w-[514px] md:w-full md:pt-0 sm:w-full sm:pt-0">
            <div className="mb-4 md:hidden sm:hidden">
              <Text className="text-h5">소중한 기억, 함께 만들어요</Text>
            </div>
            <div className="w-[600px] mb-9 lg:w-[452px] md:w-[640px] md:mb-8 sm:w-full sm:mb-8">
              <Text className="text-b1">
                극단 기억에서,
                <br />
                우리는 시인도 목사도 의사도 아버지도, 때론 사람이 아닌 그
                무엇인가도 될 수 있습니다.
                <br />
                우리는 다양한 배경과 경험을 가진 예술 가들을 환영하며, 각자의
                개성을 존중합니다.
                <br />
                여러분이 가진 예술적 열정을 함께 나누고, 무대 위에서 함께 특별한
                순간을 기다리고 있습니다.
              </Text>
            </div>
            <Button variant={"downloadBtn"} className="md:mx-auto sm:mx-auto">지원서 다운로드</Button>
          </div> 
          <div className="bg-black w-[582px] overflow-hidden h-[415px] lg:w-[506px] lg:h-[360px] md:mt-8 md:mx-auto md:w-[555px] md:h-[355px] sm:mt-8 sm:w-full sm:h-[200px]">
            <Image
              src={mainImage}
              alt="이미지"
              width={1920}
              height={1920}
              className="h-full"
            ></Image>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default RecruitActor;
