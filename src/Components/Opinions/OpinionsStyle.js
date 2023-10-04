import styled from "@emotion/styled";
import { Box, Typography, TextField, Button, FormLabel } from "@mui/material";
import { Colors } from "../../utils/Colors";

export const MainDiv = styled(Box)`
max-width: 100vw;
  //width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${Colors.lightGreyBackground};
  color: black;
  align-items: center;
  margin: 3% auto;
  border-radius: 25px;
  //padding-bottom: 2%;
`;
export const ColumnDiv = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  //margin: 3% 10%;
  //padding: 1% 0 0 0;
  border-radius: 25px;

  background-color: ${Colors.blanchedalmond};
`;
export const RowDiv = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: black;
  align-items: center;
  margin: 3% 10%;
  border-radius: 10px;

  background-color: ${Colors.blanchedalmond};

  img {
    border-radius: 10px 0 0 10px;
  }
`;
