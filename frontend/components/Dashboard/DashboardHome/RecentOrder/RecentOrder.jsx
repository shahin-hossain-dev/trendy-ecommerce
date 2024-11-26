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
import { Box, Button } from "@mui/material";

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

function createData(name, calories, fat, status, protein) {
  return { name, calories, fat, status, protein };
}

const rows = [
  createData("Frozen yoghurt", "01676446077", "Oct-11-2024", "Completed", 200),
  createData(
    "Ice cream sandwich",
    "01676446077",
    "Oct-11-2024",
    "Processing",
    203
  ),
  createData("Eclair", "01676446077", "Oct-11-2024", "Canceled", 240),
  createData("Cupcake", "01676446077", "Oct-11-2024", "Completed", 250),
  createData("Gingerbread", "01676446077", "Oct-11-2024", "Processing", 230),
];

const RecentOrder = () => {
  const [duration, setDuration] = useState("");

  const handleChange = (event) => {
    setDuration(event.target.value);
  };
  return (
    <div className="mt-6 w-full static bg-white dark:bg-dark-bg border dark:border-[#3d47514d] rounded-md  shadow-[0_0px_5px_0px_rgba(0,0,0,0.3)]">
      {/* header */}
      <div className="flex justify-between items-center px-6 py-2  ">
        <h3 className="text-xl font-bold text-secondary dark:text-dark-color">
          Recent Order
        </h3>
        <Button
          color="primary"
          variant="contained"
          sx={{
            color: "white",
            paddingY: "4px",
            textTransform: "capitalize",
          }}
        >
          View All
        </Button>
      </div>
      <Box
        sx={{
          overflowY: "auto",
        }}
      >
        <TableContainer
          sx={{ width: "100%", overflow: "auto" }}
          component={Paper}
          className="!rounded-none "
        >
          <Table
            sx={{
              minWidth: 600,
            }}
            aria-label="simple table"
          >
            <TableHead className="bg-dash-primary ">
              <TableRow>
                <StyledTableCell
                  align="center"
                  className="font-semibold text-xl border-r border-white dark:border-[#3d47514d]"
                >
                  Order
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  className="font-semibold text-xl border-r border-white dark:border-[#3d47514d]"
                >
                  Phone
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  className="font-semibold text-xl border-r border-white dark:border-[#3d47514d]"
                >
                  Date
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  className="font-semibold text-xl border-r border-white dark:border-[#3d47514d]"
                >
                  Status
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  className="font-semibold text-xl dark:border-[#3d47514d]"
                >
                  Total
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, idx) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell
                    component="th"
                    scope="row"
                    className="border-r dark:border-b-[#3d47514d] dark:bg-dark-bg dark:text-dark-color border-r-gray-200 dark:border-r-[#3d47514d]  "
                  >
                    <span className="font-medium text-dash-primary">
                      <span className="">#00{idx + 1}</span> {row.name}
                    </span>
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    className="border-r dark:border-b-[#3d47514d] dark:bg-dark-bg dark:text-dark-color border-r-gray-200 dark:border-r-[#3d47514d]"
                  >
                    {row.calories}
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    className="border-r dark:border-b-[#3d47514d] dark:bg-dark-bg dark:text-dark-color border-r-gray-200 dark:border-r-[#3d47514d]"
                  >
                    {row.fat}
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    className="border-r dark:border-b-[#3d47514d] dark:bg-dark-bg  border-r-gray-200 dark:border-r-[#3d47514d]"
                  >
                    {row?.status === "Completed" && (
                      <span className="bg-green-200 px-2 py-1 rounded-md">
                        {row.status}
                      </span>
                    )}
                    {row?.status === "Processing" && (
                      <span className="bg-sky-200 px-2 py-1 rounded-md">
                        {row.status}
                      </span>
                    )}
                    {row?.status === "Canceled" && (
                      <span className="bg-red-200 px-2 py-1 rounded-md">
                        {row.status}
                      </span>
                    )}
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    className="dark:bg-dark-bg  dark:border-b-[#3d47514d] dark:text-dark-color"
                  >
                    <span>${row.protein.toFixed(2)}</span>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default RecentOrder;
