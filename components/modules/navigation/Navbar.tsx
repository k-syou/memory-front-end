"use client";
import React, { useEffect, useState } from "react";
import { MenuInfos } from "./Navbar.d";
import { useRouter } from "next/navigation";
import MenuBox from "./MenuBox";
import Text from "@/components/atoms/Text";
import Button from "@/components/atoms/Button";
import { IoMenuOutline } from "react-icons/io5";
import Section from "@/components/atoms/Section";
import Container from "@/components/atoms/Container";

const menuInfos: MenuInfos = {
  mainMenuNames: ["극단 기억", "극단 소식", "극단 앨범"],
  mainMenuLinks: ["/pages/about", "#", "#"],
  subMenuInfo: [
    ["극단 소개", "단원 소개", "단원 모집"],
    ["공지사항", "연습일지"],
    ["공연 사진", "연습 사진"],
  ],
  subMenuLinks: [
    [
      "/pages/about#about-intro",
      "/pages/about#actors-intro",
      "/pages/about#recruit-actor",
    ],
    ["#", "#"],
    ["#", "#"],
  ],
};

const Navbar = () => {
  const [viewMenuBox, setViewMenuBox] = useState(false);
  const route = useRouter();

  useEffect(() => {
    // navbar hover effect
    document.getElementById("nav-items")?.addEventListener("mouseover", () => {
      setViewMenuBox(true);
    });
    document.getElementById("nav-items")?.addEventListener("mouseleave", () => {
      setViewMenuBox(false);
    });
    document.getElementById("menu-box")?.addEventListener("mouseover", () => {
      setViewMenuBox(true);
    });
    document.getElementById("menu-box")?.addEventListener("mouseleave", () => {
      setViewMenuBox(false);
    });
  });

  const renderMainMenuItems = () => {
    let mainMenuItems = menuInfos.mainMenuNames.map((menu, idx) => {
      return (
        <li
          className="float-left w-40 h-full flex items-center justify-center"
          key={idx}
        >
          <Text type="link" url={menuInfos.mainMenuLinks[idx]} className="sm:leading-[56px] md:leading-[56px] leading-[80px]">
            {menu}
          </Text>
        </li>
      );
    });
    return (
      <ul id="nav-items" className="right-0 h-full mr-5 relative">
        {mainMenuItems}
        {viewMenuBox && <MenuBox menuInfos={menuInfos} id="menu-box" />}
      </ul>
    );
  };

  return (
    <>
    {/* Navbar */}
      <Section
        border={"bottom"}
        className="h-20 lg:h-20 md:h-14 sm:h-14 w-full bg-gray100 z-50"
      >
        <Container className="relative">

          {/* Logo */}
          <div
            className="absolute h-full sm:w-[93px] md:w-[93px] w-[124px] align-middle text-center sm:leading-[56px] md:leading-[56px] leading-[80px] cursor-pointer"
            onClick={() => route.push("/")}
          >
            LOGO
          </div>

          {/* Menu Bar (Window Width > 1020) */}
          <div className="h-full flex justify-end md:hidden sm:hidden">{renderMainMenuItems()}</div>

          {/* Menu Button (Window Width < 1020) */}
          <div className="h-full hidden justify-end sm:flex md:flex">
            <Button className="w-14 h-14">
              <IoMenuOutline className="text-lg mx-auto" />
            </Button>
          </div>

        </Container>
      </Section>
    </>
  );
};

export default Navbar;
