"use client";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, MenuItem } from "@mui/material";
import axios from "axios";
import "react-quill/dist/quill.snow.css";
import PdImgUploader from "@/components/Dashboard/Product/PdImgUploader";
import AddProductAttribute from "@/components/Dashboard/Product/AddProductAttribute";
import AddProductDesc from "@/components/Dashboard/Product/AddProductDesc";

const AddProduct = () => {
  const [categories, setCategories] = useState([]);
  const [description, setDescription] = useState("");
  const [attributes, setAttributes] = useState({});
  const [images, setImages] = useState([]);
  const [productInfo, setProductInfo] = useState({
    name: "",
    price: "",
    quantity: "",
    categoryId: "",
  });
  // temporary fetch category
  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get("/data/categories.json");

      setCategories(res.data);
      // console.log(res.data);
    };
    getCategories();
  }, []);

  const fetchCategory = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/Category/search`
      );
      // console.log(res.data);
    } catch (error) {
      console.log("category fetch failed");
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const onChange = (e) => {
    setProductInfo({
      ...productInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", productInfo.name);
    formData.append("desc", description);
    formData.append("price", parseInt(productInfo.price));
    formData.append("json_atribute", JSON.stringify({ attributes }));
    formData.append("categoryId", productInfo.categoryId);
    formData.append("quantity", parseInt(productInfo.quantity));
    formData.append("date", new Date().toISOString());

    images.forEach((image) => {
      formData.append("ProductPicture", image.file);
    });

    console.log([...formData.entries()]);
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/Product/add`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(res.data);

      if (res.status === 201) {
        alert("product added successfully");
      }
    } catch (error) {
      console.log(error.message);
    }
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
            <AddProductDesc
              description={description}
              setDescription={setDescription}
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
                name="categoryId"
              >
                <MenuItem value="Choose Category" disabled>
                  Choose Category
                </MenuItem>
                {categories.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </div>
          {/* dynamic attribute  */}
          <AddProductAttribute
            setAttributes={setAttributes}
            quantity={productInfo.quantity}
          />
          {/* image uploader */}
          <PdImgUploader images={images} setImages={setImages} />
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
