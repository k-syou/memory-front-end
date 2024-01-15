import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import Link from "next/link";
import { forwardRef } from "react";

// text variants
// class name values from figma
const TextVariants = cva("leading-normal tracking-normal", {
  variants: {
    variant: {
      default: "text-base",
      web_h1: "text-4xl font-light",
      web_h2: "text-3xl font-light",
      web_h3: "text-2xl font-normal",
      web_h4: "text-xl font-normal",
      web_h5: "text-lg font-normal",
      web_h6: "text-md font-normal",
      web_subtitle1: "text-base font-medium",
      web_subtitle2: "text-sm font-medium",
      web_body1: "text-base font-normal",
      web_body2: "text-sm font-normal",
      web_btn: "text-sm font-medium",
      web_caption: "text-xs font-normal",
      web_overline: "text-2xs font-normal"
    },
    language: {
      ko: "font-ko",
      en: "font-en",
      test: "font-test"
    },
  },
  defaultVariants: {
    variant: "default",
    language: "ko",
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement | HTMLHeadingElement>,
    VariantProps<typeof TextVariants> {
  type?: "heading" | "paragraph" | "link" | "none";
  url?: string | String;
}

const Text = forwardRef<HTMLParagraphElement | HTMLHeadingElement, TextProps>(
  ({ className, variant, language, children, type, url, ...props }, ref) => {
    if (type === "heading") {
      return (
        <h1
          className={cn(TextVariants({ variant, language, className }))}
          ref={ref}
        >
          {children}
        </h1>
      );
    } else if (type === "link") {
      if (url === undefined || url === null || url === '') {
        console.log('need url option');
        url = '/';
      }
      return (
        <Link
          className={cn(TextVariants({ variant, language, className }))}
          href={url!}
        >
          {children}
        </Link>
      );
    } else if (type === "paragraph") {
      return (
        <p
          className={cn(TextVariants({ variant, language, className }))}
          ref={ref}
        >
          {children}
        </p>
      );
    } else {
      return (
        <span
          className={cn(TextVariants({ variant, language, className }))}
          ref={ref}
        >
          {children}
        </span>
      );
    }
  }
);
Text.displayName = "Text";

export default Text;
