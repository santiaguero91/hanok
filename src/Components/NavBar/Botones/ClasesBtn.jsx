import { Link } from "react-scroll";
import { NavBarBtn, TypeDiv } from "../NavBarStyle";
import { Typography } from "@mui/material";
import { typoh5, typoh5bold,TyphNavBar } from "../../../utils/Fonts";
import { motion } from "framer-motion";
import { useState } from "react";

const ClasesBtn = ({ inSight }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to="Clases" spy={true} smooth={true} offset={-150} duration={1000}>
      <NavBarBtn
        className={inSight === "Clases" ? "inSight" : ""}
        variant="contained"
        component={motion.div}
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
        whileTap={{ scale: 0.9 }}
      >
        {isHovered ? <클래스 /> : <Clases />}
      </NavBarBtn>
    </Link>
  );
};

const text = "클래스";
const tradText = "Clases";

const wordVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const 클래스 = () => {
  return (
    <TypeDiv>
      <TyphNavBar variant="h6">
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
const Clases = () => {
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

export default ClasesBtn;
