import { MainDiv } from "./NavBarStyle";
import ClasesBtn from "./Botones/ClasesBtn";
import TraduccionesBtn from "./Botones/TraduccionesBtn";
import ActividadesBtn from "./Botones/ActividadesBtn";
import ContactoBtn from "./Botones/ContactoBtn";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";

const NavBar = ({ inSight }) => {
  const [showNavbar, setShowNavbar] = useState(true);
  useEffect(() => {
    const handleMouseEnter = (event) => {
      const { clientY } = event;
      if (clientY < 50 || window.scrollY === 0) {
        setShowNavbar(true);
      } else {
          setShowNavbar(false);
      }
    };

    const handleMouseLeave = () => {
        setShowNavbar(false);
    };

    window.addEventListener("mousemove", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <AnimatePresence>
      {showNavbar && (
        <MainDiv
          component={motion.div}
          initial={{ y: -100 }}
          animate={{
            y: 0,
          }}
          exit={{ y: -1000, duration: 5 }}
          transition={{ duration: 0.5 }}
        >
          <ClasesBtn inSight={inSight} />
          <ActividadesBtn inSight={inSight} />
          <TraduccionesBtn inSight={inSight} />
          <ContactoBtn inSight={inSight} />
        </MainDiv>
      )}
    </AnimatePresence>
  );
};

export default NavBar;
