import styled from "@emotion/styled";
import { Box,Typography } from "@mui/material";

export const MainDiv = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: transparent;
  max-width: 100%;
  @media (max-width: 450px) {
  margin: 25% 0;
  }
`;

export const RowDiv = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: transparent;
  margin: 5% 5%;
`;

export const TypeDiv = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: transparent;
`;

export const TextDiv = styled(Box)`
  margin: 5%;
  padding: 1%;
`;

export const ImgDiv = styled(Box)`
  margin: 5%;
  img {
    width: 300px;
    @media (max-width: 450px) {
      width: 25vw;
    }
    @media (max-width: 400px) {
      /* width: 100% ; */
    }
  }
`;
