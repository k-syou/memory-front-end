import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { forwardRef } from "react";

// text variants
// class name values from figma
const TextVariants = cva("tracking-normal transition-all duration-300", {
  variants: {
    language: {
      ko: "font-ko",
      en: "font-en",
    },
  },
  defaultVariants: {
    language: "ko",
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement | HTMLHeadingElement>,
    VariantProps<typeof TextVariants> {
  type?: "heading" | "paragraph" | "link";
  url?: string | String;
}

const Text = forwardRef<HTMLParagraphElement | HTMLHeadingElement, TextProps>(
  ({ className, language, children, type, url, ...props }, ref) => {
    if (type === "heading") {
      return (
        <h1
          id={props.id}
          className={cn(TextVariants({ language, className }))}
          ref={ref}
        >
          {children}
        </h1>
      );
    } else if (type === "link") {
      if (url === undefined || url === null || url === "") {
        console.log("need url option");
        url = "/";
      }
      return (
        <a
          id={props.id}
          className={cn(TextVariants({ language, className }))}
          href={String(url!)}
        >
          {children}
        </a>
      );
    } else {
      return (
        <p
          id={props.id}
          className={cn(TextVariants({ language, className }))}
          ref={ref}
        >
          {children}
        </p>
      );
    }
  }
);
Text.displayName = "Text";

export default Text;
