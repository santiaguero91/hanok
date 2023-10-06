import styled from "@emotion/styled";
import { Box} from "@mui/material";

export const MainDiv = styled(Box)`
  max-width: 100vw;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: rgba(112, 121, 85);
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
  background-color: rgba(112, 121, 85);
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


