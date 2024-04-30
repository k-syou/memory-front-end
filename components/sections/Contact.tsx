import Container from "@/components/atoms/Container";
import React from "react";
import { CiMail } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import Button from "../atoms/Button";
import Section from "../atoms/Section";
import Title from "../atoms/Title";
import { ma_txt_05_01 } from "./main/constants";
import { RiKakaoTalkFill } from "react-icons/ri";

// Mail, Insta 버튼 ClassName
const btnClassName = "w-[140px] h-[140px] sm:w-[77px] sm:h-[77px] justify-center flex";
const iconClassName = "my-auto w-14 h-14 sm:w-8 sm:h-8";

const Contact = () => {
  return (
    <>
      <Title
        text={ma_txt_05_01}
        className="mt-[260px] md:mt-[120px] sm:mt-12 mb-10 md:mb-8 sm:mb-6"
        textClassName="text-h3 sm:text-h4 sm:mx-auto"
        align="text-center"
      />
      <Section className="pb-20 sm:pb-[60px] relative overflow-visible">
        {/* <ellipse cx={300} cy={300} rx={300} ry={300} className="w-[3200px] h-[900px] bg-gradient-to-b from-grad2-1 to-grad2-2 absolute -z-10 -top-[100px] left-[50%] translate-x-[-50%]"></ellipse> */}
        <div className="w-[2167px] h-[951px] bg-gradient-to-b from-grad2-1 to-grad2-2 rounded-t-[70%] absolute -z-10 -top-[150px] left-[50%] translate-x-[-50%]"></div>
        <Container className="flex justify-center mx-auto items-center gap-8 sm:gap-[18px]">
          {/* 메일버튼 */}
          <Button
            variant={"circleBtn"}
            btnColor={"point-sub2"}
            className={btnClassName}
          >
            <RiKakaoTalkFill className={iconClassName} />
          </Button>
          {/* 인스타버튼 */}
          <Button
            variant={"circleBtn"}
            btnColor={"point-sub2"}
            className={btnClassName}
          >
            <CiInstagram className={iconClassName} />
          </Button>
        </Container>
      </Section>
    </>
  );
};

export default Contact;
