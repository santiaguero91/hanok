import { Link } from "react-scroll";
import { NavBarBtn, TypeDiv } from "../NavBarStyle";
import { Typography } from "@mui/material";
import { navBarBlack, typoh5, typoh5bold } from "../../../utils/Fonts";
import { motion } from "framer-motion";
import { useState } from "react";

const ContactoBtn = ({ inSight }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to="Footer" spy={true} smooth={true} offset={50} duration={1000}>
      <NavBarBtn
        className={inSight === "Footer" ? "inSight" : ""}
        variant="contained"
        component={motion.div}
        whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
        whileTap={{ scale: 0.9 }}
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
          {isHovered ? <연락하다 /> : <Contacto />}
      </NavBarBtn>
    </Link>
  );
};

const text = "연락하다";
const tradText = "Contacto";

const wordVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const 연락하다 = () => {
  return (
    <TypeDiv>
      <Typography variant="h6" style={typoh5}>
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
      </Typography>
    </TypeDiv>
  );
};
const Contacto = () => {
  return (
    <TypeDiv>
      <Typography variant="h2" style={typoh5bold}>
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
      </Typography>
    </TypeDiv>
  );
};
export default ContactoBtn;
