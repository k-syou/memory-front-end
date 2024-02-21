import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { forwardRef } from "react";

// text variants
// class name values from figma
const EnterVariants = cva("");

export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof EnterVariants> {
      sm?:boolean
      md?:boolean
      lg?:boolean
      lg2?:boolean
}

const Enter = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, lg2, lg, md, sm, ...props }, ref) => {
    let view: string;
    view = lg2 ? "inline" : "hidden";
    view = lg ? view + " lg:inline" : view + " lg:hidden";
    view = md ? view + " md:inline" : view + " md:hidden";
    view = sm ? view + " sm:inline" : view + " sm:hidden";
    return (
      <br id={props.id} className={cn(EnterVariants({ className }),view)} />
    )
  }
);
Enter.displayName = "Enter"; 
 
export default Enter;
