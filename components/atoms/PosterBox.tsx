"use client"
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import Image from "next/image";
import { forwardRef, useEffect, useState } from "react";
import Text from "./Text";

const PosterBoxVariants = cva("", {
  variants: {
    widthSize: {
      photoMain: "w-[252px]"
    },
    photoSize: {
      photoMain: "w-[252px] h-[360px] border box-border border-black"
    },
    contentSize: {
      photoMain: "w-[252px] h-20 border-x border-b box-border border-black"
    },
    mainColor: {
      lavender: "hover:bg-lavender bg-gray100",
      darkTurquoise: "hover:bg-dark-turquoise bg-gray100",
      woodBrown: "hover:bg-wood-brown bg-gray100"
    },
    hoverTextColor: {
      white: "text-white",
      black: "text-black"
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
    hoverTextColor: "white"
  },
});

export interface PosterBoxProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof PosterBoxVariants> {
  title: string,
  startYY_MM: string, // YY.MM
  endYY_MM: string, // YY.MM
  image: any,
  id: string
}
const PosterBox = forwardRef<HTMLDivElement, PosterBoxProps>(
  ({ className, widthSize, photoSize, contentSize, mainColor, transition, hoverTextColor, image, title, startYY_MM, endYY_MM, children, ...props }, ref) => {
    const [isHover, setIsHover] = useState(false)
    useEffect(() => {
      document.getElementById(props.id)?.addEventListener("mouseover", () => {
        setIsHover(true);
        console.log("is Hover True")
      })
      document.getElementById(props.id)?.addEventListener("mouseleave", () => {
        setIsHover(false);
        console.log("is Hover False")
      })
    })
    return (
      <div id={props.id} className={cn(PosterBoxVariants({ mainColor, widthSize, }), "cursor-pointer flex flex-col")}>
        <div className={cn(PosterBoxVariants({ photoSize, }), "relative")}>
          <Image src={image} alt="" fill />
        </div>
        <div className={cn(PosterBoxVariants({ contentSize, }), "py-4 pl-[18px]")}>
          <Text type="paragraph" className={`text-b1 ${isHover ? hoverTextColor : 'text-black'}`}>{title}</Text>
          <Text type="paragraph" className="text-b1 text-gray500">{`${startYY_MM} ~ ${endYY_MM}`}</Text>
        </div>
      </div>
    )
  }
);

PosterBox.displayName = "PosterBox";
export default PosterBox;