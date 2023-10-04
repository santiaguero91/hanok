import { Typography } from "@mui/material";
import { ColumnDiv, MainDiv, RowDiv } from "./OpinionsStyle";
import { typoh3bold,typoh6 } from "../../utils/Fonts";

const Opinions = ({sectionOpinion}) => {
  return (
    <MainDiv id='Opiniones' ref={sectionOpinion}>
      <ColumnDiv>
      <Typography
        variant="h3"
        style={typoh3bold}
      >
        Lo que opinan mis alumnos
      </Typography>

      <RowDiv>
        <img
          width={"500px"}
          src="https://content.gallup.com/origin/gallupinc/GallupSpaces/Production/Cms/EDUCMS/tz7n-7vqceaq86dprdnzag.jpg"
        />
        <Typography variant="h6" style={typoh6}>
          Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en
          demostraciones de tipografías o de borradores de diseño para probar el
          diseño visual antes de insertar el texto final
        </Typography>
      </RowDiv>
      </ColumnDiv>
    </MainDiv>
  );
};

export default Opinions;
