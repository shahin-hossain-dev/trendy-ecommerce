"use client";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, MenuItem } from "@mui/material";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import PdImgUploader from "@/components/Dashboard/Product/PdImgUploader";
import AddProductAttribute from "@/components/Dashboard/Product/AddProductAttribute";

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      {
        color: [],
      },
      { background: [] },
    ],
    [{ size: [] }],

    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
      { script: "super" },
      { script: "sub" },
      { align: [] },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "code-block",
  "align",
  "direction",
  "color",
  "background",
  "script",
  "super",
  "sub",
];

const AddProduct = () => {
  const [categories, setCategories] = useState([]);
  const [value, setValue] = useState("");
  const [productInfo, setProductInfo] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
    category: "",
  });

  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get("/data/categories.json");

      setCategories(res.data);
      // console.log(res.data);
    };
    getCategories();
  }, []);

  const onChange = (e) => {
    setProductInfo({
      ...productInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const product = { ...productInfo, description: value };
  };

  return (
    <div className="w-[95%] md:w-full mx-auto ">
      <h2 className="text-xl font-bold text-secondary">Add Product</h2>
      <div className="text-secondary mt-6 border rounded-md h-full px-4 bg-white py-6 lg:w-full shadow-[0_0px_5px_0px_rgba(0,0,0,0.3)]">
        <Box
          component="form"
          // sx={{ "& .MuiTextField-root": { m: 2 } }}
          noValidate
          autoComplete="off"
          className="space-y-4"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="mb-1 ">Product Title</label>
            <TextField
              id="fullWidth"
              fullWidth
              size="small"
              value={productInfo.name}
              name="name"
              onChange={onChange}
            />
          </div>
          <div className="">
            <label className="mb-1">Product Description</label>
            {/* <TextField
              id="fullWidth"
              fullWidth
              multiline
              rows={6}
              name="description"
              value={productInfo.description}
              placeholder="Start Writing"
              onChange={onChange}
            /> */}

            <ReactQuill
              className="h-[300px] mb-32 lg:mb-16"
              theme="snow"
              value={value}
              onChange={setValue}
              modules={modules}
              formats={formats}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-6 justify-between ">
            <div className="flex-1">
              <label className="mb-1 ">Price</label>
              <TextField
                id="fullWidth"
                fullWidth
                size="small"
                onChange={onChange}
                name="price"
                value={productInfo.price}
              />
            </div>
            <div className="flex-1">
              <label className="mb-1 ">Quantity</label>
              <TextField
                id="fullWidth"
                fullWidth
                size="small"
                onChange={onChange}
                name="quantity"
                value={productInfo.quantity}
              />
            </div>
            <div className="flex-1">
              <label className="mb-1 ">Category</label>
              <TextField
                id="outlined-select-currency"
                select
                defaultValue={"Choose Category"}
                size="small"
                fullWidth
                onChange={onChange}
                name="category"
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
          {/* dynamic attribute  */}
          <AddProductAttribute />
          {/* image uploader */}
          <PdImgUploader />
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
