import styled from "@emotion/styled";
import { Box, Typography, TextField, Button, FormLabel } from "@mui/material";

export const MainDiv = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: rgba(191, 191, 191);
  color: black;
  align-items: center;
  padding: 0.5% 0 0.5% 0;
`;

export const SectionsBtn = styled(Button)`
  background-color: rgba(156,137,184);
  color: black;
  transition: 1s;
  border-radius: 10px;
  margin: 3% auto;
  width: 10vw;

  :hover {
    background-color: rgba(199, 199, 199);
  }
  :focus {
    outline: none;
    border: none;
  }
`;