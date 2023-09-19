import { Typography } from "@mui/material";
import { LeftDiv, MainDiv, RowDiv, TitleDiv, TranslateBtn } from "./TranslatesStyles";


const Translates = () => {
  return (
    <MainDiv>
      <TitleDiv>
        <Typography variant="h3">Traducciones</Typography>
      </TitleDiv>
      <RowDiv>
        <LeftDiv>
          <Typography variant="h6">
            Lorem ipsum es el texto que se usa habitualmente en diseño gráfico
            en demostraciones de tipografías o de borradores de diseño para
            probar el diseño ...
          </Typography>
          <TranslateBtn>Contactar</TranslateBtn>
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
