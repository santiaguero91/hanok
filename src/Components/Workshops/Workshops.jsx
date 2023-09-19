import { Typography } from "@mui/material";
import { ImgDiv, MainDiv, RowDiv, TextDiv, WorkshopBtn } from "./WorkshopsStyle";
import ReadingWorkshop from "../../assets/ReadingWorkshop.jpg";

const Workshops = () => {
  return (
    <MainDiv>
        <RowDiv>
      <ImgDiv>
        <img width="200px" height="200px" src={ReadingWorkshop} />
      </ImgDiv>
      <TextDiv>
        <Typography variant="h5">
          Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en
          demostraciones de tipografías o de borradores de diseño para probar el
          diseño
        </Typography>
        <WorkshopBtn>Saber Mas</WorkshopBtn>
      </TextDiv>
      </RowDiv>
    </MainDiv>
  );
};

export default Workshops;
