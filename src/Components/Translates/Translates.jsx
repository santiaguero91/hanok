import { Typography, Modal } from "@mui/material";
import {
  ColumnDiv,
  LeftDiv,
  MainDiv,
  RowDiv,
  TitleDiv,
  TranslateBtn,
  TypeDiv,
} from "./TranslatesStyles";
import {
  Typh3bold,
  Typh5,
  typoh3,
  typoh3bold,
} from "../../utils/Fonts";
import { NavLink } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Experience from "./Experience/Experience";
import { useState } from "react";

import ModalInput from "../FirstFooter/ModalInput/ModalInput";

const handleClick = () => {
  window.scrollTo({
    top: 0,
  });
};

const Translates = ({ sectionTranslates }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function handleClose() {
    setIsOpen(false);
  }



  const [isHovered, setIsHovered] = useState(false);
  const [refanim, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <MainDiv id="Translates" ref={sectionTranslates}>
      <Modal
        open={modalIsOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalInput />
      </Modal>

      <ColumnDiv>
        <TitleDiv>
          <Typh3bold variant="h3" ref={refanim}>
            Traducciones
          </Typh3bold>
        </TitleDiv>
        <RowDiv
          component={motion.div}
          initial={{ opacity: 0, y: 100, x: -150 }}
          animate={{
            opacity: inView ? 1 : 0,
            y: inView ? 0 : 100,
            x: inView ? 0 : -150,
            scale: inView ? 1 : 0,
          }}
          transition={{ duration: 1.5 }}
        >
          <LeftDiv>
            <Typh5 variant="h5">
              El equipo de Hanok desea ser tu mejor aliado para afrontar con
              éxito los nuevos retos que afrontamos en este cambiante entorno
              internacional.
            </Typh5>
              <TranslateBtn
                component={motion.div}
                initial="initial"
                animate={isHovered ? "hover" : "initial"}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.9 }}
                onClick={openModal}
              >
                {isHovered ? <연락하다 /> : <Contactar />}
              </TranslateBtn>
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
