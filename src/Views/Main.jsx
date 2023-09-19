import Header from "../Components/Header/Header";
import NavBar from "../Components/NavBar/NavBar";
import MainSection from "../Components/MainSection/MainSection";
import Slider from "../Components/Slider/Slider";
import { MainDiv } from "./MainStyle";
import Sections from "../Components/Sections/Sections";

const Main = () => {
  return (
    <MainDiv>
      <Header/>
      <NavBar/>
      <Slider/>
      <MainSection/>
      <Sections />
    </MainDiv>
  );
};

export default Main;
