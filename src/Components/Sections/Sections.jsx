import { MainDiv } from "./SectionsStyle";
import Clases from "../../assets/OnlineClases.jpg"
import ReadingWorkshop from "../../assets/ReadingWorkshop.jpg"
import Translations from "../../assets/Translations.jpg"
import Section from "./Section/Section";

const Sections = () => {

  return (
    <MainDiv>
        <Section 
        img={Clases}
        />
        <Section 
        img={ReadingWorkshop}
        />
        <Section 
        img={Translations}
        />
    </MainDiv> 
  );
};

export default Sections;