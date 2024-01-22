"use client";
import React, { useState } from "react";
import MenuButton from "./MenuButton";
import NavItem from "./NavItem";
import { motion as m } from "framer-motion";
import MenuWindow from "./MenuWindow";
import { MenuInfo, MenuInfos } from "./Navbar.d";
import { useRouter } from "next/navigation";

const menuInfos: MenuInfos = {
  menuNames: ["극단 기억", "공연", "예매", "사진"],
  subMenuInfo: [
    ["극단 소개", "배우 소개", "배우 모집"],
    ["공연", "리뷰"],
    ["예매페이지"],
    ["공연사진", "연습사진"],
  ],
  menuLinks: [
    [
      "/pages/about/about-troupe",
      "/pages/about/about-actors",
      "/pages/about/recruit-actors",
    ],
    ["/pages/program&play/play", "/pages/program&play/review"],
    ["/pages/ticket"],
    ["/pages/photo/photo-play", "/pages/photo/photo-practice"],
  ],
};

const Navbar = () => {
  const route = useRouter();

  const movePage = (url: string) => {
    let tempArr = new Array(menuInfos.menuNames.length).fill(false);
    setIsSideBarOpen(false);
    setArrIsMenuOpens(tempArr);
    route.push(url);
  };

  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const clickMenu = () => {
    let tempArr = new Array(menuInfos.menuNames.length).fill(false);
    setIsSideBarOpen(!isSideBarOpen);
    setArrIsMenuOpens(tempArr);
  };

  const [arrIsMenuOpens, setArrIsMenuOpens] = useState(
    new Array(menuInfos.menuNames.length).fill(false)
  );
  const clickSubMenu = (index: number) => {
    let tempArr = arrIsMenuOpens.slice();
    if (tempArr[index]) {
      tempArr[index] = false;
    } else {
      tempArr = new Array(menuInfos.menuNames.length).fill(false);
      tempArr[index] = true;
    }
    setArrIsMenuOpens(tempArr);
  };

  const renderMenuItem = () => {
    let tempMenuNames: Array<String> = menuInfos.menuNames;
    let subMenuInfos: Array<any> = menuInfos.subMenuInfo;
    let menuLinks = menuInfos.menuLinks;
    let result = tempMenuNames.map((value, idx) => {
      let subMenuInfo = subMenuInfos[idx];
      let menuLink = menuLinks[idx];
      let tempMenuInfo: MenuInfo = {
        menuName: value,
        subMenus: subMenuInfo,
        menuLinks: menuLink,
      };
      return (
        <NavItem
          key={`menu-${idx}`}
          isOpen={arrIsMenuOpens[idx]}
          onClick={clickSubMenu}
          idx={idx}
          menuInfo={tempMenuInfo}
          movePage={movePage}
        />
      );
    });
    return result;
  };
  return (
    <>
      <m.nav
        className={`fixed top-0 w-full h-20 border-b border-solid box-border border-collapse table`}
        animate={{
          backgroundColor: isSideBarOpen ? "#000" : "#fafafa",
          borderColor: !isSideBarOpen ? "#000" : "#fafafa",
        }}
      >
        {/* Menu Button */}
        <div className="absolute right-0 h-20 top-0 z-20">
          <MenuButton
            isOpen={isSideBarOpen}
            onClick={clickMenu}
            size={63}
            boxSize={80}
          />
        </div>

        <MenuWindow isSideBarOpen={isSideBarOpen} menuItem={renderMenuItem} />
      </m.nav>
      <div className="h-[80px]"></div>
    </>
  );
};

export default Navbar;
