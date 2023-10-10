import { Typography } from "@mui/material";
import onlineClases from "../../assets/OnlineClases.jpg";
import { ColumnDiv, 클래스Bkgd, MainDiv, RowDiv, TextDiv, ClothesBkgd, DdctBkgd, ClasesBtn } from "./ClasesStyle";
import { typoh3bold, typoh5 } from "../../utils/Fonts";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Opinions from "../Opinions/Opinions";

const Clases = ({ sectionClases }) => {

  const [refanim, inView] = useInView({
    triggerOnce: true, 
    threshold: 0.1,
  });

  return (
    <MainDiv id="Clases" ref={sectionClases}>
      <ColumnDiv
      component={motion.div}
      ref={refanim}
      initial={{ opacity: 0 , y: 100}}
      animate={{ opacity: inView ? 1 : 0 , y: inView ? 0 : 100 }}
      transition={{ duration: 1.5 }}
      >
        <Typography variant="h3" style={typoh3bold}>
          Clases
        </Typography>
        <RowDiv>
          <img width={"400px"} height={"350px"} src={onlineClases} />
          <TextDiv>
            <Typography variant="h5" style={typoh5}>
              Disfuta las mejores clases online personalizadas con grupos acorde al nivel. Bajo la tutela de profesores de alta trayectoria.
            </Typography>
             <ClasesBtn>Averiguar horarios</ClasesBtn>
          </TextDiv>
        </RowDiv>

          <Opinions />
      </ColumnDiv>
      <클래스Bkgd><h1>클래스</h1></클래스Bkgd>
      <ClothesBkgd><img width={"200px"} src="https://static.vecteezy.com/system/resources/previews/016/010/488/original/men-and-women-in-beautiful-korean-traditional-clothes-hanbok-traditional-korean-outfits-korean-folk-clothing-illustration-in-a-flat-design-style-design-with-shadow-vector.jpg"/></ClothesBkgd>
      <DdctBkgd><h1>봉납</h1></DdctBkgd>
    </MainDiv>
  );
};

export default Clases;
