import styled from "@emotion/styled";
import { Box, Typography, TextField, Button, FormLabel } from "@mui/material";
import { Colors } from "../../utils/Colors";

export const MainDiv = styled(Box)`
  max-width: 100vw;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${Colors.almostWhiteBackground};
  color: black;
  align-items: center;
  margin: 0 auto;
`;
export const ColumnDiv = styled(Box)`
padding-top: 3%;
padding-bottom: 3%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: ${Colors.almostWhiteBackground};
`;
export const RowDiv = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: black;
  align-items: center;
  margin: 3% 10%;
  border-radius: 10px;
  background-color: ${Colors.almostWhiteBackground};
  gap: 5%;
  img {
    border-radius: 999px;
    border: 2px solid black;
    margin: auto;
    animation: anim2 30s ease-in-out infinite;
    transition: 1s;

    @keyframes anim2 {
      0%,
      100% {
        border-radius: 40% 70% 70% 40% / 40% 52% 48% 70%;
      }

      10% {
        border-radius: 50% 50% 40% 80% / 35% 80% 40% 75%;
      }

      20% {
        border-radius: 67% 33% 47% 53% / 37% 30% 80% 63%;
      }

      30% {
        border-radius: 39% 61% 47% 53% / 47% 40% 60% 63%;
      }

      40% {
        border-radius: 39% 61% 72% 28% / 74% 50% 60% 36%;
      }

      50% {
        border-radius: 100%;
      }

      60% {
        border-radius: 50% 50% 53% 47% / 72% 69% 31% 28%;
      }

      70% {
        border-radius: 50% 50% 53% 47% / 26% 22% 78% 74%;
      }

      80% {
        border-radius: 50% 50% 53% 47% / 26% 69% 31% 74%;
      }

      90% {
        border-radius: 20% 80% 20% 80% / 20% 80% 20% 80%;
      }
    }
  }
`;
