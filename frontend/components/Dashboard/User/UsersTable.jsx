import React, { useState } from "react";
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
import { FaAngleDown } from "react-icons/fa";
import Image from "next/image";

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

const UsersTable = ({ usersData }) => {
  const [showActionBtn, setShowActionBtn] = useState(null);
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
                Name
              </StyledTableCell>
              <StyledTableCell
                align="center"
                className="font-semibold text-xl border-r border-white"
              >
                Email
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
                Action
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {usersData?.map((row, idx) => (
              <StyledTableRow key={row.image}>
                <StyledTableCell
                  align="center"
                  className="border-r border-r-gray-200"
                >
                  {row.name}
                </StyledTableCell>

                <StyledTableCell align="center">{row.email}</StyledTableCell>
                <StyledTableCell align="center">{row.phone}</StyledTableCell>

                <StyledTableCell align="center">
                  <span className="block mx-auto relative">
                    <button
                      onClick={() => setShowActionBtn(row.id)}
                      className="bg-dash-primary active:scale-95 duration-200 text-white px-3 py-1 rounded-md"
                    >
                      <span className="flex items-center gap-1">
                        <span className="">Option</span> <FaAngleDown />
                      </span>
                    </button>
                    <span
                      className={`${
                        row.id === showActionBtn ? "block" : "hidden"
                      } bg-white absolute w-full duration-150 rounded-sm -top-1/2 left-1/2 -translate-x-1/2`}
                    >
                      <button className="px-3 py-1 hover:bg-orange-100 w-full">
                        Edit
                      </button>
                      <button className="px-3 py-1 hover:bg-red-100 w-full">
                        Delete
                      </button>
                    </span>
                  </span>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UsersTable;
