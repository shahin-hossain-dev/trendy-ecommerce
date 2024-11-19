"use client";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, MenuItem } from "@mui/material";
import axios from "axios";

const AddProduct = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get("/data/categories.json");

      setCategories(res.data);
      console.log(res.data);
    };
    getCategories();
  }, []);

  return (
    <div className="w-[95%] md:w-full mx-auto">
      <h2 className="text-xl font-bold text-secondary">Add Product</h2>
      <div className="text-secondary mt-6 border rounded-md h-full px-4 py-6 lg:w-full shadow-[0_0px_5px_0px_rgba(0,0,0,0.3)]">
        <Box
          component="form"
          // sx={{ "& .MuiTextField-root": { m: 2 } }}
          noValidate
          autoComplete="off"
          className="space-y-4"
        >
          <div>
            <label className="mb-1 ">Product Title</label>
            <TextField id="fullWidth" fullWidth size="small" />
          </div>
          <div>
            <label className="mb-1">Product Description</label>
            <TextField
              id="fullWidth"
              fullWidth
              multiline
              rows={6}
              placeholder="Start Writing"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-6 justify-between">
            <div className="flex-1">
              <label className="mb-1 ">Price</label>
              <TextField id="fullWidth" fullWidth size="small" />
            </div>
            <div className="flex-1">
              <label className="mb-1 ">Quantity</label>
              <TextField id="fullWidth" fullWidth size="small" />
            </div>
            <div className="flex-1">
              <label className="mb-1 ">Category</label>
              <TextField
                id="outlined-select-currency"
                select
                defaultValue={"Choose Category"}
                size="small"
                fullWidth
              >
                <MenuItem value="Choose Category" disabled>
                  Choose Category
                </MenuItem>
                {categories.map((option) => (
                  <MenuItem key={option.id} value={option.name}>
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </div>
          <Button
            variant="contained"
            style={{ backgroundColor: "#2FB261" }}
            type="submit"
            className=" text-white"
          >
            Submit
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default AddProduct;
