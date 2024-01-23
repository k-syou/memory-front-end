import Container from "@/components/atoms/Container";
import Image from "next/image";
import React from "react";
import image from "@/public/images/MenuImage.png";
import Text from "@/components/atoms/Text";

const Main02 = () => {
  return (
    <div className="min-h-[900px] border-b border-solid border-black w-full box-border">
      <div className="h-[400px] border-b border-solid border-black w-full box-border">
        <Container variant={"main"} className="flex h-full">
          <div className="w-[5%] h-full"></div>
          <div className="w-[40%] h-full bg-black relative overflow-hidden">
            <Image src={image} alt="임시이미지" className="img" />
          </div>
          <div className="w-[55%] pl-[5%] pr-[15%] my-auto">
            <div className="mb-8">
              <Text variant={"web_h3"} className="">
                기억은요,
              </Text>
            </div>
            <div>
              <Text variant={"web_h6"}>
                모든 국민은 소급입법에 의하여 참정권의 제한을 받거나 재산권을
                박탈당하지 아니한다. 모든 국민은 법률이 정하는 바에 의하여
                선거권을 가진다. 이 헌법시행 당시의 대법원장과 대법원판사가 아닌
                법관은 제1항 단서의 규정에 불구하고 이 헌법에 의하여 임명된
                것으로 본다.<br></br>
                제2항의 재판관중 3인은 국회에서 선출하는 자를, 3인은 대법원장이
                지명하는 자를 임명한다. 모든 국민은 학문과 예술의 자유를 가진다.
                대통령은 헌법과 법률이 정하는 바에 의하여 국군을 통수한다.
              </Text>
            </div>
          </div>
        </Container>
      </div>

      <div className="h-[500px] w-full">
        <Container variant={"main"} className="flex h-full">
          <div className="w-[15%] h-full border-r border-solid"></div>
          <div className="w-[50%] my-auto pl-[5%] pr-[5%]">
            <div className="mb-8">
              <Text variant={"web_h3"} className="">
                기억은요,
              </Text>
            </div>
            <div>
              <Text variant={"web_h6"}>
                모든 국민은 소급입법에 의하여 참정권의 제한을 받거나 재산권을
                박탈당하지 아니한다. 모든 국민은 법률이 정하는 바에 의하여
                선거권을 가진다. 이 헌법시행 당시의 대법원장과 대법원판사가 아닌
                법관은 제1항 단서의 규정에 불구하고 이 헌법에 의하여 임명된
                것으로 본다.<br></br>
                제2항의 재판관중 3인은 국회에서 선출하는 자를, 3인은 대법원장이
                지명하는 자를 임명한다. 모든 국민은 학문과 예술의 자유를 가진다.
                대통령은 헌법과 법률이 정하는 바에 의하여 국군을 통수한다.
              </Text>
            </div>
          </div>
          <div className="w-[30%] h-full bg-black relative overflow-hidden">
            <Image src={image} alt="임시이미지" className="img" />
          </div>
          <div className="w-[5%] h-full"></div>
        </Container>
      </div>
    </div>
  );
};

export default Main02;
