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
import { typoh3bold, typoh5 } from "../../utils/Fonts";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";


const Workshops = ({ sectionWorkshop }) => {

  const [refanim, inView] = useInView({
    triggerOnce: true, 
    threshold: 0.1,
  });

  return (
    <MainDiv id="Workshops" ref={sectionWorkshop} >
      <ColumnDiv
      component={motion.div}
      ref={refanim}
      initial={{ opacity: 0 , y: 100, x: 150}}
      animate={{ opacity: inView ? 1 : 0 , y: inView ? 0 : 100, x : inView ? 0 : 150 }}
      transition={{ duration: 1.5 }}
      >
        <Typography variant="h3" style={typoh3bold}>
          Talleres
        </Typography>
        <RowDiv>
          <ImgDiv>
            <img width="300px" height="300px" src={ReadingWorkshop} />
          </ImgDiv>
          <TextDiv>
            <Typography variant="h5" style={typoh5}>
            Un fin de semana al mes los miembros del club nos encontramos en algún café de Buenos Aires en este maravilloso encuentro donde cada uno puede traer un libro para  presentar y recomendar. ¡¡Todos están invitados !!             </Typography>
              {/* <WorkshopBtn>Saber Mas</WorkshopBtn> */}
          </TextDiv>
        </RowDiv>
      </ColumnDiv>
    </MainDiv>
  );
};

export default Workshops;
