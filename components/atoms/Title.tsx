"use client";
import React from "react";
import Container from "./Container";
import Text from "./Text";
import { cn } from "@/lib/utils";

type Props = {
  isUnderLine: boolean;
  text: string;
  pt: string;
  pb: string;
  align?: "right" | "left" | "center";
};
const underLineCss = "border-b border-solid border-black box-border";

const Title = ({ isUnderLine, text, pt, pb, align }: Props) => {
  align = align ? align : "left";
  const commonClassNames = cn(`w-full pt-[${pt}] pb-[${pb}] ${
    isUnderLine ? underLineCss : ""
  }`)
  return (
    <div
      className={commonClassNames}
    >
      <Container variant={"main"}>
        <Text type="paragraph" variant={"web_h3"} className={`text-${align}`}>
          {text}
        </Text>
      </Container>
    </div>
  );
};

export default Title;
