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

const Main = () => {
  let background1 = TempleDay;
  let background2 = seoulNightView;
  const [inSight, setInSight] = useState("");
  const [background, setBackground] = useState(background1);

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
    if (inSight === "Translates" || inSight === "Opinion") {
      setBackground(background2);
    } else {
      setBackground(background1);
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
      {/* <MainSection /> */}
      <Sections />
      <Clases sectionClases={sectionClases} />
      <Workshops sectionWorkshop={sectionWorkshop} />
      <Translates sectionTranslates={sectionTranslates} />
      <Opinions sectionOpinion={sectionOpinion} />
      <Footer />
    </MainDiv>
  );
};

export default Main;
