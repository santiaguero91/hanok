import { Typography } from "@mui/material";
import { typoh6 } from "../../../../utils/Fonts";
import { RowDiv } from "./OpinionCardsStyle";

const OpinionCardThree = () => {

  return (
    <RowDiv>
        <img
          width={"25%"}
          height={"25%"}
          src="https://media.istockphoto.com/id/846730696/photo/portrait-teenager.jpg?b=1&s=612x612&w=0&k=20&c=F6F54Is5POZluWmrrJZS5x4NyTJ8JlJTpmddAain-so="
        />
        <Typography variant="h6" style={typoh6}>
          "Es una gran profesora, se nota lo mucho que sabe y siempre da las clases con la mejor de las mejor onda."
        </Typography>
      </RowDiv> 
  );
};

export default OpinionCardThree;