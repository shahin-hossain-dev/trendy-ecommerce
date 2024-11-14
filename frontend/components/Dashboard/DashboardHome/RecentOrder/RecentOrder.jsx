"use client";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: theme.palette.common["#2FB261"],
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    // border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const RecentOrder = () => {
  const [duration, setDuration] = useState("");

  const handleChange = (event) => {
    setDuration(event.target.value);
  };
  return (
    <section className="mt-6 bg-white border rounded-md  shadow-[0_0px_5px_0px_rgba(0,0,0,0.3)]">
      {/* header */}
      <div className="flex justify-between items-center px-6 py-2 border-b">
        <h3 className="text-xl font-bold text-secondary">Recent Order</h3>
        <Button className="bg-dash-primary px-3 hover:bg-primary text-white">
          View All
        </Button>
      </div>
      <div>
        <TableContainer
          sx={{ overflow: "auto" }}
          component={Paper}
          className="!rounded-none"
        >
          <Table sx={{ minWidth: 600 }} aria-label="simple table">
            <TableHead className="bg-dash-primary ">
              <TableRow>
                <StyledTableCell
                  align="center"
                  className="font-semibold text-xl border-r border-white"
                >
                  Order
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  className="font-semibold text-xl border-r border-white"
                >
                  Phone
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  className="font-semibold text-xl border-r border-white"
                >
                  Date
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  className="font-semibold text-xl border-r border-white"
                >
                  Status
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  className="font-semibold text-xl "
                >
                  Total
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell
                    component="th"
                    scope="row"
                    className="border-r border-r-gray-200"
                  >
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    className="border-r border-r-gray-200"
                  >
                    {row.calories}
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    className="border-r border-r-gray-200"
                  >
                    {row.fat}
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    className="border-r border-r-gray-200"
                  >
                    {row.carbs}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.protein}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </section>
  );
};

export default RecentOrder;
