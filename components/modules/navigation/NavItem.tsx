import Text from "@/components/atoms/Text";
import React from "react";
import PlusIcon from "@/public/svg/mdi-light_plus.svg";
import CloseIcon from "@/public/svg/mdi-light_close.svg";

type Props = {
  menuInfo?: {};
  isOpen?: boolean;
  onClick?: any;
  idx:number;
};
const NavItem = ({ menuInfo, isOpen, onClick,idx }: Props) => {
  const menuName = "극단 기억";
  // const menuName = menuInfo.menuName;
  const subMenuNames: Array<string> = ["극단 소개", "배우 소개", "배우 모집"];
  return (
    <div className="pl-[10%]">
      <div className="border-b border-white border-solid pb-6">
        <button className="flex" onClick={() => onClick(idx)}>
          {isOpen ? <div className="ml-[-21px]"><CloseIcon /></div> : <PlusIcon />}
          <Text
            variant={"web_h2"}
            type="paragraph"
            className={`align-middle h-20 my-auto ${isOpen ? "ml-[-19px]":""}`}
          >
            {menuName}
          </Text>
        </button>
        <div className={`flex overflow-hidden ${isOpen ? "" : "h-0"} transition-all duration-1000`}>
          <ul className="pl-[115px]">
            {subMenuNames.map((value, i) => {
              return (
                <li key={i} className="my-4">
                  <Text variant={"web_h5"}>{value}</Text>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavItem;
