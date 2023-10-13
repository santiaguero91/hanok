import { Link } from "react-scroll";
import { NavBarBtn, TypeDiv } from "../NavBarStyle";
import {  Typh5bold, TyphNavBar} from "../../../utils/Fonts";
import { motion } from "framer-motion";
import { useState } from "react";

const ActividadesBtn = ({ inSight }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to="Workshops" spy={true} smooth={true} offset={-150} duration={1000}>
      <NavBarBtn
        className={inSight === "Workshop" ? "inSight" : ""}
        variant="contained"
        component={motion.div}
        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
        whileTap={{ scale: 0.9 }}
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
          {isHovered ? <활동 /> : <Actividades />}
      </NavBarBtn>
    </Link>
  );
};

const text = "활동";
const tradText = "Actividades";

const wordVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const 활동 = () => {
  return (
    <TypeDiv>
      <TyphNavBar>
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
const Actividades = () => {
  return (
    <TypeDiv>
      <TyphNavBar >
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
export default ActividadesBtn;
