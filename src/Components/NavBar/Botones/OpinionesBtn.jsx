import { Link } from "react-scroll";
import { NavBarBtn, TypeDiv } from "../NavBarStyle";
import { Typography } from "@mui/material";
import { navBarBlack, typoh5 } from "../../../utils/Fonts";
import { motion } from "framer-motion";
import { useState } from "react";

const OpinionesBtn = ({ inSight }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to="Opiniones" spy={true} smooth={true} offset={50} duration={1000}>
    <NavBarBtn className={inSight === "Opinion" ? "inSight" : ""} variant="contained"component={motion.div} whileHover={{scale: 1.1,transition: { duration: 0.3 }}} whileTap={{scale: 0.9}}>
        <motion.div
          initial="initial"
          animate={isHovered ? "hover" : "initial"}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered ? (
            <의견 />
          ) : (
            <Typography variant="subtitle1" style={inSight === "Opinion" ? navBarBlack : navBarBlack}>Opiniones</Typography>
          )}
        </motion.div>
      </NavBarBtn>
    </Link>
  );
};

const text = "의견";
const wordVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const 의견 = () => {
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

export default OpinionesBtn;
