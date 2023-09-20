import { Typography } from "@mui/material";
import {
  LeftDiv,
  MainDiv,
  RowDiv,
  TitleDiv,
  TranslateBtn,
} from "./TranslatesStyles";
import { typoh3bold, typoh6 } from "../../utils/Fonts";
import { NavLink } from "react-router-dom";

const Translates = ({sectionTranslates}) => {
  return (
    <MainDiv id="Translates"  ref={sectionTranslates} >
      <TitleDiv>
        <Typography variant="h3" style={typoh3bold}>
          Traducciones
        </Typography>
      </TitleDiv>
      <RowDiv>
        <LeftDiv>
          <Typography variant="h6" style={typoh6}>
            El equipo de traducciones.com quiere
            ser tu mejor aliado para afrontar con éxito los nuevos retos que
            afrontamos en este cambiante entorno internacional.
          </Typography>
          <NavLink to="/traducciones">

          <TranslateBtn>Mas Info</TranslateBtn>
          </NavLink>

        </LeftDiv>
        <img
          width="600px"
          src="https://i1.wp.com/www.mondoagit.es/blog/wp-content/uploads/2016/05/escritorio.jpg?fit=550%2C366"
        />
      </RowDiv>
    </MainDiv>
  );
};

export default Translates;
