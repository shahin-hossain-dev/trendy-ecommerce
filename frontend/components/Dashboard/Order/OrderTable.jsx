import React from "react";
import { styled } from "@mui/material/styles";

import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

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

const OrderTable = ({ productsData }) => {
  return (
    <Box
      sx={{
        overflowY: "auto",
      }}
    >
      <TableContainer
        sx={{ width: "100%", overflow: "auto" }}
        component={Paper}
        className="!rounded-none"
      >
        <Table aria-label="simple table">
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
            {productsData.map((row, idx) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell
                  component="th"
                  scope="row"
                  className="border-r border-r-gray-200 "
                >
                  <span className="font-medium text-dash-primary">
                    <span className="">#00{row.id}</span> {row.name}
                  </span>
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  className="border-r border-r-gray-200"
                >
                  {row?.phone}
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  className="border-r border-r-gray-200"
                >
                  {row?.date}
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  className="border-r border-r-gray-200"
                >
                  {row?.status === "Completed" && (
                    <span className="bg-green-200 px-2 py-1 rounded-md">
                      {row?.status}
                    </span>
                  )}
                  {row?.status === "Processing" && (
                    <span className="bg-sky-200 px-2 py-1 rounded-md">
                      {row?.status}
                    </span>
                  )}
                  {row?.status === "Canceled" && (
                    <span className="bg-red-200 px-2 py-1 rounded-md">
                      {row?.status}
                    </span>
                  )}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <span>${row?.total.toFixed(2)}</span>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default OrderTable;
