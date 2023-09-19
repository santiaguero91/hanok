import {MainSection,Header,NavBar,Slider,Sections,Translates} from "../Components/index";
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
    </MainDiv>
  );
};

export default Main;
