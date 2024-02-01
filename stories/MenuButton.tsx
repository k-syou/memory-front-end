import Text from "@/components/atoms/disable/Text";
import { motion as m } from "framer-motion";
import React from "react";
type Props = {
  isOpen?: boolean;
  onClick?: any;
  size: number; // pixel
  boxSize: number; // pixel
};

const MenuButton = ({ isOpen, onClick }: Props) => {
  const getMenuButton = () => {
    return (
      <m.button onClick={() => onClick()}
        animate={{
          borderColor: isOpen ? "#fafafa":"#000",
        }}
        transition={{
          duration: 0
        }}
        className={`menu-btn ${isOpen ? 'menu-open':''}`}
      >
        <span
          className={`material-icons text-xl justify-center items-center mr-4`}
        >
          {isOpen ? "close" : "menu"}
        </span>
        <Text variant={"web_h5"} className="items-center justify-center">
          {isOpen ? "닫기" : "메뉴"}
        </Text>
      </m.button>
    );
  };

  return getMenuButton();
};

export default MenuButton;
