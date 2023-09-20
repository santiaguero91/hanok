import { useInView } from "react-intersection-observer";
import {
  MainSection,
  Header,
  NavBar,
  Slider,
  Sections,
  Translates,
  Workshops,
  Clases,
  Opinions,
} from "../Components/index";
import { FixBox, MainDiv } from "./MainStyle";
import { useEffect, useState } from "react";

const Main = () => {
  const [inSight, setInSight] = useState("");

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
    }
  }, [sectionWorkshopInView, sectionClasesInView, sectionTranslatesInView, sectionOpinionInView]);

  return (
    <MainDiv>
      {/* <FixBox>{inSight}</FixBox> */}
      <Header />
      <NavBar inSight={inSight}/>
      <MainSection />
      <Sections />
      <Translates sectionTranslates={sectionTranslates}/>
      <Workshops sectionWorkshop={sectionWorkshop} />
      <Clases sectionClases={sectionClases}/>
      <Opinions sectionOpinion={sectionOpinion}/>
    </MainDiv>
  );
};

export default Main;
