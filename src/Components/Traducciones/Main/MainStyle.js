import styled from "@emotion/styled";
import { Box, Typography, TextField, Button, FormLabel } from "@mui/material";

export const MainDiv = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgba(191, 191, 191);
  color: black;
  align-items: center;
  padding: 0.5% 0 0.5% 0;
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

  background-color: blanchedalmond;
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

