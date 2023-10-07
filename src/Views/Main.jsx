import { useInView } from "react-intersection-observer";
import {
  MainSection,
  Header,
  NavBar,
  Sections,
  Translates,
  Workshops,
  Clases,
  Opinions,
  Footer,
} from "../Components/index";
import { MainDiv } from "./MainStyle";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TempleDay from "../assets/TempleDay.jpg";
import seoulNightView from "../assets/seoulNightView.jpg";
import jejuisland from "../assets/jejuisland.jpg";
import FirstFooter from "../Components/FirstFooter/FirstFooter";

const Main = () => {
  let background1 = jejuisland;
  let background2 = seoulNightView;
  const [inSight, setInSight] = useState("");
  const [background, setBackground] = useState(background2);

  const [sectionWorkshop, sectionWorkshopInView] = useInView({
    threshold: 0.5,
  });
  const [sectionClases, sectionClasesInView] = useInView({ threshold: 0.5 });
  const [sectionTranslates, sectionTranslatesInView] = useInView({
    threshold: 0.5,
  });
  const [sectionOpinion, sectionOpinionInView] = useInView({ threshold: 0.5 });
  useEffect(() => {
    if (sectionWorkshopInView) {
      setInSight("Workshop");
    } else if (sectionClasesInView) {
      setInSight("Clases");
    } else if (sectionTranslatesInView) {
      setInSight("Translates");
    } else if (sectionOpinionInView) {
      setInSight("Opinion");
    } else if (
      !sectionWorkshopInView &&
      !sectionClasesInView &&
      !sectionTranslatesInView &&
      !sectionOpinionInView
    ) {
      setInSight("");
    }
  }, [
    sectionWorkshopInView,
    sectionClasesInView,
    sectionTranslatesInView,
    sectionOpinionInView,
  ]);

  useEffect(() => {
    if (inSight === "Workshop") {
      setBackground(background1);
    } 
    if ( inSight === "Clases") {
      setBackground(background2);
    }
  }, [inSight]);

  return (
    <MainDiv
      className="changed"
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.8 } }}
      exit={{ opacity: 0, transition: { duration: 0.8 } }}
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* <FixBox>{inSight}</FixBox> */}
      <Header />
      <NavBar inSight={inSight} />
       <MainSection /> 
      {/* <Sections /> */}
      <Clases sectionClases={sectionClases} />
      <Workshops sectionWorkshop={sectionWorkshop} />
      <Translates sectionTranslates={sectionTranslates} />
      <Opinions sectionOpinion={sectionOpinion} />
      <FirstFooter />
      <Footer />
    </MainDiv>
  );
};

export default Main;
