import { ColumnDiv, MainDiv } from "./OpinionsStyle";
import SwipperOpinion from "./SwiperOpinions/SwiperOpinions";
import { Typh3bold } from "../../utils/Fonts";


const Opinions = ({ sectionOpinion }) => {
  return (
    <MainDiv id="Opiniones" ref={sectionOpinion}>
      <ColumnDiv>
        <Typh3bold variant="h4">
        OPINIONES DE ESTUDIANTES
        </Typh3bold>
        <SwipperOpinion />
      </ColumnDiv>
    </MainDiv>
  );
};

export default Opinions;
