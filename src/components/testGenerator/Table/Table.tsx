import * as React from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Table } from "@mui/material";

function createData(
  grade: string,
  issues: string,
  numberOfQuestion: number,
  difficulty: string,
  score: number
) {
  return {
    grade,
    issues,
    numberOfQuestion,
    difficulty,
    score,
    id: Math.floor(Math.random() * 100000000),
  };
}

const rows = [
  createData("ابتدایی", "ریاضیات", 15, "متوسط", 20),
  createData("متوسطه اول", "دینی", 10, "آسان", 15),
  createData("ابتدایی", "علوم", 5, "سخت", 5),
  createData("متوسطه دوم", "شیمی", 15, "سخت", 12),
  createData("متوسطه اول", "اجتماعی", 15, "آسان", 15),
];

export const OrderTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">مقطع</TableCell>
            <TableCell align="right">موضوع</TableCell>
            <TableCell align="right">تعداد سوالات</TableCell>
            <TableCell align="right">میزان سختی</TableCell>
            <TableCell align="right">جمع نمرات</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: any) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right" component="th" scope="row">
                {row.grade}
              </TableCell>
              <TableCell align="right">{row.issues}</TableCell>
              <TableCell align="right">{row.numberOfQuestion}</TableCell>
              <TableCell align="right">{row.difficulty}</TableCell>
              <TableCell align="right">{row.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
