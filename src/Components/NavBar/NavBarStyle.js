import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import { Colors } from "../../utils/Colors";

export const MainDiv = styled(Box)`
  position: fixed;
  width: 100%;
  top: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: ${Colors.navBarBkg};
  color: black;
  align-items: center;
  padding: 1% 0 1% 0;
  z-index: 5;
  transition: 1s;
  height: 40px;
  z-index: 10;
  backdrop-filter: blur(2px);
  .inSight {
    background-color: ${Colors.navBarBtnHover};
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`;

export const NavBarBtn = styled(Button)`
  background-color: ${Colors.navBarBtn};
  color: ${Colors.sectionsBackground};
  transition: 1s;
  border-radius: 0;
  margin: 0 auto 0 auto;
  width: 20vw;
  :hover {
    background-color: ${Colors.navBarBtnHover};
  }
`;

export const TypeDiv = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin:  0 0 0 0;
`;