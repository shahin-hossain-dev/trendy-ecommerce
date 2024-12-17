"use client";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";

const FeaturesTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabs = [
    { id: 1, label: "Men's Wear" },
    { id: 2, label: "Women's Wear" },
    { id: 3, label: "Kids' Wear" },
    { id: 4, label: "Accessories" },
  ];

  return (
    <div className="w-full mx-auto mt-12">
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Tabs value={value} onChange={handleChange} centered>
          {tabs.map((tab) => (
            <Tab key={tab.id} label={tab.label} />
          ))}
        </Tabs>
        {value === 0 && <div>Tab One</div>}
      </Box>
    </div>
  );
};

export default FeaturesTabs;
