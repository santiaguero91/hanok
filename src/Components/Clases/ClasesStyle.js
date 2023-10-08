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
  background-color: ${Colors.sectionsBackground};
  padding-top: 3%;
  padding: 3%;

`;
export const RowDiv = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: black;
  align-items: center;
  margin: 5% 15% 0% 15%;
  border-radius: 10px;
  background-color: ${Colors.sectionsBackground};
  img{
    border-radius: 10px;
  }
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
