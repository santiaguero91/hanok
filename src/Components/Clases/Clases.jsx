import { Typography } from "@mui/material";
import onlineClases from "../../assets/OnlineClases.jpg";
import { ClasesBtn, MainDiv, RowDiv, TextDiv } from "./ClasesStyle";
import { typoh3bold, typoh5 } from "../../utils/Fonts";

const Clases = () => {
  return (
    <MainDiv id="Clases">
      <Typography variant="h3" style={typoh3bold}>
        Clases
      </Typography>
      <RowDiv>
        <img width={"400px"} height={"350px"} src={onlineClases} />
        <TextDiv>
          <Typography variant="h5" style={typoh5}>
            GlobalExam. Es la primera página web de enseñanza de idiomas 100%
            online y propone sin duda uno de los mejores cursos de inglés. ...
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
