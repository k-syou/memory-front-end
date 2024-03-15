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
import { PiPlusThin, PiXLight } from "react-icons/pi";
import Image from "next/image";

const menuInfos: MenuInfos = {
  mainMenuNames: ["극단 기억", "극단 소식", "극단 앨범"],
  mainMenuLinks: ["/about", "/notice", "/photo"],
  subMenuInfo: [
    ["극단 소개", "단원 소개", "단원 모집"],
    ["공지사항", "연습일지"],
    ["공연 사진", "연습 사진"],
  ],
  subMenuLinks: [
    [
      "/about#about-intro",
      "/about#actors-intro",
      "/about#recruit-actor",
    ],
    ["/notice", "/notice"],
    ["/photo", "/photo"],
  ],
};

const Navbar = () => {
  const [viewMenuBox, setViewMenuBox] = useState(false);
  const [viewMobileMenuWindow, setViewMobileMenuWindow] = useState(false);
  const route = useRouter();

  const mobileMovePage = (url: string) => {
    setViewMobileMenuWindow(false);
    route.push(url);
  };

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
    document.getElementById("menu-btn")?.addEventListener("click", () => {
      setViewMobileMenuWindow(!viewMobileMenuWindow);
    });
  });

  const renderMainMenuItems = () => {
    let mainMenuItems = menuInfos.mainMenuNames.map((menu, idx) => {
      return (
        <li
          className="float-left w-40 md:w-[113px] h-full flex items-center justify-center"
          key={idx}
        >
          <Text
            type="link"
            url={menuInfos.mainMenuLinks[idx]}
            className="sm:leading-[56px] md:leading-[56px] leading-[80px]"
          >
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
      <Section className="w-full h-20 md:h-14 sm:h-14 relative">
        <Section
          border={"bottom"}
          className="h-20 md:h-14 sm:h-14 w-full max-w-[1920px] bg-gray100 z-50 overflow-visible fixed top-0 left-[50%] translate-x-[-50%]"
        >
          <Container className="relative">
            {/* Logo */}
            <button
              className="absolute h-20 md:h-14 sm:h-14 sm:w-[93px] md:w-[93px] w-[124px] align-middle text-center cursor-pointer"
              onClick={() => route.push("/")}
            >
              <div className="my-auto inline-block"><Image src='/images/logo.png' alt="logo" width={1920} height={1920} className="scale-50"/></div>
            </button> 

            {/* 데스크탑 */}
            <div className="h-full flex justify-end md:hidden sm:hidden">
              {renderMainMenuItems()}
            </div>

            {/* 테블릿, 스마트폰 */}
            <div className="h-full hidden right-0 top-0 md:flex md:absolute sm:flex sm:absolute z-50">
              <Button id="menu-btn" className="w-14 h-14">
                {!viewMobileMenuWindow ? (
                  <IoMenuOutline className="w-5 h-5 mx-auto" />
                ) : (
                  <PiXLight className="w-5 h-5 mx-auto" />
                )}
              </Button>
              <div
                className={`fixed top-14 h-[1000px] bg-black bg-opacity-70 z-50 w-full right-0 ${
                  viewMobileMenuWindow ? "block" : "hidden"
                }`}
              >
                <ul className="absolute top-0 right-0 w-full h-auto bg-gray100 flex flex-col z-50">
                  {menuInfos.mainMenuNames.map((value, idx) => {
                    return (
                      <li
                        className="h-[72px] flex justify-center cursor-pointer"
                        onClick={() =>
                          mobileMovePage(menuInfos.mainMenuLinks[idx])
                        }
                        key={idx}
                      >
                        <div className="md:w-[768px] sm:w-[360px] relative flex flex-row my-auto pl-6">
                          <PiPlusThin className="inline-block text-[24px] mr-4 my-auto" />
                          <Text className="text-h5 inline-block">{value}</Text>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
              {/* <AnimatePresence>
                {viewMobileMenuWindow && (
                  <m.div
                    id="m-menu-box"
                    className="h-[1920px] w-full fixed top-14 right-0 z-50 overflow-hidden"
                    variants={{
                      open: {
                        opacity: 1,
                        height: "100%",
                        transition: {
                          duration: 0.3,
                        },
                      },
                      close: {
                        opacity: 0,
                        height: 0,
                        transition: {
                          duration: 0.3,
                        },
                      },
                    }}
                    initial="close"
                    animate="open"
                    exit="close"
                  >
                    <ul className="w-full h-auto bg-gray100 flex flex-col z-50">
                      {menuInfos.mainMenuNames.map((value, idx) => {
                        return (
                          <li className="h-[72px] flex justify-center cursor-pointer" onClick={() => mobileMovePage(menuInfos.mainMenuLinks[idx])} key={idx}>
                            <div className="w-[360px] relative flex flex-row my-auto pl-6">
                              <PiPlusThin className="inline-block text-[24px] mr-4 my-auto" />
                              <Text className="text-h5 inline-block">{value}</Text>
                            </div>
                          </li>
                        )
                      })}
                    </ul>
                    <div className="w-full h-full bg-black opacity-70"></div>
                  </m.div>
                )}
              </AnimatePresence> */}
            </div>
          </Container>
        </Section>
      </Section>
    </>
  );
};

export default Navbar;
