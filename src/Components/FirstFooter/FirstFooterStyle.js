import styled from "@emotion/styled";
import { Box, Typography, TextField, Button, FormLabel } from "@mui/material";
import { Colors } from "../../utils/Colors";

export const MainDiv = styled(Box)`
  width: 100dvw;
  display: flex;
  flex-direction: column;
  background-color: rgba(112, 121, 85);
  color: black;
  align-items: center;
  margin:  0 auto 0 auto;
  border: 1px solid red;
`;
export const RowDiv = styled(Box)`
  display: flex;
  width: 50%;
  flex-direction: row;
  justify-content: space-around;
  color: black;
  align-items: center;
  gap: 50%;
  border: 1px solid red;
`;