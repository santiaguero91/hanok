import styled from "@emotion/styled";
import { Box, Typography, TextField, Button, FormLabel } from "@mui/material";
import { Colors } from "../../utils/Colors";

export const MainDiv = styled(Box)`

  display: flex;
  flex-direction: column;
  background-color: ${Colors.sectionsBackground};
  color: black;
  align-items: center;
  margin:  0 auto 0 auto;
`;
export const ColumnDiv = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  //margin: 3% 10%;
  //padding: 1% 0 0 0;
  //border-radius: 25px;

  background-color: ${Colors.sectionsBackground};
`;
export const TitleDiv = styled(Box)`
  margin: 3% auto 0 auto;
`;


export const RowDiv = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: black;
  align-items: center;
  margin: 3% 10%;
  border-radius: 10px;
  background-color: rgba(112, 121, 85);

  img{
    border-radius: 0 10px 10px 0;
  }
`;

export const LeftDiv = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: black;
  align-items: center;
  padding: 2% 0 0.5% 0;
  margin: 0 10%;
`;

export const TranslateBtn = styled(Button)`
  background-color: rgba(156,137,184);
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





