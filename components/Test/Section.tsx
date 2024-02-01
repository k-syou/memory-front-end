import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { forwardRef } from "react";

// text variants
// class name values from figma
const TextVariants = cva("box-border border-solid", {
  variants: {
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
  },
});

export interface SectionPropsProps
  extends React.HTMLAttributes<HTMLParagraphElement | HTMLHeadingElement>,
    VariantProps<typeof TextVariants> {
}

const Section = forwardRef<
  HTMLParagraphElement | HTMLHeadingElement,
  SectionPropsProps
>(({ className, border, borderColor, children, type, url, ...props }, ref) => {
  return <section className={cn()}>{children}</section>;
});
Section.displayName = "Section";

export default Section;
