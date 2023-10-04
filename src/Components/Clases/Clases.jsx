import { Typography } from "@mui/material";
import onlineClases from "../../assets/OnlineClases.jpg";
import { ClasesBtn, ColumnDiv, MainDiv, RowDiv, TextDiv } from "./ClasesStyle";
import { typoh3bold, typoh5 } from "../../utils/Fonts";

const Clases = ({ sectionClases }) => {
  return (
    <MainDiv id="Clases" ref={sectionClases}>
      <ColumnDiv>
        <Typography variant="h3" style={typoh3bold}>
          Clases
        </Typography>
        <RowDiv>
          <img width={"400px"} height={"350px"} src={onlineClases} />
          <TextDiv>
            <Typography variant="h5" style={typoh5}>
              Disfuta las mejores clases online personalizadas con grupos acorde al nivel. Bajo la tutela de profesores de alta trayectoria.
            </Typography>
            <ClasesBtn>Anotarme</ClasesBtn>
          </TextDiv>
        </RowDiv>

        <div>
          <h1>TimeTables</h1>
        </div>
      </ColumnDiv>
    </MainDiv>
  );
};

export default Clases;
