import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";

export const MainDiv = styled(Box)`
  max-width: 100dvw;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: rgba(112, 121, 85);
  color: black;
  margin-bottom: 30%; 
`;
export const TypoDiv = styled(Box)`
margin-top: 3%;
`;
export const RowDiv = styled(Box)`
  max-width: 100dvw;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: rgba(112, 121, 85);
  color: black;
`;


export const SectionsBtn = styled(Button)`
  background-color: rgba(156, 137, 184);
  color: black;
  transition: 1s;
  border-radius: 10px;
  margin: 3% auto;
  :hover {
    background-color: rgba(199, 199, 199);
  }
  :focus {
    outline: none;
    border: none;
  }
`;
