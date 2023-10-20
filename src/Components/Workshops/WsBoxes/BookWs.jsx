import { Typography } from "@mui/material";
import { MainDiv } from "./WsBoxesStyle";
import { typoh3bold } from "../../../utils/Fonts";

const BookWs = () => {
  return (
    <MainDiv>
      <Typography variant="h4" style={typoh3bold}>
        Taller de Lectura
      </Typography>
      <p>
        Sumate a los encuentros quincenales de lectura que se dan los días
        sábados de cada mes en un café de Buenos Aires. El taller tiene como
        objetivo crear un espacio agradable en el que puedas practicar tu
        pronunciación a través de la lectura de textos cortos y diálogos. ¡No te
        pierdas esta experiencia única!
      </p>
      <button> Saber Mas</button>
    </MainDiv>
  );
};

export default BookWs;
