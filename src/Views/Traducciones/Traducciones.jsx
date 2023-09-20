import { motion } from "framer-motion";
import Main from "../../Components/Traducciones/Main/Main";
import Proyectos from "../../Components/Traducciones/Proyectos/Proyectos";
import { MainDiv } from "../MainStyle";

const Traducciones = () => {
  return (
    <MainDiv
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.8 } }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      >
      <Main />
      <Proyectos />
    </MainDiv>
  );
};

export default Traducciones;
