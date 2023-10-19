import { Typography } from "@mui/material";
import { ImgDiv, MainDiv, RowDiv, TextDiv,TypeDiv } from "./MainSectionStyle";
import hanokHouse from "../../assets/hanockHouse.jpeg";
import { typoh5 } from "../../utils/Fonts";
import { motion } from "framer-motion";
import { useState } from "react";

const MainSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <MainDiv>
      <RowDiv>
      <motion.div
      initial="initial"
      animate={isHovered ? 'hover' : 'initial'}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
          <TextDiv>
            <Animation />
          </TextDiv>
        ) : (
          <TextDiv>
            <한옥은 />
          </TextDiv>
        )}
      </motion.div>
      <ImgDiv
      >
        <img width="300px" src={hanokHouse} />
      </ImgDiv>
      </RowDiv>
    </MainDiv>
  );
};

const text = "한옥 클럽은 한국어 교육과 한국어에서 스페인어로의 문학 및 시청각 번역 서비스를 제공합니다.";
const tradText = "The Hanok Club brinda servicios de instrucción del idioma coreano y de traducción literaria y audiovisual del coreano al español."

const wordVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};


// Animations to appear each word at a time.
const Animation = () => {
  return (
    <TypeDiv>
    <Typography variant="h4" style={typoh5}>
      {tradText.split(" ").map((word, index) => (
        <motion.span
          key={index}
          initial="hidden"
          animate="visible"
          variants={wordVariants}
          transition={{ delay: index * 0.2 }}
        >
          {word}{" "}
        </motion.span>
      ))}
    </Typography>
    </TypeDiv>
  );
};

const 한옥은 = () => {
  return (
    <TypeDiv>
    <Typography variant="h4" style={typoh5}>
      {text.split(" ").map((word, index) => (
        <motion.span
          key={index}
          initial="hidden"
          animate="visible"
          variants={wordVariants}
          transition={{ delay: index * 0.2 }}
        >
          {word}{" "}
        </motion.span>
      ))}
    </Typography>
    </TypeDiv>
  );
};


export default MainSection;
