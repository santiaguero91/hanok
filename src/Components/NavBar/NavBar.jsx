import { Typography } from "@mui/material";
import { MainDiv, NavBarBtn } from "./NavBarStyle";
import { navBarBlack, navBarRed } from "../../utils/Fonts";
import { Link } from "react-scroll";
import { motion, useInView } from "framer-motion";

const NavBar = ({ inSight }) => {
  return (
    <MainDiv> 
        <Link to="Clases" spy={true} smooth={true} offset={-150} duration={1000}>
      <NavBarBtn className={inSight === "Clases" ? "inSight" : ""} variant="contained"component={motion.div} whileHover={{scale: 1.1,transition: { duration: 0.3 }}} whileTap={{scale: 0.9}}>
          <Typography variant="subtitle1" style={inSight === "Clases" ? navBarRed : navBarBlack}>Clases</Typography>
      </NavBarBtn>
        </Link>
        <Link to="Workshops" spy={true} smooth={true} offset={-150} duration={1000}>
      <NavBarBtn className={inSight === "Workshop" ? "inSight" : ""} variant="contained"component={motion.div} whileHover={{scale: 1.1,transition: { duration: 0.3 }}} whileTap={{scale: 0.9}}>
          <Typography variant="subtitle1" style={inSight === "Workshop" ? navBarRed : navBarBlack}>Actividades</Typography>
      </NavBarBtn>
        </Link>
        <Link to="Translates" spy={true} smooth={true} offset={-150} duration={1000}>
      <NavBarBtn className={inSight === "Translates" ? "inSight" : ""} variant="contained"component={motion.div} whileHover={{scale: 1.1,transition: { duration: 0.3 }}} whileTap={{scale: 0.9}}>
          <Typography variant="subtitle1" style={inSight === "Translates" ? navBarRed : navBarBlack}>Traducciones</Typography>
      </NavBarBtn>
        </Link>
        <Link to="Opiniones" spy={true} smooth={true} offset={50} duration={1000}>
      <NavBarBtn className={inSight === "Opinion" ? "inSight" : ""} variant="contained"component={motion.div} whileHover={{scale: 1.1,transition: { duration: 0.3 }}} whileTap={{scale: 0.9}}>
          <Typography variant="subtitle1" style={inSight === "Opinion" ? navBarRed : navBarBlack}>Opiniones</Typography>
      </NavBarBtn>
        </Link>
    </MainDiv>
  );
};

export default NavBar;
