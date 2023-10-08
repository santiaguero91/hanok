import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import { Colors } from "../../utils/Colors";

export const MainDiv = styled(Box)`

  display: flex;
  flex-direction: row;
  background-color: ${Colors.sectionsBackground};
  color: black;
  align-items: center;
  margin: 0 auto 0 auto;
`;

export const RowDiv = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: black;
  align-items: center;
  margin: 3% 15%;

  background-color: ${Colors.sectionsBackground};
`;
export const ColumnDiv = styled(Box)`
  padding: 3% 0;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  //margin: 3% 10%;
  //padding: 1% 0 0 0;
  //border-radius: 25px;

  background-color: ${Colors.sectionsBackground};
`;

export const TextDiv = styled(Box)`
  margin: 1.5% 5%;
  flex-direction: column;
`;
export const ImgDiv = styled(Box)`
width: 50%;
  margin: 1.5% 0%;
  img {
    border-radius: 15px;
  }
`;

export const WorkshopBtn = styled(Button)`
  background-color: rgba(156, 137, 184);
  color: black;
  transition: 1s;
  border-radius: 10px;
  margin: 9% auto 2% auto;
  width: 10vw;

  :hover {
    background-color: rgba(199, 199, 199);
  }
  :focus {
    outline: none;
    border: none;
  }
`;
