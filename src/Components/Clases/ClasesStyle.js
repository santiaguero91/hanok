import styled from "@emotion/styled";
import { Box, Typography, TextField, Button, FormLabel } from "@mui/material";
import { Colors } from "../../utils/Colors";

export const MainDiv = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${Colors.sectionsBackground};
  color: black;
  align-items: center;
  margin: 0 auto 0 auto;
  z-index: 0;
`;
export const ColumnDiv = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-top: 3%;
  padding: 3%;
  z-index: 1;
`;

export const RowDiv = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: black;
  align-items: center;
  margin: 5% 15% 0% 15%;
  border-radius: 10px;
  img {
    border-radius: 10px;
  }
  z-index: 4;
`;

export const TextDiv = styled(Box)`
  margin: 1.5% 5%;
  flex-direction: column;
  z-index: 5;
`;

export const ClasesBtn = styled(Button)`
  background-color: ${Colors.navBarBtn};
  color: white;
  transition: 1s;
  margin: 6% auto 0 auto;
  width: 45%;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  z-index: 5;
  :hover {
    background-color: ${Colors.navBarBtnHover};
    scale: 1.05;
    border-radius: 25px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  :focus {
    outline: none;
    border: none;
  }

  @media (max-width: 1200px) {
    width: 100% ;
  }
  @media (max-width: 770px) {
    /* width: 100% ; */
  }
`;

export const 클래스Bkgd = styled(Box)`
  position: absolute;
  left: 5%;
  margin-top: 10%;
  transform: rotate(25deg);
  color: rgba(200, 200, 200, 1);
  z-index: 0;
  pointer-events: none;
`;
export const ClothesBkgd = styled(Box)`
  position: absolute;
  right: 10%;
  margin-top: 30%;
  transform: rotate(-5deg);
  opacity: 0.3;
  z-index: 0;
  pointer-events: none;
  img {
    width: 200px;
  }
`;

export const DdctBkgd = styled(Box)`
  position: absolute;
  right: 15%;
  margin-top: 10%;
  transform: rotate(-5deg);
  color: rgba(200, 200, 200, 1);
  opacity: 0.5;
  z-index: 0;
  pointer-events: none;
`;

export const TypeDiv = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0 0 0 0;
`;
