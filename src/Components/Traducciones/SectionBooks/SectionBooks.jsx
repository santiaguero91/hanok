import { Typography } from "@mui/material";
import { ColumnDiv, MainDiv, NoteBkgd, RowDiv, TextDiv } from "./SectionMoviesStyle";
import { typoh3bold, typoh5 } from "../../../utils/Fonts";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import film from "../../../assets/films.png"

const SectionBooks = () => {

  const [refanim, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });


  return (
    <MainDiv>
      <ColumnDiv>
        <Typography variant="h4" style={typoh3bold}>
          Traduccion de Libros
        </Typography>
        <RowDiv
          component={motion.div}
          ref={refanim}
          initial={{ opacity: 0, y: 100, x: 150 }}
          animate={{
            opacity: inView ? 1 : 0,
            y: inView ? 0 : 100,
            x: inView ? 0 : 150,
          }}
          transition={{ duration: 1.5 }}
        >
          <TextDiv>
            <Typography variant="h3" style={typoh5}>
              Experiencia en traduccion de Libros.
            </Typography>
          </TextDiv>
        </RowDiv>
      </ColumnDiv>
      <NoteBkgd>
        <img width={"7%"} src={film} />
      </NoteBkgd> 
    </MainDiv>
  );
};

export default SectionBooks;