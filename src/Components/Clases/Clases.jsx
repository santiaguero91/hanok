import { Typography } from "@mui/material";
import onlineClases from "../../assets/OnlineClases.jpg"
import { MainDiv, RowDiv } from "./ClasesStyle";



const Clases = () => {
  return (
    <MainDiv>
      <Typography variant="h3">Clases</Typography>
      <RowDiv>
      <img  width={"300px"} height={"250px"} src={onlineClases}/>
      <Typography variant="h5">Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en
          demostraciones de tipografías o de borradores de diseño para probar el
          diseño visual antes de insertar el texto final</Typography>
      </RowDiv>
      <div>
        <h1>TimeTables</h1>
      </div>

    </MainDiv>
  );
};

export default Clases;
