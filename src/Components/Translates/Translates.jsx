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
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYYLMRxXJ9u5Ctf4laSimISuSK_ttRHs4r0K41lEqPbA&s"
        />
      </RowDiv>
    </MainDiv>
  );
};

export default Translates;
