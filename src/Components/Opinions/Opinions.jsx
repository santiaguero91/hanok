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
          width={"250px"}
          height={"250px"}
          src="https://media.istockphoto.com/id/846730696/photo/portrait-teenager.jpg?b=1&s=612x612&w=0&k=20&c=F6F54Is5POZluWmrrJZS5x4NyTJ8JlJTpmddAain-so="
        />
        <Typography variant="h6" style={typoh6}>
          "Es una gran profesora, se nota lo mucho que sabe y siempre da las clases con la mejor de las mejor onda."
        </Typography>
      </RowDiv>
      </ColumnDiv>
    </MainDiv>
  );
};

export default Opinions;
