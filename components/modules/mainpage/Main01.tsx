"use client";
import Text from "@/components/atoms/Text";
import Image from "next/image";
import React from "react";
import MenuImage from "@/public/images/mainImage01.jpg";
import Container from "@/components/atoms/Container";
import Title from "@/components/atoms/Title";

const Main01 = () => {
    return (
        <>
            <Title
                isUnderLine={false}
                text="극단 기억에 오신 것을 환영합니다."
                // 아래처럼 바로 tailwindcss 클래스를 넘기기
                className="pt-[54px] pb-[120px]"
            />
            <div className="border-b border-solid border-black w-full box-border">
                <Container variant={"main"}>
                    <div className="w-full h-[950px] relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 mb-[152px]">
                        <Image
                            src={MenuImage}
                            alt=""
                            className="img scale-125"
                        ></Image>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Main01;
