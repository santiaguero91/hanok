import { Typography } from "@mui/material";
import {
  ColumnDiv,
  LeftDiv,
  MainDiv,
  RowDiv,
  TitleDiv,
  TranslateBtn,
  TypeDiv,
} from "./TranslatesStyles";
import { typoh3, typoh3bold, typoh6 } from "../../utils/Fonts";
import { NavLink } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Experience from "./Experience/Experience";
import { useState } from "react";

const handleClick = () => {
  window.scrollTo({
    top: 0,
  });
};

const Translates = ({ sectionTranslates }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [refanim, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <MainDiv id="Translates" ref={sectionTranslates}>
      <ColumnDiv>
        <TitleDiv>
          <Typography variant="h3" style={typoh3bold}>
            Traducciones
          </Typography>
        </TitleDiv>
        <RowDiv
          /* component={motion.div}
          ref={refanim}
          initial={{ opacity: 0, y: 100, x: -150 }}
          animate={{
            opacity: inView ? 1 : 0,
            y: inView ? 0 : 100,
            x: inView ? 0 : -150,
          }}
          transition={{ duration: 1.5 }} */
        >
          <LeftDiv>
            <Typography variant="h6" style={typoh6}>
              El equipo de Hanok desea ser tu mejor aliado para afrontar con
              éxito los nuevos retos que afrontamos en este cambiante entorno
              internacional.
            </Typography>
            <NavLink to="/traducciones" onClick={handleClick}>
              <TranslateBtn
                component={motion.div}
                initial="initial"
                animate={isHovered ? "hover" : "initial"}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.9 }}
              >
                {isHovered ? <연락하다 /> : <Contactar />}
              </TranslateBtn>

            </NavLink>
          </LeftDiv>
          <img src="https://i1.wp.com/www.mondoagit.es/blog/wp-content/uploads/2016/05/escritorio.jpg?fit=550%2C366" />
        </RowDiv>
      </ColumnDiv>
      <Experience />
    </MainDiv>
  );
};

const text = "연락하다";
const tradText = "Contactar";
const wordVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const 연락하다 = () => {
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

const Contactar = () => {
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
export default Translates;
