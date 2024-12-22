"use client";
import { Alert, Box, Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers";

const AddCoupon = () => {
  const [alert, setAlert] = useState("");
  const [alertClose, setAlertClose] = useState(true);
  const [category, setCategory] = useState({
    title: "",
    code: "",
    validFrom: "",
    validUntil: "",
  });
  const [formError, setFormError] = useState({
    title: "",
    code: "",
    validFrom: "",
    validUntil: "",
  });

  const onChange = (e) => {
    setCategory({
      ...category,
      [e.target.name]: e.target.value,
    });
    setFormError({
      ...formError,
      [e.target.name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newFormError = { ...formError };
    let isValid = true;

    if (category.name.trim() === "") {
      newFormError.name = "Category name is required";
      isValid = false;
    }

    if (isValid) {
      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_API_ENDPOINT}/Category/addCategory`,
          { name: category.name }
        );
        if (res.status === 201) {
          setAlert("Coupon Created Successfully");
          setAlertClose(false);
          setCategory({ name: "" });
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setFormError(newFormError);
    }
  };
  return (
    <div className="w-[95%] md:w-full mx-auto ">
      {!alertClose && (
        <Alert
          className="mb-3"
          severity="success"
          onClose={() => {
            setAlertClose(true);
          }}
        >
          Coupon Added Successfully
        </Alert>
      )}
      <h2 className="text-xl font-bold text-secondary">Add Coupon</h2>
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
            <label className="mb-1 ">
              Coupon Name<span className="text-red-500 select-none"> *</span>
            </label>
            <TextField
              fullWidth
              size="small"
              value={category.name}
              name="name"
              onChange={onChange}
              required
            />
            {formError.name && (
              <span className="text-red-500">{formError.name}</span>
            )}
          </div>
          <div>
            <label className="block">Valid From</label>
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DatePicker slotProps={{ textField: { size: "small" } }} />
              <TimePicker slotProps={{ textField: { size: "small" } }} />
            </LocalizationProvider>
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

export default AddCoupon;
