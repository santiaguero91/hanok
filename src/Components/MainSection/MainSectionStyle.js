import styled from "@emotion/styled";
import { Box } from "@mui/material";

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
  gap: 10vw;
  @media (max-width: 770px) {
    flex-direction: column;
    gap: 5vw;

  }
`;

export const TypeDiv = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: transparent;
`;

export const TextDiv = styled(Box)`
  width: 45vw;
  height: 10vh;
  margin: 5%;
  padding: 1%;
  align-items: center;
  justify-content: center;
  @media (max-width: 700px) {
    width: 50vw;
    height: 35vh;
  }
  @media (max-width: 450px) {
    width: 70vw;
    height: 35vh;
  }
`;

export const ImgDiv = styled(Box)`
  margin: 5%;
  img {
    width: 300px;
    @media (max-width: 430px) {
      width: 50vw;
    }
  }
`;
