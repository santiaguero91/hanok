import { Typography } from "@mui/material";
import {
  ColumnDiv,
  LeftDiv,
  MainDiv,
  RowDiv,
  TitleDiv,
  TranslateBtn,
} from "./TranslatesStyles";
import { typoh3bold, typoh6 } from "../../utils/Fonts";
import { NavLink } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Experience from "./Experience/Experience";


const handleClick = () => {
  window.scrollTo({
    top: 0,
  });
};

const Translates = ({sectionTranslates}) => {

  const [refanim, inView] = useInView({
    triggerOnce: true, 
    threshold: 0.1,
  });

  return (
    <MainDiv id="Translates"  ref={sectionTranslates} >
      <ColumnDiv
      component={motion.div}
      ref={refanim}
      initial={{ opacity: 0 , y: 100, x: -150}}
      animate={{ opacity: inView ? 1 : 0 , y: inView ? 0 : 100, x : inView ? 0 : -150 }}
      transition={{ duration: 1.5 }}
      >
      <TitleDiv>
        <Typography variant="h3" style={typoh3bold}>
          Traducciones
        </Typography>
      </TitleDiv>
      <RowDiv>
        <LeftDiv>
          <Typography variant="h6" style={typoh6}>
            El equipo de Hanok desea
            ser tu mejor aliado para afrontar con éxito los nuevos retos que
            afrontamos en este cambiante entorno internacional.
          </Typography>
          <NavLink to="/traducciones" onClick={handleClick}>

          <TranslateBtn>Mas Info</TranslateBtn>
          </NavLink>

        </LeftDiv>
        <img
          src="https://i1.wp.com/www.mondoagit.es/blog/wp-content/uploads/2016/05/escritorio.jpg?fit=550%2C366"
        />
      </RowDiv>
      </ColumnDiv>
      <Experience />
    </MainDiv>
  );
};

export default Translates;
