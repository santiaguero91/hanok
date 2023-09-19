import {MainSection,Header,NavBar,Slider,Sections,Translates,Workshops} from "../Components/index";
import { MainDiv } from "./MainStyle";

const Main = () => {
  return (
    <MainDiv>
      <Header/>
      <NavBar/>
      <Slider/>
      <MainSection/>
      <Sections />
      <Translates />
      <Workshops />
      <Clases />
    </MainDiv>
  );
};

export default Main;
