import { MainDiv, RowDiv, TypoDiv } from "./SectionsStyle";
import Clases from "../../assets/OnlineClases.jpg"
import ReadingWorkshop from "../../assets/ReadingWorkshop.jpg"
import Translations from "../../assets/Translations.jpg"
import Section from "./Section/Section";
import { Typography } from "@mui/material";
import { typoh3bold } from "../../utils/Fonts";

const Sections = ({sectionClases}) => {

  return (
    <MainDiv ref={sectionClases}>
      <TypoDiv>
      <Typography variant="h3" style={typoh3bold}> Nuestras Actividades </Typography>
      </TypoDiv>
      <RowDiv>
        <Section 
        title="Clases Online"
        img={Clases}
        link="Clases"
        />
        <Section
        title="Talleres"
        img={ReadingWorkshop}
        link="Workshops"
        />
        <Section
        title="Traducciones"
        img={Translations}
        link="Translates"
        />
        </RowDiv>
    </MainDiv> 
  );
};

export default Sections;