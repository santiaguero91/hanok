import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import { Colors } from "../../utils/Colors";

export const MainDiv = styled(Box)`
  display: flex;
  flex-direction: row;
  background-color: ${Colors.sectionsBackground};
  color: black;
  align-items: center;
  margin: 0 auto 0 auto;
`;

export const RowDiv = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: black;
  align-items: center;
  margin: 3% 15%;
  @media (max-width: 450px) {
    flex-direction: column;
    }
`;
export const ColumnDiv = styled(Box)`
  padding: 3% 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const TextDiv = styled(Box)`
  margin: 1.5% 5%;
  flex-direction: column;
  z-index: 5;
`;
export const ImgDiv = styled(Box)`
  z-index: 5;
  img {
    border-radius: 15px;
  }
`;

export const WorkshopBtn = styled(Button)`
  background-color: rgba(156, 137, 184);
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

export const FlagBkgd = styled(Box)`
  position: absolute;
  right: 15%;
  margin-top: -40%;
  transform: rotate(-5deg);
  color: rgba(200, 200, 200, 1);
  opacity: 0.5;
  pointer-events: none;
  @media (max-width: 450px) {
    margin-top: -115%;
    left: 45%;
    z-index: 3;
    }
`;
export const FlowerBkgd = styled(Box)`
  position: absolute;
  left: 5%;
  margin-top: -40%;
  transform: rotate(-5deg);
  color: rgba(200, 200, 200, 1);
  opacity: 0.5;
  pointer-events: none;
  @media (max-width: 450px) {
    display: none;
    }
`;
