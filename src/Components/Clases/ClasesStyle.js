import styled from "@emotion/styled";
import { Box, Typography, TextField, Button, FormLabel } from "@mui/material";
import { Colors } from "../../utils/Colors";

export const MainDiv = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${Colors.lightGreyBackground};
  color: black;
  align-items: center;
  margin:  3% 0 3% 0;
`;

export const RowDiv = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: black;
  align-items: center;
  margin: 3% 10% 0% 10%;

  background-color: ${Colors.blanchedalmond};
`;

export const TextDiv = styled(Box)`
  margin: 1.5% 5%;
  flex-direction: column;
`;

export const ClasesBtn = styled(Button)`
  background-color: rgba(156,137,184);
  color: black;
  transition: 1s;
  border-radius: 10px;
  margin: 6% auto 0 auto;
  width: 10vw;

  :hover {
    background-color: rgba(199, 199, 199);
  }
  :focus {
    outline: none;
    border: none;
  }
`;
