import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const MainDiv = styled(Box)`
  max-width: 100vw;
  width: 35vw;
  display: flex;
  flex-direction: row;
  background-color: rgba(255, 255, 255);
  color: black;
  align-items: center;
  justify-content: center;
  margin: 0 auto 0 auto;
  @media (max-width: 450px) {
    width: 60vw;
    }
  .swiper {
  width: 100%;
  height: 100%;

}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0;
}


`;