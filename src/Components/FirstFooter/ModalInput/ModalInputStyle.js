import styled from "@emotion/styled";
import { Box, Button, TextField } from "@mui/material";

export const MainDiv = styled(Box)`
  width: 50dvw;
  display: flex;
  flex-direction: column;
  color: black;
  margin: 5% auto 5% auto;
  background-color: rgba(200, 200, 200, 1);
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (max-width: 770px) {
    width: 85vw;
    }
`;

export const StyldTextField = styled(TextField)`
  width: 70%;
`;

export const ModalBtn = styled(Button)`
  width: 25%;
  color: black;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  :hover {
    border: none;
  }
`;

export const LettersBkg = styled(Box)`
  position: absolute;
  background-image: url("https://qph.cf2.quoracdn.net/main-qimg-63d5a053005d9f1ed3995740d1fe5d50");
  background-repeat: no-repeat;
  background-size: contain;
  width: 10%;
  height: 15%;
  right: 30%;
  top: 20%;
  transform: rotate(15deg);
  z-index: 1;
  @media (max-width: 770px) {
    width: 15%;
    height: 15%;
  }
`;
export const PicBkg = styled(Box)`
  position: absolute;
  background-image: url("https://i0.wp.com/www.simplyangella.com/wp-content/uploads/2019/12/bukchon-hanok-village-gahoe-dong-seoul-hanbok.jpg?fit=2048%2C1536&ssl=1");
  background-repeat: no-repeat;
  background-size: cover;
  width: 10%;
  height: 15%;
  transform: rotate(-10deg);
  left: 27%;
  bottom: 25%;
  z-index: 1;
  @media (max-width: 770px) {
    width: 20%;
    height: 15%;
    left: 30%;
    bottom: 27%;
  }
  @media (max-width: 450px) {
    width: 20%;
    height: 15%;
    left: 30%;
    bottom: 27%;
  }
`;
export const CoverDiv = styled(Box)`
  width: 100%;
  height: 100%;
  background-color: rgba(200, 200, 200, 0.8);
  z-index: 2;
  padding: 5% 0;
  border-radius: 25px;
`;
