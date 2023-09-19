import {MainSection,Header,NavBar,Slider,Sections,Translates,Workshops,Clases,Opinions} from "../Components/index";
import { MainDiv } from "./MainStyle";

const Main = () => {
  return (
    <MainDiv>
      <Header/>
      <NavBar/>
      <MainSection/>
      <Sections />
      <Translates />
      <Workshops />
      <Clases />
      <Opinions />
    </MainDiv>
  );
};

export default Main;
