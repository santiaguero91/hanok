import { Typography } from "@mui/material";
import {  ColumnDiv, ImgDiv, MainDiv, RowDiv, TextDiv } from "./ProyectosStyle";
import { typoh3bold,typoh6 } from "../../../utils/Fonts";

const Proyectos = () => {
  return (
    <div>
      {/* primera imagen  */}
      <MainDiv >
      <ColumnDiv>
      <RowDiv>
        <ImgDiv>
          <img width="300px" height="300px" src="https://i.ytimg.com/vi/R-IJf9JJjno/sddefault.jpg" />
        </ImgDiv>
        <TextDiv>
          <Typography variant="h5">
            Lorem ipsum es el texto que se usa habitualmente en diseño gráfico
            en demostraciones de tipografías o de borradores de diseño para
            probar el diseño
          </Typography>
        </TextDiv>
      </RowDiv>
      </ColumnDiv>
      </MainDiv>
      {/* Segunda imagen  */}
    </div>
  );
};

export default Proyectos;
