import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { forwardRef } from "react";

// text variants
// class name values from figma
const SectionVariants = cva("box-border border-solid min-w-[360px]", {
  variants: {
    overflow: {
      default: "overflow-hidden",
      visible: "overflow-visible"
    },
    border: {
      default: "",
      bottom: "border-b",
      top: "border-t",
      left: "border-l",
      right: "border-r",
      y: "border-y",
      x: "border-x",
      all: "border",
    },
    borderColor: {
      black: "border-black",
    },
  },
  defaultVariants: {
    border: "default",
    borderColor: "black",
    overflow: "default"
  },
});

export interface SectionProps
  extends React.HTMLAttributes<HTMLParagraphElement | HTMLHeadingElement>,
    VariantProps<typeof SectionVariants> {
}

const Section = forwardRef<
  HTMLParagraphElement | HTMLHeadingElement,
  SectionProps
>(({ className, border, borderColor, children, overflow, ...props }, ref) => {
  return <section id={props.id} className={cn(SectionVariants({className, border, borderColor, overflow}))}>{children}</section>;
});
Section.displayName = "Section";

export default Section;
