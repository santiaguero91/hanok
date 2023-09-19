import { Typography } from "@mui/material";
import {
  ColumnDiv,
  ImgDiv,
  MainDiv,
  RowDiv,
  TextDiv,
  WorkshopBtn,
} from "./WorkshopsStyle";
import ReadingWorkshop from "../../assets/ReadingWorkshop.jpg";
import { typoh3bold } from "../../utils/Fonts";

const Workshops = () => {
  return (
    <MainDiv id='Workshops'>
      <ColumnDiv>
      <Typography variant="h3" style={typoh3bold}>
        Talleres
      </Typography>
      <RowDiv>
        <ImgDiv>
          <img width="300px" height="300px" src={ReadingWorkshop} />
        </ImgDiv>
        <TextDiv>
          <Typography variant="h5">
            Lorem ipsum es el texto que se usa habitualmente en diseño gráfico
            en demostraciones de tipografías o de borradores de diseño para
            probar el diseño
          </Typography>
          <WorkshopBtn>Saber Mas</WorkshopBtn>
        </TextDiv>
      </RowDiv>
      </ColumnDiv>
    </MainDiv>
  );
};

export default Workshops;
