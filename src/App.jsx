import "./App.css";
import Main from "./Views/Main";
import { Route, Routes } from "react-router-dom";
import Traducciones from "./Views/Traducciones/Traducciones";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/traducciones" element={<Traducciones />} />
      </Routes>
    </div>
  );
}
export default App;
