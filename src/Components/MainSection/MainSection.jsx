import { Typography } from "@mui/material";
import { ImgDiv, MainDiv, TextDiv } from "./MainSectionStyle";
import hanokHouse from "../../assets/hanockHouse.jpeg";
import { typoh5 } from "../../utils/Fonts";

const MainSection = () => {
  return (
    <MainDiv>
      <TextDiv>
        <Typography variant="h4" style={typoh5}>
          Leeds organiza y dicta cursos y seminarios de perfeccionamiento con el
          fin de interiorizar y capacitar , tanto a sus profesores como
          profesores de todo el país, respecto de las novedades metodológicas.
        </Typography>
      </TextDiv>
      <ImgDiv>
        <img width="400px" src={hanokHouse} />
      </ImgDiv>
    </MainDiv>
  );
};

export default MainSection;
