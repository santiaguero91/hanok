import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const MainDiv = styled(Box)`
  display: flex;
  flex-direction: column;
  background-color: rgba(89, 89, 89, 0.15);
  align-items: center;
  padding-top: 12%;
  padding-bottom: 12%;
  color: white;
`;


export const ContactMeDiv = styled(Box)`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10%;
  @media (max-width: 450px) {
    width: auto;

  }
`;
export const ContactRowDiv = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const RowDiv = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 450px) {
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }
  .footerIcon {
    color: white;
    transition: 1s ease-in-out;
    cursor: pointer;
    :hover {
      color: rgb(2, 41, 109);
    }
  }
  .footerletters {
    color: white;
  }
`;

export const FooterIcons = styled(Box)`
  display: flex;
  width: 15%;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 450px) {
    width: 75%;
    justify-content: space-around;
    }
`;
