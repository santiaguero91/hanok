import { Typography } from "@mui/material";
import { AvBox, AvMainDiv } from "./WsBoxesStyle";
import { Typh5, typoh3bold } from "../../../utils/Fonts";
import film from "../../../assets/films.png";
import { motion } from "framer-motion";

const AvWs = ({inView}) => {
  return (
    <AvMainDiv
      component={motion.div}
      initial={{ opacity: 0, y: 100, x: 150 }}
      animate={{
        opacity: inView ? 1 : 0,
        y: inView ? 0 : 100,
        x: inView ? 0 : 150,
        scale: inView ? 1 : 0,
      }}
      transition={{ duration: 1.5 }}
    >
      <Typography variant="h4" style={typoh3bold}>
        Taller Audiovisual
      </Typography>
      <img width="80px" height="80px" alt="" src={film} title="books" />
      <AvBox>
        <Typh5>Proximamente!!</Typh5>
      </AvBox>
    </AvMainDiv>
  );
};

export default AvWs;
