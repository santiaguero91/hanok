import { Typography } from "@mui/material";
import { LeftDiv, MainDiv, RowDiv, TitleDiv, TranslateBtn } from "./MainStyle";
import { typoh3bold,typoh6 } from "../../../utils/Fonts";

const Main = () => {

  return (
    <MainDiv id="Translates">
      <TitleDiv>
        <Typography variant="h3"
         style={typoh3bold}
        >Traducciones</Typography>
      </TitleDiv>
      <RowDiv>
        <LeftDiv>
          <Typography variant="h6"
          style={typoh6}
          >
            Lorem ipsum es el texto que se usa habitualmente en diseño gráfico
            en demostraciones de tipografías o de borradores de diseño para
            probar el diseño ...
          </Typography>
        </LeftDiv>
        <img
          width="600px"
          src="https://i1.wp.com/www.mondoagit.es/blog/wp-content/uploads/2016/05/escritorio.jpg?fit=550%2C366"
        />
      </RowDiv>
    </MainDiv>
  );
};

export default Main;