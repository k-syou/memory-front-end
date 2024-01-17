import { Variants } from "framer-motion";

// animation
export const sidebarOpenClose:Variants = {
  open: {
    height: "100%",
    backgroundColor: "#000",
    borderColor: "#fafafa",
    opacity: 1,
    transition: {
      duration: .3,
      ease: "easeInOut"
    }
  },
  close: {
    height: 0,
    backgroundColor: "#fafafa",
    borderColor: "#000",
    opacity: 0,
    transition: {
      duration: .5,
      ease:"easeOut"
    }
  }
}