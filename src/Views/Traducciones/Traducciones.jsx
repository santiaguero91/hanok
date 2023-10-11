import { motion } from "framer-motion";
import Main from "../../Components/Traducciones/Main/Main";
import { MainDiv } from "../MainStyle";
import { Footer, Header } from "../../Components";
import SectionWebToons from "../../Components/Traducciones/SectionWebToons/SectionWebToons";
import SectionMovies from "../../Components/Traducciones/SectionMovies/SectionMovies";

const Traducciones = () => {
  return (
    <MainDiv
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.8 } }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <Header />

      <Main />




      <SectionWebToons/>
      <SectionMovies/>
      <Footer />
    </MainDiv>
  );
};

export default Traducciones;
