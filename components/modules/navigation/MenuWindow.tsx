import { sidebarOpenClose } from "@/style";
import { AnimatePresence, motion as m } from "framer-motion";
import React from "react";

type Props = {
  isSideBarOpen: boolean;
  menuItem: any;
};

const MenuWindow = ({ isSideBarOpen, menuItem }: Props) => {
  return (
    <AnimatePresence>
      {isSideBarOpen && (
        <m.div
          className={`side-bar w-full text-center mt-20 overflow-hidden flex z-50`}
          variants={sidebarOpenClose}
          animate="open"
          exit="close"
        >
          <div className="w-[40%] h-full border-r border-solid border-white box-border sm:block hidden p-11">
            <m.a
              href="/"
              className="menu-image block h-full w-full"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
                delay: 0.3,
              }}
            ></m.a>
          </div>
          <m.div
            className="flex flex-col justify-center sm:w-[60%] w-full whitespace-nowrap my-auto"
            initial={{
              visibility: "hidden",
              opacity: 0,
              x: 100,
            }}
            animate={{
              visibility: "visible",
              x: 0,
              opacity: 1,
            }}
            exit={{
              visibility: "hidden",
              opacity: 0,
              x: 100,
            }}
            transition={{
              duration: 0.5,
              delay: 0.3,
            }}
          >
            {menuItem()}
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
};

export default MenuWindow;
