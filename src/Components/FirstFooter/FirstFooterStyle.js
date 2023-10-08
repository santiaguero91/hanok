import styled from "@emotion/styled";
import { Box, Typography, TextField, Button, FormLabel } from "@mui/material";
import { Colors } from "../../utils/Colors";

export const MainDiv = styled(Box)`
  display: flex;
  flex-direction: column;
  background-color: rgba(89,89,89,0.15);
  color: black;
  align-items: center;
  padding-top: 5%;
  padding-bottom: 5%;
`;
export const ColumnDiv = styled(Box)`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  align-items: center;
  margin: 0 auto 0 auto;
`;

export const ContactMeDiv = styled(Box)`
  width: 30%;
  display: flex;
  color: black;
  justify-content: center;
  align-items: center;
  gap: 10%;
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
  color: black;

  .footerIcon {
    color: white;
    transition: 1s ease-in-out;
    cursor: pointer;
    :hover {
      color: rgb(2, 41, 109);
    }
  }
  .footerletters{
    color: white;
  }
`;

export const FooterIcons = styled(Box)`
  display: flex;
  width: 15%;
  justify-content: space-between;
  align-items: center;
`;
