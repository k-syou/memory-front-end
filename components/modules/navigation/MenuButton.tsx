import Text from "@/components/atoms/Text";
import React from "react";
type Props = {
  isOpen?: boolean;
  onClick?: any;
  size: number; // pixel
  boxSize: number; // pixel
};

const MenuButton = ({ isOpen, onClick, size, boxSize }: Props) => {
  const getMenuButton = () => {
    if (!isOpen) {
      return (
        <button onClick={() => onClick()} className={`menu-btn`}>
          <span
            className={`material-icons text-xl justify-center items-center mr-4`}
          >
            menu
          </span>
          <Text variant={"web_h5"} className="items-center justify-center">
            메뉴
          </Text>
        </button>
      );
    } else {
      return (
        <button onClick={() => onClick()} className={`menu-btn menu-open`}>
          <span
            className={`material-icons text-xl justify-center items-center mr-4`}
          >
            close
          </span>
          <Text variant={"web_h5"} className="items-center justify-center">
            닫기
          </Text>
        </button>
      );
    }
  };

  return getMenuButton();
};

export default MenuButton;
