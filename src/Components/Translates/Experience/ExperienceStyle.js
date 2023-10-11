import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";

export const MainDiv = styled(Box)`
  display: flex;
  flex-direction: column;
  color: black;
  margin: 3% auto 0 auto;
`;
export const ColumnDiv = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
export const TitleDiv = styled(Box)`
  margin: 3% auto 0 auto;
`;


export const RowDiv = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: black;
  margin: 3% 0;
  border-radius: 10px;
  width: 100%;

  img{
    border-radius: 15px ;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

export const ImgDiv = styled(Box)`
z-index: 6;
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

export const WbTnMainDiv = styled(Box)`
display: flex;
background-color: white;
z-index: 5;
background-color: transparent;
`;

export const BooksMainDiv = styled(Box)`

display: flex;
flex-direction: column;
background-color: white;
z-index: 5;
background-color: transparent;
`;

