import styled from "@emotion/styled";
import { Box, Button, TextField } from "@mui/material";

export const MainDiv = styled(Box)`
  width: 50dvw;
  height: 50vh;
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


export const ModalBtn = styled(Button)`
  width: 25%;
  color:black;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  :hover{
    border: none;
  }
`;


