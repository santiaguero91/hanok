import "./App.css";
import Main from "./Views/Main";
import { Route, Routes } from "react-router-dom";
import Traducciones from "./Views/Traducciones/Traducciones";
import { MainDiv } from "./Views/MainStyle";
import Test from "./Views/Test/Test";

function App() {
  return (
    <MainDiv>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/traducciones" element={<Traducciones />} />
        <Route path="/test" element={<Test/>} />
      </Routes>
    </MainDiv>
  );
}
export default App;
