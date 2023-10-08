import styled from "@emotion/styled";
import { Box} from "@mui/material";
import { Colors } from "../../../utils/Colors";

export const MainDiv = styled(Box)`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: ${Colors.sectionsBackground};
  color: black;
  align-items: center;
  margin: 0 auto;

  .swiper {
/*   width: 100%;
  height: 100%; */
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background-color: ${Colors.sectionsBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

/* .swiper-slide img {
  display: block;
  object-fit: cover;
} */
`;


