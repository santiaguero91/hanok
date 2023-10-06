import { Typography } from "@mui/material";
import { typoh6 } from "../../../../utils/Fonts";
import { RowDiv } from "./OpinionCardsStyle";

const OpinionCardTwo = () => {

  return (
    <RowDiv>
        <img
          width={"25%"}
          height={"25%"}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRggeV5CJ1UgQA5cGAe2RIl6ike7JMAvtevGg&usqp=CAU"
        />
        <Typography variant="h6" style={typoh6}>
          "Es una gran profesora, se nota lo mucho que sabe y siempre da las clases con la mejor de las mejor onda."
        </Typography>
      </RowDiv> 
  );
};

export default OpinionCardTwo;