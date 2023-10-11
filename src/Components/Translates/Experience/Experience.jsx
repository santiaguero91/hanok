import webtoon from "../../../assets/webtoon.png";
import film from "../../../assets/films.png";
import books from "../../../assets/books.png";
import { typoh3bold } from "../../../utils/Fonts";
import { Typography } from "@mui/material";
import { ImgDiv, MainDiv, RowDiv } from "./ExperienceStyle";
import React, { useState } from "react";
import { motion } from "framer-motion";
import WebToonsDiv from "./WebtoonsDiv";

const Experience = () => {
  const [isHovered, setIsHovered] = useState("");

  return (
    <MainDiv>
      <Typography variant="h4" style={typoh3bold}>
        Contamos con amplia experiencia en la traduccion de :
      </Typography>
      <RowDiv>
        <div>
          <ImgDiv
            component={motion.div}
            onMouseEnter={() => setIsHovered("Webtoons")}
            onMouseLeave={() => setIsHovered("")}
          >
            <img
              width="100px"
              height="100px"
              alt=""
              src={webtoon}
              title="Webtoons"
            />
          </ImgDiv>
          <motion.div
            style={{ position: "relative", zIndex: 1 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{
              opacity: isHovered === "Webtoons" ? 1 : 0,
              y: isHovered === "Webtoons" ? 0 : -10,
            }}
            transition={{ duration: 0.5 }}
          >
            <WebToonsDiv />
          </motion.div>
        </div>

        <ImgDiv
          component={motion.div}
          onMouseEnter={() => setIsHovered("Film")}
          onMouseLeave={() => setIsHovered("")}
        >
          <img width="100px" height="100px" alt="" src={film} title="Film" />
        </ImgDiv>
        <ImgDiv
          component={motion.div}
          onMouseEnter={() => setIsHovered("Books")}
          onMouseLeave={() => setIsHovered("")}
        >
          <img width="100px" height="100px" alt="" src={books} title="Books" />
        </ImgDiv>
      </RowDiv>
    </MainDiv>
  );
};

export default Experience;
