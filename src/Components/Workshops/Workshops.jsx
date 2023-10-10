import { Typography } from "@mui/material";
import {
  ColumnDiv,
  FlagBkgd,
  ImgDiv,
  MainDiv,
  RowDiv,
  TextDiv,
} from "./WorkshopsStyle";
import { typoh3bold, typoh5 } from "../../utils/Fonts";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import WsSwipper from "./WsSwipper/WsSwipper";

const Workshops = ({ sectionWorkshop }) => {
  const [refanim, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <MainDiv id="Workshops" ref={sectionWorkshop}>
      <ColumnDiv>
        <Typography variant="h3" style={typoh3bold}>
          Talleres
        </Typography>
        <RowDiv
          component={motion.div}
          ref={refanim}
          initial={{ opacity: 0, y: 100, x: 150,  }}
          animate={{
            opacity: inView ? 1 : 0,
            y: inView ? 0 : 100,
            x: inView ? 0 : 150,
          }}
          transition={{ duration: 1.5 }}
        >
          <ImgDiv>
            <WsSwipper />
          </ImgDiv>
          <TextDiv>
            <Typography variant="h5" style={typoh5}>
              Un fin de semana al mes los miembros del club nos encontramos en
              algún café de Buenos Aires en este maravilloso encuentro donde
              cada uno puede traer un libro para presentar y recomendar. ¡¡Todos
              están invitados !!{" "}
            </Typography>
            {/* <WorkshopBtn>Saber Mas</WorkshopBtn> */}
          </TextDiv>
        </RowDiv>
      </ColumnDiv>

      <FlagBkgd><img width={"200px"} alt="" src="https://cdn.britannica.com/49/1949-050-39ED83BA/Flag-South-Korea.jpg" /></FlagBkgd>
    </MainDiv>
  );
};

export default Workshops;
