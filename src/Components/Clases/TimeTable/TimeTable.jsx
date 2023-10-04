import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { StyledTable, StyledTableContainer } from "./TimeTableStyle";
import { Typography } from "@mui/material";
import { typoh3bold, typoh5 } from "../../../utils/Fonts";

const TimeTable = () => {
  const rows = [
    { dia: "Lunes", hora: "19:30" },
    { dia: "Martes", hora: "19:00" },
    { dia: "Miercoles", hora: "20:00" },
    { dia: "Jueves", hora: "20:00" },
    { dia: "Viernes", hora: "19:00" },
  ];

  return (
    <StyledTableContainer component={Paper}>
      <StyledTable aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="subtitle1" style={typoh3bold}>Dia</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="subtitle1" style={typoh3bold} >Hora</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.dia}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Typography variant="subtitle2">{row.dia}</Typography>
              </TableCell>
              <TableCell align="center">{row.hora}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </StyledTableContainer>
  );
};

export default TimeTable;
