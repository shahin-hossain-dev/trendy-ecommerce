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
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Rating,
  Select,
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

function createData(image, name, stock, price, category, action) {
  return { image, name, stock, price, category, action };
}

const rows = [
  createData("Frozen yoghurt", "T-Shirt", "In Stock", "Completed", 5),
  createData(
    "Ice cream sandwich",
    "Men Shirt                                  ",
    "Stock Out",
    "Processing",
    4
  ),
  createData("Eclair", "Women Shirt", "In Stock", "Canceled", 3),
  createData("Cupcake", "Pant", "Stock Out", "Completed", 4),
  createData("Gingerbread", "Men Jacket", "Stock Out", "Processing", 5),
  createData("Gingerbread", "Women Jacket", "In Stock", "Completed", 5),
];

const RecentProduct = () => {
  const [duration, setDuration] = useState("");

  const handleChange = (event) => {
    setDuration(event.target.value);
  };
  return (
    <div className="mt-6 w-full static bg-white border rounded-md  shadow-[0_0px_5px_0px_rgba(0,0,0,0.3)]">
      {/* header */}
      <div className="flex justify-between items-center px-6 py-2 border-b">
        <h3 className="text-xl font-bold text-secondary">Recent Product</h3>
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
          className="!rounded-none"
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
                  className="font-semibold text-xl border-r border-white"
                >
                  Image
                </StyledTableCell>
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
                  Stock
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  className="font-semibold text-xl border-r border-white"
                >
                  Price
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  className="font-semibold text-xl border-r border-white"
                >
                  Action
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  className="font-semibold text-xl border-r border-white"
                >
                  Category
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, idx) => (
                <StyledTableRow key={row.image}>
                  <StyledTableCell
                    // component="th"
                    // scope="row"
                    align="left"
                    className="border-r border-r-gray-200 "
                  >
                    <span className="font-medium text-dash-primary">Image</span>
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    className="border-r border-r-gray-200"
                  >
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    className="border-r border-r-gray-200"
                  >
                    {row.stock}
                  </StyledTableCell>

                  <StyledTableCell align="center">{row.price}</StyledTableCell>
                  <StyledTableCell align="center">
                    {row.category}
                  </StyledTableCell>

                  <StyledTableCell align="center">
                    <FormControl sx={{ m: 1 }} size="small">
                      <Select
                        id="demo-select-small"
                        className="text-white text-xl appearance-none font-medium outline-0 border-0 rounded-lg bg-dash-primary"
                        sx={{
                          ".MuiSvgIcon-root ": {
                            fill: "white !important",
                          },
                          color: "white",
                          "& .MuiSelect-select": {
                            paddingRight: 2,
                            paddingLeft: 2,
                            paddingTop: 0.5,
                            paddingBottom: 0.5,
                          },
                        }}
                        displayEmpty
                      >
                        <MenuItem value="" className="font-medium">
                          Option
                        </MenuItem>
                        <MenuItem value="" className="font-medium">
                          <button>Edit</button>
                        </MenuItem>

                        <MenuItem value={"Last Week"} className="font-medium">
                          <button>Delete</button>
                        </MenuItem>
                      </Select>
                    </FormControl>
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

export default RecentProduct;
