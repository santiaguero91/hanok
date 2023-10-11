import { Typography } from "@mui/material";
import { ColumnDiv, MainDiv, NoteBkgd, RowDiv, TextDiv } from "./SectionMoviesStyle";
import { typoh3bold, typoh5 } from "../../../utils/Fonts";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import film from "../../../assets/films.png"

const SectionMovies = () => {

  const [refanim, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });


  return (
    <MainDiv>
      <ColumnDiv>
        <Typography variant="h4" style={typoh3bold}>
          Traduccion de Peliculas
        </Typography>
        <RowDiv>
          <TextDiv>
            <Typography variant="h3" style={typoh5}>
              Experiencia en traduccion de Peliculas.
            </Typography>
          </TextDiv>
        </RowDiv>
      </ColumnDiv>
      <NoteBkgd 
      component={motion.div}
      ref={refanim}
      initial={{ opacity: 0, y: 100, x: -150 }}
      animate={{
        opacity: inView ? 1 : 0,
        y: inView ? 0 : 100,
        x: inView ? 0 : -150,
      }}
      transition={{ duration: 1.5 }}
      >
        <img width={"7%"} src={film} />
      </NoteBkgd> 
    </MainDiv>
  );
};

export default SectionMovies;
