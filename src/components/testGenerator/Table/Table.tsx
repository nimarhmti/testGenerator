import * as React from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Table } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useGetOrders } from "../../../services/PreparingStep/PreparingStep.query";

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
  const { data: orders, isLoading } = useGetOrders();
  if (isLoading) return <p>isLoading...</p>;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">موضوع</TableCell>
            <TableCell align="right">سطح</TableCell>
            <TableCell align="right">نوع آزمون</TableCell>
            <TableCell align="right">مدت زمان (دقیقه)</TableCell>
            <TableCell align="right">جمع نمرات</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((row: any) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right" component="th" scope="row">
                {row.topic.name}
              </TableCell>
              <TableCell align="right">{row.level}</TableCell>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">{row.time}</TableCell>
              <TableCell align="right">{row.max_scoure}</TableCell>
              <TableCell align="right">
                <MoreVertIcon />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
