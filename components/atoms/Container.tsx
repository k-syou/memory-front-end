import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React, { forwardRef } from "react";

const ContainerVariants = cva("", {
  variants: {
    variant: {
      default: "container w-full mx-auto",
      main: "w-full sm:px-[124px] px-[24px]"
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof ContainerVariants> {}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <div className={cn(ContainerVariants({ variant, className }))} ref={ref}>
        {children}
      </div>
    );
  }
);
Container.displayName = "Container";

export default Container;
