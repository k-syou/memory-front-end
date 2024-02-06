"use client";
import React from "react";
import Container from "./Container";
import Text from "./Text";
import { cn } from "@/lib/utils";
import Section from "./Section";

type Props = {
  id?: string;
  isUnderLine?: boolean;
  text: any;
  className: string;
  align?: "text-right" | "text-left" | "text-center";
  textClassName: string;
  containerClassName?: string;
};

const Title = ({ id, isUnderLine, text, align, className, textClassName, containerClassName}: Props) => {
  align = align ? align : "text-left";
  return (
    <Section id={id} border={isUnderLine ? "bottom" : "default"} className={className}>
      <Container className={cn(containerClassName,"relative")}>
        <Text type="paragraph" className={cn(align, "block", textClassName)}>
          {text}
        </Text>
      </Container>
    </Section>
  );
};

export default Title;
