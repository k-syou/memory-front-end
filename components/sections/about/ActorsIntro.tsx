import Container from "@/components/atoms/Container";
import Section from "@/components/atoms/Section";
import Title from "@/components/atoms/Title";
import Text from "@/components/atoms/disable/Text";
import Image from "next/image";
import React from "react";
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
  "/images/actors/프사_지은.png",
  "/images/actors/프사_혁진.png",
  "/images/actors/프사_영민.png",
];
const nameData = [
  "김지은",
  "권혁진",
  "고영민",
  "김지은",
  "권혁진",
  "고영민",
  "김지은",
  "권혁진",
  "고영민",
  "김지은",
  "권혁진",
  "고영민",
];
const ActorsIntro = () => {
  return (
    <>
      <Title
        id="actors-intro"
        className="pt-40 pb-10"
        text={"우리를 소개할게요"}
        textClassName="text-h3"
      />
      <Section>
        <Container className="px-[106px]">
          <div className="w-full grid place-items-center grid-cols-5 gap-y-9 lg:grid-cols-4">
            {photoData.map((value, idx) => {
              return (
                <div
                  key={idx}
                  className="flex flex-col w-[220px] border box-border"
                >
                  <div className="w-full h-[300px]">
                    <Image
                      src={value}
                      width={1920}
                      height={1920}
                      alt=""
                    ></Image>
                  </div>
                  <div className="w-full h-[54px] border-t box-border bg-gray100 flex justify-center items-center">
                    <Text className="text-h6">{nameData[idx]}</Text>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>
    </>
  );
};

export default ActorsIntro;
