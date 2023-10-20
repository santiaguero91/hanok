import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import { Colors } from "../../../utils/Colors";

export const BookWsMainDiv = styled(Box)`
  width: 40vw;
  height: fit-content;
  display: flex;
  flex-direction: column;
  color: black;
  align-items: center;
  margin: 0 1% 0 1%;
  padding: 2%;
  justify-content: center;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  // border: 1px solid red;
  @media (max-width: 770px) {
    margin: 3% 1% 3% 1%;
  }
`;
export const AvMainDiv = styled(Box)`
  width: 40vw;
  flex-direction: column;
  color: black;
  align-items: center;
  justify-content: center;
  margin: 0 1% 0 1%;
  padding: 2%;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  img {
    margin-top: 2%;
  }
  @media (max-width: 770px) {
    margin: 3% 1% 3% 1%;
  }
`;
export const AvBox = styled(Box)`
  height: 40%;
  display: flex;
  flex-direction: column;
  color: black;
  align-items: center;
  justify-content: center;
  margin: 0 1% 0 1%;
  padding: 2%;

  border-radius: 10px;
`;

export const WsBtn = styled(Button)`
  background-color: ${Colors.navBarBtn};
  color: white;
  transition: 1s;
  margin: 6% auto 0 auto;
  width: 45%;
  border-radius: 10px;
  z-index: 5;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  :hover {
    background-color: ${Colors.navBarBtnHover};
    border-radius: 25px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  :focus {
    outline: none;
    border: none;
  }
  a {
    color: white;
    text-decoration: none;
  }

  @media (max-width: 1200px) {
    width: 100%;
  }
  @media (max-width: 770px) {
    /* width: 100% ; */
  }
`;