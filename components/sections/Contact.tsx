import Container from "@/components/atoms/Container";
import React from "react";
import { CiMail } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import Button from "../atoms/Button";
import Section from "../atoms/Section";
import Title from "../atoms/Title";
import { ma_txt_05_01 } from "./main/constants";

// Mail, Insta 버튼 ClassName
const btnClassName = "w-[140px] h-[140px] sm:w-[77px] sm:h-[77px] justify-center flex";
const iconClassName = "my-auto w-14 h-14 sm:w-8 sm:h-8";

const Contact = () => {
  return (
    <>
      <Title
        text={ma_txt_05_01}
        className="mt-[160px] md:mt-[120px] sm:mt-12 mb-10 md:mb-8 sm:mb-6"
        textClassName="text-h3 sm:text-h4 sm:mx-auto"
        align="text-center"
      />

      <Section border={"bottom"} className="pb-20 sm:pb-[60px]">
        <Container className="flex justify-center mx-auto items-center gap-8 sm:gap-[18px]">
          {/* 메일버튼 */}
          <Button
            variant={"circleBtn"}
            className={btnClassName}
          >
            <CiMail className={iconClassName} />
          </Button>
          {/* 인스타버튼 */}
          <Button
            variant={"circleBtn"}
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
