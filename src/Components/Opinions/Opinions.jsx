import { Typography } from "@mui/material";
import { ColumnDiv, MainDiv } from "./OpinionsStyle";
import SwipperOpinion from "./SwiperOpinions/SwiperOpinions";
import { typoh3bold } from "../../utils/Fonts";


const Opinions = ({ sectionOpinion }) => {
  return (
    <MainDiv id="Opiniones" ref={sectionOpinion}>
      <ColumnDiv>
        <Typography variant="h3" style={typoh3bold}>
          Lo que opinan mis alumnos
        </Typography>
        <SwipperOpinion />
      </ColumnDiv>
    </MainDiv>
  );
};

export default Opinions;
