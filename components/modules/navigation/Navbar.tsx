"use client";
import React, { useState } from "react";
import MenuButton from "./MenuButton";
import NavItem from "./NavItem";
import { motion as m } from "framer-motion";
import MenuWindow from "./MenuWindow";


interface MenuInfos {
  menuNames: Array<String>;
  subMenuInfo: Array<any>;
  menuLinks: Array<any>;
}

export interface MenuInfo {
  menuName: String;
  subMenus: Array<String>;
  menuLinks: Array<String>;
}

const menuInfos: MenuInfos = {
  menuNames: ["극단 기억", "공연", "예매", "사진"],
  subMenuInfo: [
    ["극단 소개", "배우 소개", "배우 모집"],
    ["공연", "리뷰"],
    ["예매페이지"],
    ["공연사진", "연습사진"],
  ],
  menuLinks: [
    ["/pages/about/about-troupe", "/pages/about/about-actors", "/pages/about/recruit-actors"],
    ["/pages/program&play/play", "/pages/program&play/review"],
    ["/pages/ticket"],
    ["/pages/photo/photo-play", "/pages/photo/photo-practice"],
  ]
};

const Navbar = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const clickMenu = () => {
    let tempArr = new Array(menuInfos.menuNames.length).fill(false);
    setIsSideBarOpen(!isSideBarOpen);
    setArrIsMenuOpens(tempArr);
  };

  const [arrIsMenuOpens, setArrIsMenuOpens] = useState(new Array(menuInfos.menuNames.length).fill(false))
  const clickSubMenu = (index:number) => {
    let tempArr = arrIsMenuOpens.slice();
    if (tempArr[index]) {
      tempArr[index] = false;
    } else {
      tempArr = new Array(menuInfos.menuNames.length).fill(false);
      tempArr[index] = true;
    }
    setArrIsMenuOpens(tempArr);
  }

  const renderMenuItem = () => {
    let tempMenuNames:Array<String> = menuInfos.menuNames;
    let subMenuInfos:Array<any> = menuInfos.subMenuInfo;
    let menuLinks = menuInfos.menuLinks;
    let result = tempMenuNames.map((value, idx) => {
      
      let subMenuInfo = subMenuInfos[idx];
      let menuLink = menuLinks[idx]
      let tempMenuInfo:MenuInfo = {
        menuName: value,
        subMenus: subMenuInfo,
        menuLinks: menuLink,
      }
      return (
        <NavItem key={`menu-${idx}`} isOpen={arrIsMenuOpens[idx]} onClick={clickSubMenu} idx={idx} menuInfo={tempMenuInfo}/>
      )
    })
    return result
  }
  return (
    <m.nav
      className={`w-full relative h-20 border-b border-solid box-border border-collapse table`}
      animate={{
        backgroundColor: isSideBarOpen ? "#000" : "#fafafa",
        borderColor: !isSideBarOpen ? "#000" : "#fafafa"
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

      {/* Menu Window */}
      {/* <m.div
        className={`${
          isSideBarOpen ? "h-full" : "h-0"
        } side-bar w-full text-center mt-20 overflow-hidden flex`}
        animate={{
          backgroundColor: isSideBarOpen ? "#000" : "#fafafa",
          borderColor: !isSideBarOpen ? "#000" : "#fafafa",
          visibility: isSideBarOpen ? "visible" : "hidden",
          opacity: isSideBarOpen ? 1 : 0,
        }}
      >
        <div className="w-[40%] h-full border-r border-solid border-white box-border sm:block hidden p-11">
          <m.div className="menu-image h-full w-full"
            animate={{
              visibility: isSideBarOpen ? "visible" : "hidden",
              opacity: isSideBarOpen ? 1 : 0,
            }}
            transition={{
              duration:.3,
              delay:.5
            }}
          ></m.div>
        </div>
        <m.div className="flex flex-col justify-center sm:w-[60%] w-full whitespace-nowrap my-auto">
          {renderMenuItem()}
        </m.div>
      </m.div> */}
      <MenuWindow isSideBarOpen={isSideBarOpen} menuItem={renderMenuItem}/>
    </m.nav>
  );
};

export default Navbar;
