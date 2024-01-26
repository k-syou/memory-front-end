import Container from "@/components/atoms/Container";
import Title from "@/components/atoms/Title";
import React from "react";

const arr = new Array<string>(15).fill("1");
const ActorsIntro = () => {
  return (
    <>
      <Title
        isUnderLine={true}
        className="pb-[40px] pt-[180px]"
        text="우리를 소개할게요"
      />
      <div className="border-b border-solid border-black w-full box-border mx-auto">
        <Container variant={"main"} className="w-full flex gap-2 flex-wrap justify-items-start">
          {arr.map((value, idx) => {
            return (
              <div className="flex w-[252px] h-[417px] flex-col" key={idx}>
                <div className="w-full h-[345px] bg-black"></div>
                <div className="w-full h-[72px] bg-dark-gray"></div>
              </div>
            );
          })}
        </Container>
      </div>
    </>
  );
};

export default ActorsIntro;
