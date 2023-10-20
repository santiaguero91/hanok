import { Typography } from "@mui/material";
import { BookWsMainDiv, WsBtn } from "./WsBoxesStyle";
import { typoh3, typoh3bold } from "../../../utils/Fonts";
import { useState } from "react";
import { motion } from "framer-motion";
import { TypeDiv } from "../../Clases/ClasesStyle";
import books from "../../../assets/books.png";

const BookWs = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <BookWsMainDiv>
      <Typography variant="h4" style={typoh3bold}>
        Taller de Lectura
      </Typography>
      <img
              width="100px"
              height="100px"
              alt=""
              src={books}
              title="books"
            />
      <p>
        Sumate a los encuentros quincenales de lectura que se dan los días
        sábados de cada mes en un café de Buenos Aires. El taller tiene como
        objetivo crear un espacio agradable en el que puedas practicar tu
        pronunciación a través de la lectura de textos cortos y diálogos. ¡No te
        pierdas esta experiencia única!
      </p>
      <WsBtn
        component={motion.div}
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
        whileTap={{ scale: 0.9 }}
      >
        <a href="https://docs.google.com/forms/d/1-c8JcjYNcrVFYKpjWKZWNBZsF0uekkCnvwGEAoWluxg/edit?" target="_blank">
         <Empezar /></a>
      </WsBtn>
    </BookWsMainDiv>
  );
};
const text = "나는 일부가 되고 싶다";
const tradText = "Quiero formar parte";
const wordVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const 나는일부가되고싶다 = () => {
  return (
    <TypeDiv>
      <Typography variant="subtitle1" style={typoh3}>
        {text.split(" ").map((word, index) => (
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
        {tradText.split(" ").map((word, index) => (
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
export default BookWs;
