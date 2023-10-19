import { Typography } from "@mui/material";
import { BooksMainDiv, WbTnMainDiv } from "./ExperienceStyle";
import { typoh6 } from "../../../utils/Fonts";

const BooksDiv = () => {
  return (
    <BooksMainDiv>
      <Typography variant="h6" style={typoh6}>
      Literatura
      </Typography>
    </BooksMainDiv>
  );
};

export default BooksDiv;