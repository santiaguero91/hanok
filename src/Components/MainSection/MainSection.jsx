import { Typography } from "@mui/material";
import { ImgDiv, MainDiv, TextDiv,TypeDiv } from "./MainSectionStyle";
import hanokHouse from "../../assets/hanockHouse.jpeg";
import { typoh5 } from "../../utils/Fonts";
import { motion } from "framer-motion";
import { useState } from "react";

const MainSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <MainDiv>
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
        <img width="400px" src={hanokHouse} />
      </ImgDiv>
    </MainDiv>
  );
};

const text = "한옥은 방법론적 발전에 관해 전국의 교사와 교수들을 내재화하고 훈련시키기 위해 개선 강좌와 세미나를 조직하고 가르치고 있습니다.";
const tradText = "Hanok organiza e imparte cursos y seminarios de perfeccionamiento para internalizar y capacitar a docentes y profesores de todo el país sobre desarrollos metodológicos."

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
