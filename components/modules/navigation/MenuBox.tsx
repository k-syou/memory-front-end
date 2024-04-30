import Text from "@/components/atoms/Text";
import React from "react";
import { MenuInfos } from "./Navbar.d";

type Props = {
  id?: string;
  menuInfos: MenuInfos;
};

const MenuBox = ({ id, menuInfos }: Props) => {
  const renderSubMenus = () => {
    let menuInfo = menuInfos.subMenuInfo;
    let menuLinks = menuInfos.subMenuLinks;
    return menuInfo.map((info: Array<string>, idx) => {
      return (
        <ul className="w-40 text-center" key={`sub-${idx}`}>
          {info.map((text, idx2) => {
            return (
              <li key={`sub-item-${idx2}`} className="mb-[30px]">
                <Text
                  className="text-s2"
                  type="link"
                  url={menuLinks[idx][idx2]}
                >
                  {text}
                </Text>
              </li>
            );
          })}
        </ul>
      );
    });
  };

  return (
    <div
      id={id}
      className="w-full absolute top-24 md:top-14 right-0 rounded-[32px] bg-grad1-1 flex pt-[30px] z-50"
    >
      {renderSubMenus()}
    </div>
  );
};

export default MenuBox;
