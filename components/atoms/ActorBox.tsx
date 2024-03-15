"use client"
import Image from "next/image";
import Text from "./Text";
import { VariantProps, cva } from "class-variance-authority";
import { forwardRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";

const ActorBoxVariants = cva("tracking-normal", {
  variants: {
    actorColor: {
      고영민: "bg-min-purple",
      권혁진: "bg-jin-blue",
      김권수: "bg-kwon-sky",
      김규나: "bg-gyu-gray",
      김지은: "bg-jing-yellow",
      온훈: "bg-hoon-brown",
      이다솜: "bg-som-white",
      이시아: "bg-sha-pink",
      임도균: "bg-do-orange",
      정진우: "bg-noo-green",
      최석호: "bg-ko-red",
      김지영: "bg-jyeong-black",
      default: ""
    },
  },
  defaultVariants: {
    actorColor: "default"
  },
});
export interface ActorBoxProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof ActorBoxVariants> {
  image: any;
  actorName: string;
}

const ActorBox = forwardRef<HTMLDivElement, ActorBoxProps>(
  ({ image, actorName, actorColor, ...props }, ref) => {
    const id = `actor-name-${actorName}`
    const [is_hover, setIs_hover] = useState<boolean>(false)
    useEffect(() => {
      document.getElementById(id)?.addEventListener("mouseover",() => {
        setIs_hover(x => true);
      })
      document.getElementById(id)?.addEventListener("mouseleave",() => {
        setIs_hover(x => false);
      })
    })
    const router = useRouter()
    const params = useSearchParams()
    const moveDetail = () => {
      console.log("이동")
      router.push(`/about/detail?name=${actorName}`)
    }

    return (
      <div 
        id={id}
        className={"border box-border flex flex-col w-[220px] md:w-[174px] sm:w-[148px] cursor-pointer"}
        onClick={() => moveDetail()}
        >
        <div className="w-full h-[300px] md:h-[237px] sm:h-[200px]">
          <Image
            src={image}
            width={1920}
            height={1920}
            alt={actorName}
            className="h-[300px] md:h-[237px] sm:h-[200px]"
          ></Image>
        </div>
        <div
          className={
            `border-t box-border ${is_hover ? ActorBoxVariants({actorColor}) : "bg-gray700"} text-h6 flex justify-center items-center w-full h-[54px] sm:h-11`
          }
        >
          <Text type="paragraph" className={cn(`sm:text-b1 ${is_hover ? "text-black" : "text-gray100"}`)}>{actorName}</Text>
        </div>
      </div>
    );
  }
);
ActorBox.displayName = "ActorBox";

export default ActorBox;
