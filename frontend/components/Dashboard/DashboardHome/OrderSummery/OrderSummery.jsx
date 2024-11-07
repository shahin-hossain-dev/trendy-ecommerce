import * as React from "react";
import Box from "@mui/material/Box";
import OrderSummeryCard from "./OrderSummeryCard";

const OrderSummery = () => {
  return (
    <section>
      <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <OrderSummeryCard />
        <OrderSummeryCard />
        <OrderSummeryCard />
        <OrderSummeryCard />
      </Box>
    </section>
  );
};

export default OrderSummery;
