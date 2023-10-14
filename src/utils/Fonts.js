import styled from "@emotion/styled";
import { Typography} from "@mui/material";


4

export const typoh3 = {
  fontFamily: "Plus Jakarta Sans Variable",
};
export const typoh3bold = {
  fontFamily: "Plus Jakarta Sans Variable",
  fontWeight: "bold",
};
export const typoh6 = {
  fontFamily: "Plus Jakarta Sans Variable",
};
export const typoh6bold = {
  fontFamily: "Plus Jakarta Sans Variable",
  fontWeight: "bold",
  cursor: "pointer",
  color: "black",
};
export const navBarBlack = {
  fontFamily: "Plus Jakarta Sans Variable",
  fontWeight: "bold",
  cursor: "pointer",
  color: "black",
};
export const navBarRed = {
  fontFamily: "Plus Jakarta Sans Variable",
  fontWeight: "bold",
  cursor: "pointer",
  color: "rgb(112,121,85)",
};
export const typoh5 = {
  fontFamily: "Plus Jakarta Sans Variable",
  fontSize: "24px",
};
export const typoh5bold = {
  fontFamily: "Plus Jakarta Sans Variable",
  fontWeight: "bold",
  fontSize: "20px",
};
export const typoFooter = {
  fontFamily: "Plus Jakarta Sans Variable",
  fontWeight: "bold",
  fontSize: "20px",
  color: "white",
};





export const Typh3 = styled(Typography)`
  font-family: "Plus Jakarta Sans Variable";
  font-size: 24px;
  @media (max-width: 450px) {
    font-size: 20px;
  }
`;
export const Typh3bold = styled(Typography)`
  font-family: "Plus Jakarta Sans Variable";
  font-size: 40px;
  font-weight: bold;
  z-index: 5;
  color: rgb(110,87,125);
  @media (max-width: 450px) {
    font-size: 30px;
  }
`;

export const Typh6 = styled(Typography)`
  font-family: "Plus Jakarta Sans Variable";
  font-size: 18px;

`;
export const Typh5 = styled(Typography)`
  font-family: "Plus Jakarta Sans Variable";
  font-size: 20px;
  @media (max-width: 450px) {
    font-size: 18px;
  }
`;
export const Typh5bold = styled(Typography)`
  font-family: "Plus Jakarta Sans Variable";
  font-size: 20px;
  font-weight: bold;
  @media (max-width: 450px) {
    font-size: 18px;
  }
`;

export const Typh4bold = styled(Typography)`
  font-family: "Plus Jakarta Sans Variable";
  font-size: 35px;
  font-weight: bold;
  z-index: 5;
  color: rgb(110,87,125);

  @media (max-width: 450px) {
    font-size: 22px;
  }
`;
export const TyphNavBar = styled(Typography)`
  font-family: "Plus Jakarta Sans Variable";
  font-size: 20px;
  font-weight: bold;
  @media (max-width: 1050px) {
    font-size: 18px;
  }
  @media (max-width: 450px) {
    font-size: 16px;
  }
`;