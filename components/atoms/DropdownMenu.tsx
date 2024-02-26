"use client";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { forwardRef, useState } from "react";
import Text from "./Text";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

// text variants
// class name values from figma
const DropdownMenuVariants = cva("", {
  variants: {
    variant: {
      default: "",
    },
    menuStyle: {
      default:
        "py-[10px] sm:py-2 pl-[10px] w-[96px] border-x border-t border-collapse box-border cursor-pointer sm:w-[80px] h-[46px] sm:h-10",
    },
    dropdownMenuStyle: {
      default: "top-[45px] sm:top-10 left-0 z-30",
    },
  },
  defaultVariants: {
    variant: "default",
    menuStyle: "default",
  },
});

export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof DropdownMenuVariants> {
  menuList: Array<string>;
  valueId: string;
}

const DropdownMenu = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, valueId, menuList, variant, children, menuStyle, ...props },
    ref
  ) => {
    const [selectIdx, setSelectIdx] = useState<number>(0);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const topMenuClick = () => {
      setIsOpen(!isOpen);
    };
    const dropdownMenuClick = (idx: number) => {
      setSelectIdx(idx);
      setIsOpen(!isOpen);
    }
    return (
      <div className={cn(`border-b relative overflow-visible bg-white h-[46px] sm:h-10`, className)}>
        <div
          className={cn(DropdownMenuVariants({ menuStyle }), "flex relative")}
          onClick={() => topMenuClick()}
        >
          <Text id={valueId} className="text-b1">
            {menuList[selectIdx]}
          </Text>
          <div className="my-auto absolute right-4 sm:right-2 top-[50%] translate-y-[-50%]">
            {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
        </div>

        <div className={`${isOpen ? "absolute" : "hidden"} flex-col bg-white border-b`}>
          {menuList.map((menu, idx) => {
            if (selectIdx === idx) {
              return <div key={idx}></div>;
            } else {
              return (
                <div
                  key={idx}
                  className={cn(DropdownMenuVariants({ menuStyle }), "border-t-0")}
                  onClick={() => dropdownMenuClick(idx)}
                >
                  <Text id={`${valueId}-${idx}`} className="text-b1 sm:text-b2">
                    {menu}
                  </Text>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
);
DropdownMenu.displayName = "DropdownMenu";

export default DropdownMenu;
