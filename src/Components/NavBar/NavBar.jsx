import { Typography } from "@mui/material";
import { MainDiv } from "./NavBarStyle";
import { navBarBlack,navBarRed } from "../../utils/Fonts";
import { Link } from "react-scroll";
import { motion, useInView } from "framer-motion";

const NavBar = ({inSight}) => {

  return (
    <MainDiv>
      <Link to="Clases" spy={true} smooth={true} offset={-50} duration={1000}>
        <Typography style={inSight==="Clases" ? navBarRed: navBarBlack} variant="h6"
        component={motion.div}
        whileHover={{
          scale:1.1,
          transition: { duration: 0.3 }
        }}
        whileTap={{ scale: 0.9 }}        
        >
          Clases
        </Typography>
      </Link>

      <Link to="Workshops" spy={true} smooth={true} offset={-50} duration={1000}>
        <Typography style={inSight==="Workshop" ? navBarRed: navBarBlack} variant="h6">
          Actividades
        </Typography>
      </Link>
      <Link to="Translates" spy={true} smooth={true} offset={-50} duration={1000}>
        <Typography style={inSight==="Translates" ? navBarRed: navBarBlack} variant="h6">
          Traducciones
        </Typography>
      </Link>
      <Link to="Opiniones" spy={true} smooth={true} offset={50} duration={1000}>
        <Typography style={inSight==="Opinion" ? navBarRed: navBarBlack} variant="h6">
          Contacto
        </Typography>
      </Link>
    </MainDiv>
  );
};

export default NavBar;
