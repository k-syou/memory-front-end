import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { forwardRef } from "react";

// text variants
// class name values from figma
const ContainerVariants = cva("container box-border border-solid", {
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

export interface SectionProps
  extends React.HTMLAttributes<HTMLParagraphElement | HTMLHeadingElement>,
    VariantProps<typeof ContainerVariants> {
}

const Container = forwardRef<
  HTMLParagraphElement | HTMLHeadingElement,
  SectionProps
>(({ className, border, borderColor, children, ...props }, ref) => {
  return <div id={props.id} className={cn(ContainerVariants({className, border, borderColor}))}>{children}</div>;
});
Container.displayName = "Section";

export default Container;
