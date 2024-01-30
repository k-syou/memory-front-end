import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import Link from "next/link";
import { forwardRef } from "react";

// text variants
// class name values from figma
const ButtonVariants = cva("border border-solid border-black box-border text-black hover:text-milky-white bg-milky-white hover:bg-black", {
  variants: {
    variant: {
      default: "", 
      navbarBtn: "py-2 px-[22px] rounded-[78px]", 
      backToListBtn: "py-2 px-[16px] rounded-[78px]",
      circleBtn:"rounded-full"
    }, 
  },
  defaultVariants: {
    variant: "default", 
  },
});

export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <button className={cn(ButtonVariants({ variant, className }))}>{children}</button>
    )
  }
);
Button.displayName = "Button"; 
 
export default Button;
