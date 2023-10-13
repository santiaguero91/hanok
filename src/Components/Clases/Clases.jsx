import { Typography } from "@mui/material";
import onlineClases from "../../assets/OnlineClases.jpg";
import {
  ColumnDiv,
  클래스Bkgd,
  MainDiv,
  RowDiv,
  TextDiv,
  ClothesBkgd,
  DdctBkgd,
  ClasesBtn,
  TypeDiv,
} from "./ClasesStyle";
import { Typh3bold, Typh5, typoh3, typoh3bold, } from "../../utils/Fonts";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Opinions from "../Opinions/Opinions";
import { useState } from "react";

const Clases = ({ sectionClases }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [refanim, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <MainDiv id="Clases" ref={sectionClases}>
      <ColumnDiv
        component={motion.div}
        ref={refanim}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
        transition={{ duration: 1.5 }}
      >
        <Typh3bold variant="h3">
          Clases
        </Typh3bold>
        <RowDiv>
          <img src={onlineClases} />
          <TextDiv>
            <Typh5 variant="h5" >
              Disfuta las mejores clases online personalizadas con grupos acorde
              al nivel. Bajo la tutela de profesores de alta trayectoria.
            </Typh5>
            <ClasesBtn
              component={motion.div}
              initial="initial"
              animate={isHovered ? "hover" : "initial"}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.9 }}
            >
              {isHovered ? <내가관심 /> : <Empezar />}
            </ClasesBtn>
          </TextDiv>
        </RowDiv>
        <Opinions />
      </ColumnDiv>
      <클래스Bkgd>
        <h1>클래스</h1>
      </클래스Bkgd>
      <ClothesBkgd>
        <img src="https://static.vecteezy.com/system/resources/previews/016/010/488/original/men-and-women-in-beautiful-korean-traditional-clothes-hanbok-traditional-korean-outfits-korean-folk-clothing-illustration-in-a-flat-design-style-design-with-shadow-vector.jpg" />
      </ClothesBkgd>
      <DdctBkgd>
        <h1>봉납</h1>
      </DdctBkgd>
    </MainDiv>
  );
};

const text = "내가 관심";
const tradText = "Empezar";
const wordVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const 내가관심 = () => {
  return (
    <TypeDiv>
      <Typography variant="subtitle1" style={typoh3}>
        {text.split("").map((word, index) => (
          <motion.span
            key={index}
            initial="hidden"
            animate="visible"
            variants={wordVariants}
            transition={{ delay: index * 0.1 }}
          >
            {word}
          </motion.span>
        ))}
      </Typography>
    </TypeDiv>
  );
};
const Empezar = () => {
  return (
    <TypeDiv>
      <Typography variant="subtitle" style={typoh3bold}>
        {tradText.split("").map((word, index) => (
          <motion.span
            key={index}
            initial="hidden"
            animate="visible"
            variants={wordVariants}
            transition={{ delay: index * 0.1 }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </Typography>
    </TypeDiv>
  );
};

export default Clases;
