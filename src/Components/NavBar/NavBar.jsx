import { Typography } from "@mui/material";
import { MainDiv } from "./NavBarStyle";

const NavBar = () => {
  return (
    <MainDiv>
      <Typography variant="h6">Cursos</Typography>
      <Typography variant="h6">Traducciones</Typography>
      <Typography variant="h6">Actividades</Typography>
      <Typography variant="h6">Contacto</Typography>
    </MainDiv>
  );
};

export default NavBar;
