import { Link } from "react-scroll";
import { NavBarBtn, TypeDiv } from "../NavBarStyle";
import { Typography } from "@mui/material";
import { TyphNavBar, navBarBlack, typoh5, typoh5bold } from "../../../utils/Fonts";
import { motion } from "framer-motion";
import { useState } from "react";

const TraduccionesBtn = ({ inSight }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to="Translates"
      spy={true}
      smooth={true}
      offset={-150}
      duration={1000}
    >
      <NavBarBtn
        className={inSight === "Translates" ? "inSight" : ""}
        variant="contained"
        component={motion.div}
        whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
        whileTap={{ scale: 0.9 }}
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
          {isHovered ? (
            <번역 />
          ) : (
            <Traducciones/>
          )}
      </NavBarBtn>
    </Link>
  );
};

const text = "번역";
const tradText = "Traducciones";

const wordVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const 번역 = () => {
  return (
    <TypeDiv>
      <TyphNavBar variant="h6" >
        {text.split("").map((word, index) => (
          <motion.span
            key={index}
            initial="hidden"
            animate="visible"
            variants={wordVariants}
            transition={{ delay: index * 0.2 }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </TyphNavBar>
    </TypeDiv>
  );
};

const Traducciones = () => {
  return (
    <TypeDiv>
      <TyphNavBar variant="h2">
        {tradText.split("").map((word, index) => (
          <motion.span
            key={index}
            initial="hidden"
            animate="visible"
            variants={wordVariants}
            transition={{ delay: index * 0.1 }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </TyphNavBar>
    </TypeDiv>
  );
};
export default TraduccionesBtn;
