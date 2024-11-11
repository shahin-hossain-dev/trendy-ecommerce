"use client";
import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Completed",
    pd: 90,
  },
  {
    name: "Processing",
    pd: 70,
  },
  {
    name: "Pending",
    pd: 50,
  },
  {
    name: "Cancel",
    pd: 20,
  },
  {
    name: "On Hold",
    pd: 65,
  },
];

const OrderStatus = () => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="border rounded-md bg-white shadow-[0_0px_5px_0px_rgba(0,0,0,0.3)]">
      {/* header */}
      <div className="flex justify-between items-center px-6 py-1 border-b">
        <h3 className="text-xl font-bold text-secondary">Order Status</h3>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <Select
            id="demo-select-small"
            className="text-white text-xl appearance-none font-medium outline-0 border-0 rounded-lg bg-dash-primary"
            value={age}
            onChange={handleChange}
            sx={{
              ".MuiSvgIcon-root ": {
                fill: "white !important",
              },
            }}
            displayEmpty
          >
            <MenuItem value=""> Today</MenuItem>

            <MenuItem value={"This Week"} className="font-medium">
              This Week
            </MenuItem>
            <MenuItem value={"This Week"} className="font-medium">
              Last Month
            </MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="mt-6">
        <ResponsiveContainer height={300} width={"100%"}>
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barCategoryGap={16}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              style={{
                fontSize: "14px",
                fontFamily: "Times New Roman",
                padding: "20px",
              }}
            />
            <YAxis />
            <Tooltip />
            {/* <Legend /> */}
            <Bar
              dataKey="pd"
              fill="#2FB261"
              activeBar={<Rectangle fill="#2FB261" stroke="" />}
              radius={10}
              style={{ paddingBottom: "20px" }}
              clipPath="20px"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default OrderStatus;
