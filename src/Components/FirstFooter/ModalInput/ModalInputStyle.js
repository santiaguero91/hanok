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


  background-image: url("https://qph.cf2.quoracdn.net/main-qimg-63d5a053005d9f1ed3995740d1fe5d50");
  background-position: center;
  background-repeat: no-repeat;


  align-items: center;
  justify-content: center;
  text-align: center;
`;
export const CoverDiv = styled(Box)`
width: 100%;
background-color: rgba(200, 200, 200, 0.8);
`;


export const StyldTextField = styled(TextField)`
  width: 70%;
`;
