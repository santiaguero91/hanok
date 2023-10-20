import { Typography } from "@mui/material";
import { AvBox, AvMainDiv } from "./WsBoxesStyle";
import { Typh5, typoh3bold } from "../../../utils/Fonts";
import film from "../../../assets/films.png";

const AvWs = () => {
  return (
    <AvMainDiv>
      <Typography variant="h4" style={typoh3bold}>
        Taller Audiovisual
      </Typography>
      <img width="80px" height="80px" alt="" src={film} title="books" />
      <AvBox>
        <Typh5>Proximamente!!</Typh5>
      </AvBox>
    </AvMainDiv>
  );
};

export default AvWs;
