import { MainDiv } from "./SectionsStyle";
import Clases from "../../assets/OnlineClases.jpg"
import ReadingWorkshop from "../../assets/ReadingWorkshop.jpg"
import Translations from "../../assets/Translations.jpg"
import Section from "./Section/Section";

const Sections = () => {

  return (
    <MainDiv>
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
    </MainDiv> 
  );
};

export default Sections;