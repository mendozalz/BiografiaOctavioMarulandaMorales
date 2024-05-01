import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import ButtonMenuMovil from "./ButtonMenuMovil";
import Content from "./data-menu-movil/Content";

const menu = {
  open: {
    width: "100%",
    height: "400px",
    top: "-10px",
    right: "-10px",
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },

  closed: {
    width: "100px",
    height: "40px",
    top: "0px",
    right: "0px",
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const NavMovil = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="navMovil lg:hidden">
      <motion.div
        className="menuMovil"
        variants={menu}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      >
        <AnimatePresence>{isActive && <Content />}</AnimatePresence>
      </motion.div>
      <ButtonMenuMovil
        isActive={isActive}
        toggleMenu={() => {
          setIsActive(!isActive);
        }}
      />
    </div>
  );
};

export default NavMovil;
