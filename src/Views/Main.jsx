import Header from "../Components/Header/Header";
import NavBar from "../Components/NavBar/NavBar";
import Slider from "../Components/Slider/Slider";
import { MainDiv } from "./MainStyle";

const Main = () => {
  return (
    <MainDiv>
      <Header/>
      <NavBar/>
      <Slider/>
    </MainDiv>
  );
};

export default Main;
