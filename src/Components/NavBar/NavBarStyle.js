import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";

export const MainDiv = styled(Box)`
  position: sticky;
  top: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: rgba(191, 191, 191, 0.9);
  color: black;
  align-items: center;
  padding: 1% 0 1% 0;
  z-index: 5;
  transition: 1s;
  height: 40px;
  .inSight {
    background-color: rgb(112,121,85);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`;

export const NavBarBtn = styled(Button)`
  background-color: transparent;
  color: black;
  transition: 1s;
  border-radius: 0;
  margin: 0 auto 0 auto;
  width: 20vw;
  :hover {
    background-color: transparent;
  }
`;

export const TypeDiv = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin:  0 0 0 0;
`;