"use client";
import CartCard from "@/components/Cart/CartCard";
import {
  FormControl,
  FormControlLabel,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  const { items } = useSelector((state) => state.cart);
  const [checkoutInfo, setCheckoutInfo] = useState({
    name: "",
    district: "dhaka",
    phone: "",
    email: "",
    address: "",
    payMethod: "Cash",
  });
  const onChange = (e) => {
    setCheckoutInfo({
      ...checkoutInfo,
      [e.target.name]: e.target.value,
      products: [...items],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(checkoutInfo);
  };
  const subTotal = items
    ?.reduce((acc, cur) => acc + parseFloat(cur.price), 0)
    .toFixed(2);
  const total = subTotal + 50;
  return (
    <div className="h-full px-4 container mx-auto  mt-4 md:mt-6 lg:mt-10 mb-12">
      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="text-secondary font-medium">
            <FormControl className="w-full space-y-2 !mb-6">
              <label>
                Name: <span className="text-red-500">*</span>
              </label>
              <TextField
                name="name"
                onChange={onChange}
                placeholder="Enter Your Name"
                size="small"
                required
              />
            </FormControl>
            <div className="flex flex-col lg:flex-row gap-6">
              <FormControl className="w-full space-y-2 !mb-6">
                <label>
                  Phone: <span className="text-red-500">*</span>{" "}
                </label>
                <TextField
                  name="phone"
                  type="number"
                  onChange={onChange}
                  placeholder="Enter Your Phone"
                  size="small"
                  required
                />
              </FormControl>
              <FormControl className="w-full space-y-2 !mb-6">
                <label>
                  Email: <span className="text-red-500">*</span>{" "}
                </label>
                <TextField
                  name="email"
                  type="email"
                  onChange={onChange}
                  placeholder="Enter Your Email"
                  size="small"
                  required
                />
              </FormControl>
            </div>
            <FormControl className="w-full space-y-2 !mb-6">
              <label>
                District: <span className="text-red-500">*</span>{" "}
              </label>
              <Select
                value={checkoutInfo.district}
                name="district"
                onChange={onChange}
                size="small"
              >
                {districts.map((menu) => (
                  <MenuItem key={menu.id} value={menu.value}>
                    {menu.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl className="w-full space-y-2 !mb-6">
              <label>
                Address: <span className="text-red-500">*</span>{" "}
              </label>
              <TextField
                name="address"
                onChange={onChange}
                placeholder="Enter Your Address"
                size="small"
                rows={4}
                multiline
                required
              />
            </FormControl>
            <FormControl className="w-full space-y-2 !mb-6">
              <label>Other Info:</label>
              <TextField
                name="otherInfo"
                onChange={onChange}
                placeholder="Other Information"
                size="small"
                rows={4}
                multiline
              />
            </FormControl>
          </div>
          <div>
            <div className="mb-12 max-h-[400px] overflow-y-auto">
              {items?.map((cart) => (
                <CartCard key={cart._id} cart={cart}></CartCard>
              ))}
            </div>
            <div className=" text-secondary  px-5 py-2 mb-6 flex gap-3 justify-between font-medium">
              <h3>Sub Total:</h3>
              <span className="mr-0.5 font-bold">৳ {subTotal}</span>
            </div>
            <div className=" text-secondary  px-5 py-2 mb-6 flex gap-3 justify-between font-medium">
              <h3>Shipping Charge:</h3>
              <span className="mr-0.5 font-bold">৳ {50}</span>
            </div>

            <div className=" text-secondary border-y-gray-300  border-y px-5 py-2 mb-6 flex gap-3 justify-between font-medium">
              <h3>Total:</h3>
              <span className="mr-0.5 font-bold">
                ৳ {parseFloat(total).toFixed(2)}
              </span>
            </div>
            <div className="border shadow p-5">
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="payMethod"
                  value={checkoutInfo.payMethod}
                  // defaultValue={"Cash"}
                  onChange={onChange}
                >
                  <FormControlLabel
                    value="Cash"
                    control={<Radio />}
                    label="Cash In Delivery"
                  />
                  <div className="flex  items-center">
                    <FormControlLabel
                      value="Bikash"
                      control={<Radio />}
                      label="Bikash"
                    />
                    <img
                      src="/icons/payment-icon/bKash.webp"
                      alt="bikash"
                      className="w-[70px]"
                    />
                  </div>

                  <div className="flex  items-center">
                    <FormControlLabel
                      value="Nagad"
                      control={<Radio />}
                      label="Nagad"
                    />
                    <img
                      src="/icons/payment-icon/nagad.webp"
                      alt="bikash"
                      className="w-[70px]"
                    />
                  </div>

                  <div className="flex  items-center">
                    <FormControlLabel
                      value="Visa_Master"
                      control={<Radio />}
                      label="Visa card/Mastercard"
                    />
                    <img
                      src="/icons/payment-icon/sslcz-verified.webp"
                      alt="bikash"
                      className="w-[70px]"
                    />
                  </div>
                </RadioGroup>
              </FormControl>
              <div className="flex items-center mt-4 mb-4 justify-center gap-6">
                <button
                  type="submit"
                  className="px-10 py-3 w-full text-center font-medium duration-300 border border-gray-300 bg-primary  text-white rounded active:scale-95"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;

const districts = [
  { id: 1, name: "Dhaka", value: "dhaka" },
  { id: 2, name: "Chattogram", value: "chattogram" },
  { id: 3, name: "Khulna", value: "khulna" },
  { id: 4, name: "Sylhet", value: "sylhet" },
  { id: 5, name: "Barishal", value: "barishal" },
  { id: 6, name: "Rangpur", value: "rangpur" },
  { id: 7, name: "Rajshahi", value: "rajshahi" },
  { id: 7, name: "Mymensignh", value: "mymensignh" },
];
