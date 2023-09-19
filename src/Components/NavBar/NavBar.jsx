import { Typography } from "@mui/material";
import { MainDiv } from "./NavBarStyle";
import { typoh6bold } from "../../utils/Fonts";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <MainDiv>
      <Link to="Clases" spy={true} smooth={true} offset={-50} duration={1000}>
        <Typography style={typoh6bold} variant="h6">
          Clases
        </Typography>
      </Link>
      <Link to="Translates" spy={true} smooth={true} offset={-50} duration={1000}>
        <Typography style={typoh6bold} variant="h6">
          Traducciones
        </Typography>
      </Link>
      <Link to="Workshops" spy={true} smooth={true} offset={-50} duration={1000}>
        <Typography style={typoh6bold} variant="h6">
          Actividades
        </Typography>
      </Link>
      <Link to="Opiniones" spy={true} smooth={true} offset={50} duration={1000}>
        <Typography style={typoh6bold} variant="h6">
          Contacto
        </Typography>
      </Link>
    </MainDiv>
  );
};

export default NavBar;
