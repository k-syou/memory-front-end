import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import Link from "next/link";
import { forwardRef } from "react";

// text variants
// class name values from figma
const ButtonVariants = cva("border border-solid border-black box-border", {
  variants: {
    variant: {
      default: "", 
      navbarBtn: "py-2 px-[22px] sm:px-3 rounded-[78px] sm:rounded-[20px]", 
      backToListBtn: "py-2 px-[16px] rounded-[78px]",
      circleBtn:"rounded-full transition duration-300",
      searchBtn:"px-5 py-[10px]"
    }, 
    btnColor: {
      default: "text-black hover:text-gray100 bg-gray100 hover:bg-black",
      black: "text-gray100 bg-black",
    },
    transition: {
      none: "transition-none",
      100: "transition duration-100",
      200: "transition duration-200",
      300: "transition duration-300",
      400: "transition duration-400",
      500: "transition duration-500",
    }
  },
  defaultVariants: {
    variant: "default", 
    transition: 300,
    btnColor: "default"
  },
});

export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, children, transition, btnColor, ...props }, ref) => {
    return (
      <button id={props.id} onClick={props.onClick} className={cn(ButtonVariants({ variant, className, transition, btnColor }),"")}>{children}</button>
    )
  }
);
Button.displayName = "Button"; 
 
export default Button;
