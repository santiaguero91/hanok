import webtoon from "../../../assets/webtoon.png";
import film from "../../../assets/films.png";
import books from "../../../assets/books.png";
import { Typh4bold } from "../../../utils/Fonts";
import { ImgDiv, MainDiv, RowDiv } from "./ExperienceStyle";
import React, { useState } from "react";
import { motion } from "framer-motion";
import WebToonsDiv from "./WebtoonsDiv";
import FilmsDiv from "./FilmsDiv";
import BooksDiv from "./BooksDiv";

const Experience = () => {
  const [isHovered, setIsHovered] = useState("");

  return (
    <MainDiv>
      <Typh4bold variant="h5">
      Cuento con experiencia en la traducción de:
      </Typh4bold>
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
        {/*         */}
        <div>
          <ImgDiv
            component={motion.div}
            onMouseEnter={() => setIsHovered("Film")}
            onMouseLeave={() => setIsHovered("")}
          >
            <img width="100px" height="100px" alt="" src={film} title="Film" />
          </ImgDiv>
          <motion.div
            style={{ position: "relative", zIndex: 1 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{
              opacity: isHovered === "Film" ? 1 : 0,
              y: isHovered === "Film" ? 0 : -10,
            }}
            transition={{ duration: 0.5 }}
          >
            <FilmsDiv />
          </motion.div>
        </div>
        {/*         */}
        <div>
          <ImgDiv
            component={motion.div}
            onMouseEnter={() => setIsHovered("Books")}
            onMouseLeave={() => setIsHovered("")}
          >
            <img
              width="100px"
              height="100px"
              alt=""
              src={books}
              title="Books"
            />
          </ImgDiv>
          <motion.div
            style={{ position: "relative", zIndex: 1 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{
              opacity: isHovered === "Books" ? 1 : 0,
              y: isHovered === "Books" ? 0 : -10,
            }}
            transition={{ duration: 0.5 }}
          >
            <BooksDiv />
          </motion.div>
        </div>
      </RowDiv>
    </MainDiv>
  );
};

export default Experience;
