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
    <MainDiv id="Workshops">
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
              Como cada domingo realizamos actividades culturales y recreativas
              como talleres de plastilina, vitral y dibujo. · Para promover el
              desarrollo de ...
            </Typography>
            <WorkshopBtn>Saber Mas</WorkshopBtn>
          </TextDiv>
        </RowDiv>
      </ColumnDiv>
    </MainDiv>
  );
};

export default Workshops;
