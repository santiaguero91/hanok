import { Typography } from "@mui/material";
import { typoh6 } from "../../../../utils/Fonts";
import { RowDiv } from "./OpinionCardsStyle";

const OpinionCardTwo = () => {

  return (
    <RowDiv>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRggeV5CJ1UgQA5cGAe2RIl6ike7JMAvtevGg&usqp=CAU"
        />
        <Typography variant="h6" style={typoh6}>
          "Excelente calidad en la enseñanza que brinda a través de un seguimiento exhaustivo y personalizado."
        </Typography>
      </RowDiv> 
  );
};

export default OpinionCardTwo;