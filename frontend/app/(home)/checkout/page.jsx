import { FormControl, OutlinedInput } from "@mui/material";
import React from "react";

const Checkout = () => {
  return (
    <div className="h-[100vh] container mx-auto border mt-4 md:mt-6 lg:mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <form noValidate autoComplete="off">
            <FormControl className="w-full">
              <OutlinedInput placeholder="Enter Your Name" size="small" />
            </FormControl>
          </form>
        </div>
        <div>Details Part</div>
      </div>
    </div>
  );
};

export default Checkout;
