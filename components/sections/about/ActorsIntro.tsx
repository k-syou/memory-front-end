import Container from "@/components/atoms/Container";
import Title from "@/components/atoms/Title";
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
  "/images/actors/프사_지은.png",
  "/images/actors/프사_혁진.png",
  "/images/actors/프사_영민.png",
]
const ActorsIntro = () => {
  return (
    <section id="actors-intro">
      <Title
        isUnderLine={true}
        className="pb-[40px] pt-[180px]"
        text="우리를 소개할게요"
      />
      <div className="border-b border-solid border-black w-full box-border mx-auto">
        <Container variant={"main"} className="w-full grid grid-cols-6 place-items-center gap-y-[72px]">
          {photoData.map((value, idx) => {
            let is_border_t = idx > 5;
            return (
              <div className={`flex w-[252px] h-[417px] flex-col border-x-black border-box ${is_border_t ? 'border-t' : ''}`} key={idx}>
                <div className="w-full h-[345px]">
                  <Image src={value} width={1920} height={1920} alt=""></Image>
                </div>
                <div className="w-full h-[72px] bg-dark-gray border-y-black"></div>
              </div>
            );
          })}
        </Container>
      </div>
    </section>
  );
};

export default ActorsIntro;
