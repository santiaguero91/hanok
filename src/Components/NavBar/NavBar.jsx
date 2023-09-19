import { Typography } from "@mui/material";
import { MainDiv } from "./NavBarStyle";
import { typoh6, typoh6bold } from "../../utils/Fonts";

const NavBar = () => {
  return (
    <MainDiv>
      <Typography style={typoh6bold} variant="h6">Cursos</Typography>
      <Typography style={typoh6bold} variant="h6">Traducciones</Typography>
      <Typography style={typoh6bold} variant="h6">Actividades</Typography>
      <Typography style={typoh6bold} variant="h6">Contacto</Typography>
    </MainDiv>
  );
};

export default NavBar;
