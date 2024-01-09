import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { forwardRef } from "react";

// font-family
const font_ko = "font-ko";
const font_en = "font-en";

// text variants
// class name values from figma
const TextVariants = cva("", {
    variants: {
        variant: {
            default: "text-base",
            desk_lg: "text-[5rem] font-bold leading-[6rem] -tracking-[0.1rem]",
            desk_md:
                "text-[3rem] font-bold leading-[3.6rem] -tracking-[0.06rem]",
            desk_sm:
                "text-[1.5rem] font-bold leading-[1.8rem] -tracking-[0.03rem]",
            desk_body: "text-base leading-[1.5rem] -tracking-[0.02rem]",
            desk_caption:
                "text-[0.5625rem] leading-[0.84375rem] -tracking-[0.01125rem]",
            mobile_lg:
                "text-[2.5rem] font-bold leading-[3rem] -tracking-[0.05rem]",
            mobile_md:
                "text-[2rem] font-bold leading-[2.4rem] -tracking-[0.04rem]",
            mobile_sm:
                "text-[1.5rem] font-bold leading-[1.8rem] -tracking-[0.03rem]",
            mobile_body: "text-base leading-[1.5rem] -tracking-[0.02rem]",
            mobile_caption:
                "text-[0.5625rem] leading-[0.84375rem] -tracking-[0.01125rem]",
        },
        language: {
            ko: font_ko,
            en: font_en,
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
    type: "heading" | "paragraph";
}

const Text = forwardRef<HTMLParagraphElement | HTMLHeadingElement, TextProps>(
    ({ className, variant, language, children, type, ...props }, ref) => {
        if (type === "heading") {
            return (
                <h1
                    className={cn(
                        TextVariants({ variant, language, className })
                    )}
                    ref={ref}
                >
                    {children}
                </h1>
            );
        } else {
            return (
                <p
                    className={cn(
                        TextVariants({ variant, language, className })
                    )}
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
