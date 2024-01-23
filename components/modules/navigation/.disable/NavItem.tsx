"use client"
import Text from "@/components/atoms/Text";
import React from "react";
import PlusIcon from "@/public/svg/mdi-light_plus.svg";
import CloseIcon from "@/public/svg/mdi-light_close.svg";
import { MenuInfo } from "./Navbar.d";
import { AnimatePresence, motion as m } from "framer-motion";
import { useRouter } from "next/navigation";
type Props = {
  menuInfo: MenuInfo;
  isOpen?: boolean;
  onClick?: any;
  idx: number;
  movePage: any
};
const NavItem = ({ menuInfo, isOpen, onClick, idx, movePage }: Props) => {
  const menuName = menuInfo.menuName;
  const subMenuNames: Array<String> = menuInfo.subMenus;
  const route = useRouter();
  return (
    <div className="pl-[10%]">
      <div className={`${idx === 0 ? "" : "mt-6"}`}>
        <button
          className="flex justify-center items-center"
          onClick={() => onClick(idx)}
        >
          {isOpen ? (
            <m.div
              initial={{ scale: 0.7, opacity: 0.7 }}
              animate={{ scale: 1, opacity: 1, rotate: [0, 180] }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              exit={{ scale: 0.7, opacity: 0 }}
            >
              <CloseIcon />
            </m.div>
          ) : (
            <m.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, rotate: [0, -180] }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              exit={{ scale: 0.7, opacity: 0 }}
            >
              <PlusIcon />
            </m.div>
          )}
          <Text
            variant={"web_h2"}
            type="paragraph"
            className={`align-middle h-20 my-auto ml-6 ${
              isOpen ? "" : "opacity-60"
            }`}
          >
            {menuName}
          </Text>
        </button>
        <m.div className={`flex w-full overflow-hidden`}>
          <AnimatePresence>
            {isOpen && (
              <m.ul
                variants={{
                  out: {
                    height: 0,
                    opacity: 0,
                  },
                  in: {
                    opacity: 1,
                    height: "auto",
                    transition: {
                      duration: 0.6,
                      delayChildren: 0.1,
                      staggerChildren: 0.1,
                    },
                  },
                }}
                initial="out"
                animate="in"
                exit="out"
                className={`pl-[90px]`}
              >
                {subMenuNames.map((value, i) => {
                  return (
                    <m.li
                      key={i}
                      className="my-4 text-start"
                      variants={{
                        out: {
                          opacity: 0,
                        },
                        in: {
                          opacity: 1,
                        },
                      }}
                    >
                      <button
                        onClick={() =>
                          movePage(menuInfo.menuLinks[i].toString())
                        }
                      >
                        <Text
                          type="paragraph"
                          className="text-white"
                          variant={"web_h5"}
                        >
                          {value}
                        </Text>
                      </button>
                    </m.li>
                  );
                })}
              </m.ul>
            )}
          </AnimatePresence>
        </m.div>
      </div>
      <div
        className={`ml-[90px] w-full h-6 border-b border-white border-solid ${
          isOpen ? "" : "opacity-60"
        }`}
      ></div>
    </div>
  );
};

export default NavItem;
