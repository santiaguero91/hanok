import { Typography } from "@mui/material";
import { typoh6 } from "../../../../utils/Fonts";
import { RowDiv } from "./OpinionCardsStyle";

const OpinionCardOne = () => {

  return (
    <RowDiv>
        <img
          width={"25%"}
          height={"25%"}
          src="https://img.freepik.com/free-photo/smiling-caucasian-young-guy-wearing-pink-shirt-isolated-white-background_141793-38613.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696464000&semt=ais"
        />
        <Typography variant="h6" style={typoh6}>
          "Es una gran profesora, se nota lo mucho que sabe y siempre da las clases con la mejor de las mejor onda."
        </Typography>
      </RowDiv> 
  );
};

export default OpinionCardOne;