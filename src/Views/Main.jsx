import { useInView } from "react-intersection-observer";
import {MainSection,Header,NavBar,Slider,Sections,Translates,Workshops,Clases,Opinions} from "../Components/index";
import { FixBox, MainDiv } from "./MainStyle";
import { useState } from "react";

const Main = () => {

  const [section1Ref, section1InView] = useInView({ threshold: 0.5 });


  return (
    <MainDiv>
      <FixBox > {section1InView ? "Hola" : "Nada"}</FixBox>
      <Header />
      <NavBar/>
      <MainSection/>
      <Sections />
      <Translates />
      <Workshops section1Ref={section1Ref}/>
      <Clases />
      <Opinions />
    </MainDiv>
  );
};

export default Main;
