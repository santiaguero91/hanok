import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const LogInDiv = styled(motion.div)`
  width: fit-content;
  color: #354a21;
  background-color: white;
  border: 1px solid white;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  z-index: 500;
  transition: 1s;
  font-weight: 500;
  font-size: 20px;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  :hover {
    background-color: white;
    color: #354a21;
  }
`;

export const MainLandingDiv = styled(motion.div)`
  color: rgba(188, 188, 188);
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  .photo1 {
    border-radius: 5px;

    position: relative;
    top: 10%;
    right: 10%;
    width: 60%;
    @media (max-width: 430px) {
      width: 150%;
    }
  }
  .photo2 {
    border-radius: 5px;

    position: relative;
    bottom: -25%;
    left: 100%;
    width: 70%;
    @media (max-width: 430px) {
      width: 150%;
      bottom: -45%;
      left: 100%;
    }
  }
  .photo3 {
    border-radius: 5px;

    position: relative;
    bottom: -50%;
    left: 0%;
    width: 60%;
    @media (max-width: 430px) {
      width: 100%;
      bottom: -15%;
      left: 0%;
    }
  }
  .photo5 {
    border-radius: 5px;

    position: relative;
    top: -60%;
    left: 130%;
    width: 70%;
    @media (max-width: 430px) {
      top: 35%;
      left: 0%;
      width: 150%;
    }
  }
  .photo6 {
    border-radius: 5px;

    position: relative;
    top: 30%;
    left: 40%;
    width: 100%;
    @media (max-width: 430px) {
      top: 30%;
      left: 40%;
      width: 200%;
    }
  }
  .photo7 {
    border-radius: 5px;

    position: relative;
    top: 20%;
    left: -140%;
    width: 66%;
    @media (max-width: 430px) {
      top: 20%;
      left: -140%;
      width: 100%;
    }
  }
  .photo8 {
    border-radius: 5px;
    position: relative;
    bottom: 10%;
    right: 80%;
    width: 60%;
    @media (max-width: 430px) {
      border: 1px solid blue;
      bottom: -30%;
      left: 75%;
      width: 170%;
    }
  }
`;
