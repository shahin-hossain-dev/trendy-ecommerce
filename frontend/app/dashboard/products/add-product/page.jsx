import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const page = () => {
  return (
    <div>
      <h2 className="text-xl font-bold text-secondary">Add Product</h2>
      <div className="text-secondary mt-6 border rounded-md h-full px-4 py-6 lg:w-full shadow-[0_0px_5px_0px_rgba(0,0,0,0.3)]">
        <form>
          <Box
            component="form"
            // sx={{ "& .MuiTextField-root": { m: 2 } }}
            noValidate
            autoComplete="off"
          >
            <div>
              <label className="mb-1 ">Product Title</label>
              <TextField id="fullWidth" fullWidth size="small" />
            </div>
          </Box>
        </form>
      </div>
    </div>
  );
};

export default page;
