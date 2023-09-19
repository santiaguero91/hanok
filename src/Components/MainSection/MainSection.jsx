import { Typography } from "@mui/material";
import { ImgDiv, MainDiv, TextDiv } from "./MainSectionStyle";
import hanokHouse from "../../assets/hanockHouse.jpeg";
import { typoh5} from "../../utils/Fonts";

const MainSection = () => {
  return (
    <MainDiv>
      <TextDiv>
        <Typography variant="h4"
         style={typoh5}
        >
          Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en
          demostraciones de tipografías o de borradores de diseño para probar el
          diseño visual antes de insertar el texto final.
        </Typography>
      </TextDiv>
      <ImgDiv>
        <img width="400px" src={hanokHouse} />
      </ImgDiv>
    </MainDiv>
  );
};

export default MainSection;
