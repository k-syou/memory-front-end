import Text from "@/components/atoms/Text";
import React from "react";
import PlusIcon from "@/public/svg/mdi-light_plus.svg";
import CloseIcon from "@/public/svg/mdi-light_close.svg";
import { MenuInfo } from "./Navbar";
import { motion as m } from "framer-motion";

type Props = {
  menuInfo: MenuInfo;
  isOpen?: boolean;
  onClick?: any;
  idx: number;
};
const NavItem = ({ menuInfo, isOpen, onClick, idx }: Props) => {
  const menuName = menuInfo.menuName;
  const subMenuNames: Array<String> = menuInfo.subMenus;
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
          <m.ul
            className={`pl-[90px]`}
            initial={{ scale: 0, height: 0 }}
            animate={{ scale: 1, height: isOpen ? "auto" : 0 }}
          >
            {subMenuNames.map((value, i) => {
              return (
                <li key={i} className="my-4 text-start">
                  <Text type="link" className="text-white" url={menuInfo.menuLinks[i]} variant={"web_h5"}>{value}</Text>
                </li>
              );
            })}
          </m.ul>
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
