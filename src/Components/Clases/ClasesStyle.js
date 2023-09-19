import styled from "@emotion/styled";
import { Box, Typography, TextField, Button, FormLabel } from "@mui/material";
import { Colors } from "../../utils/Colors";

export const MainDiv = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: ${Colors.lightGreyBackground};
  color: black;
  align-items: center;
  margin: 3% 0;
`;