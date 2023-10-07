import styled from "@emotion/styled";
import { Box, TextField } from "@mui/material";

export const MainDiv = styled(Box)`
  width: 70dvw;
  display: flex;
  flex-direction: column;
  color: black;
  margin: 5% auto 5% auto;
  padding: 5% 0;
  background-color: rgba(200, 200, 200, 1);
  border-radius: 25px;

  align-items: center;
  justify-content: center;
  text-align: center;
`;


export const StyldTextField = styled(TextField)`
  width: 100%;
`;
