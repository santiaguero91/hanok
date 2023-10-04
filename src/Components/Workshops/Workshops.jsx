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
const Workshops = ({ sectionWorkshop }) => {

  return (
    <MainDiv id="Workshops" ref={sectionWorkshop} >
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
            Un fin de semana al mes los miembros del club nos encontramos en algún café de Buenos Aires en este maravilloso encuentro donde cada uno puede traer un libro para  presentar y recomendar. ¡¡Todos están invitados !!             </Typography>
              <WorkshopBtn>Saber Mas</WorkshopBtn>
          </TextDiv>
        </RowDiv>
      </ColumnDiv>
    </MainDiv>
  );
};

export default Workshops;
