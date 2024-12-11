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
import { FaAngleDown } from "react-icons/fa6";
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

function createData(image, name, stock, price, category, action) {
  return { image, name, stock, price, category, action };
}

const rows = [
  createData("/img/image.png", "T-Shirt", "In Stock", 40, "Dress"),
  createData("/img/image.png", "Men Shirt ", "Stock Out", 50, "Dress"),
  createData("/img/image.png", "Women Shirt", "In Stock", 30, "Dress"),
  createData("/img/image.png", "Pant", "Stock Out", 50, "T-Shirt"),
  createData("/img/image.png", "Men Jacket", "Stock Out", 40, "Dress"),
  createData("/img/image.png", "Women Jacket", "In Stock", 60, "T-Shirt"),
];

const RecentProduct = () => {
  const [duration, setDuration] = useState("");
  const [showActionBtn, setShowActionBtn] = useState(false);

  const handleChange = (event) => {
    setDuration(event.target.value);
  };
  return (
    <div className="mt-6 w-full static bg-white dark:bg-dark-bg border dark:border-[#3d47514d] rounded-md  shadow-[0_0px_5px_0px_rgba(0,0,0,0.3)]">
      {/* header */}
      <div className="flex justify-between items-center px-6 py-2">
        <h3 className="text-xl font-bold text-secondary dark:text-dark-color">
          Recent Product
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
                  className="font-semibold text-xl border-r border-white dark:border-[#3d47514d]"
                >
                  Image
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  className="font-semibold text-xl border-r border-white dark:border-[#3d47514d]"
                >
                  Name
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  className="font-semibold text-xl border-r border-white dark:border-[#3d47514d]"
                >
                  Stock
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  className="font-semibold text-xl border-r border-white dark:border-[#3d47514d]"
                >
                  Price
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  className="font-semibold text-xl border-r border-white dark:border-[#3d47514d]"
                >
                  Category
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  className="font-semibold text-xl border-r border-white dark:border-[#3d47514d]"
                >
                  Action
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, idx) => (
                <StyledTableRow key={idx}>
                  <StyledTableCell
                    // component="th"
                    // scope="row"
                    align="center"
                    className="border-r dark:bg-dark-bg border-r-gray-200 dark:border-b-[#3d47514d] dark:border-r-[#3d47514d]"
                  >
                    <div className="flex justify-center items-center">
                      <Image
                        src={row.image}
                        height={45}
                        width={45}
                        alt={row.name}
                      />
                    </div>
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    className="border-r dark:text-dark-color dark:bg-dark-bg border-r-gray-200 dark:border-b-[#3d47514d] dark:border-r-[#3d47514d]"
                  >
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    className="border-r dark:bg-dark-bg border-r-gray-200 dark:border-b-[#3d47514d] dark:border-r-[#3d47514d]"
                  >
                    <span
                      className={`font-semibold ${
                        row.stock === "In Stock"
                          ? "text-dash-primary"
                          : "text-rose-600"
                      }`}
                    >
                      {row.stock}
                    </span>
                  </StyledTableCell>

                  <StyledTableCell
                    align="center"
                    className="border-r dark:text-dark-color dark:bg-dark-bg border-r-gray-200 dark:border-b-[#3d47514d] dark:border-r-[#3d47514d]"
                  >
                    ${row?.price.toFixed(2)}
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    className="border-r dark:text-dark-color dark:bg-dark-bg border-r-gray-200 dark:border-b-[#3d47514d] dark:border-r-[#3d47514d]"
                  >
                    ${row?.category}
                  </StyledTableCell>

                  <StyledTableCell
                    align="center"
                    className="dark:bg-dark-bg dark:border-b-[#3d47514d] dark:border-r-[#3d47514d]"
                  >
                    <span className="block mx-auto relative">
                      <button
                        onClick={() => setShowActionBtn(idx)}
                        className="bg-dash-primary active:scale-95 duration-200 text-white px-3 py-1 rounded-md"
                      >
                        <span className="">Option</span>{" "}
                        <FaAngleDown className="inline" />
                      </button>
                      <span
                        className={`${
                          idx === showActionBtn ? "block" : "hidden"
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
    </div>
  );
};

export default RecentProduct;
