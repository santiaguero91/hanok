import styled from "@emotion/styled";
import { Box, Typography, TextField, Button, FormLabel } from "@mui/material";
import { Colors } from "../../utils/Colors";

export const MainDiv = styled(Box)`
  display: flex;
  flex-direction: column;
  background-color: ${Colors.sectionsBackground};
  color: black;
  align-items: center;
  margin: 0 auto 0 auto;
  padding-bottom: 5%;
`;
export const ColumnDiv = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: ${Colors.sectionsBackground};
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
  border-radius: 10px;
  background-color: rgba(112, 121, 85);
  img {
    border-radius: 10px;
    width: 50%;
  }
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

export const TypeDiv = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0 0 0 0;
`;


export const TranslateBtn = styled(Button)`
  background-color: ${Colors.navBarBtn};
  color: white;
  transition: 1s;
  margin: 6% auto 0 auto;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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