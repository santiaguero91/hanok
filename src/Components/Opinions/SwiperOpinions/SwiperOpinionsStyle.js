import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { Colors } from "../../../utils/Colors";

export const MainDiv = styled(Box)`
  max-width: 80vw;
  display: flex;
  flex-direction: column;
  color: black;
  align-items: center;
  margin: 0 auto;
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background-color: ${Colors.sectionsBackground};
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }

`;
