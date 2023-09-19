import { Typography } from "@mui/material";
import onlineClases from "../../assets/OnlineClases.jpg";
import { ClasesBtn, MainDiv, RowDiv, TextDiv } from "./ClasesStyle";
import { typoh3bold, typoh5 } from "../../utils/Fonts";

const Clases = () => {
  return (
    <MainDiv id='Clases'>
      <Typography variant="h3" style={typoh3bold}>
        Clases
      </Typography>
      <RowDiv>
        <img width={"400px"} height={"350px"} src={onlineClases} />
        <TextDiv>
          <Typography variant="h5" style={typoh5}>
            Lorem ipsum es el texto que se usa habitualmente en diseño gráfico
            en demostraciones de tipografías o de borradores de diseño para
            probar el diseño visual antes de insertar el texto final
          </Typography>
          <ClasesBtn>Anotarme</ClasesBtn>
        </TextDiv>
      </RowDiv>

      <div>
        <h1>TimeTables</h1>
      </div>
    </MainDiv>
  );
};

export default Clases;
