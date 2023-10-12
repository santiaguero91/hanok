import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { Colors } from "../../../../utils/Colors";

export const MainDiv = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: ${Colors.sectionsBackground};
  margin: 0 0 0 0;
`;

export const RowDiv = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: black;
  align-items: center;
  margin: 3% 10%;
  border-radius: 10px;
  background-color: ${Colors.sectionsBackground};
  gap: 5%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  z-index: 4;
  img {
    max-width: 50%;
    width: 25%;
    height: 25%;
    border-radius: 999px;
    border: 2px solid black;
    margin: auto;
    animation: anim2 30s ease-in-out infinite;
    transition: 1s;
    scale: 0.5;

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
