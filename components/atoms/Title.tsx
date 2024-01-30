"use client";
import React from "react";
import Container from "./Container";
import Text from "./Text";
import { cn } from "@/lib/utils";

type Props = {
  isUnderLine?: boolean;
  text: any;
  className: string;
  align?: "text-right" | "text-left" | "text-center";
};
const underLineCss = "border-b border-solid border-black box-border";

const Title = ({ isUnderLine, text, align, className}: Props) => {
  align = align ? align : "text-left";
  const commonClassNames = cn(`w-full ${isUnderLine ? underLineCss : ""}`, className);
  return (
    <div className={commonClassNames}>
      <Container variant={"main"} className="relative">
        <Text type="paragraph" variant={"web_h5"} className={cn(align, "sm:hidden block")}>
          {text}
        </Text>
        <Text type="paragraph" variant={"web_h3"} className={cn(align, "sm:block hidden")}>
          {text}
        </Text>
      </Container>
    </div>
  );
};

export default Title;
