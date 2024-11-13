import { FormControl, Icon, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
const OrderTableBar = () => {
  const [orderStatus, setOrderStatus] = useState("");

  const handleOrderStatus = (event) => {
    setOrderStatus(event.target.value);
  };
  return (
    <div className="flex justify-between items-center px-6 py-1 border-b">
      <h3 className="text-xl font-bold text-secondary">Top Product</h3>
      <div>
        <FormControl sx={{ m: 1 }} size="small">
          <Select
            className="text-white text-lg appearance-none font-medium outline-0 border-0 rounded-lg "
            value={orderStatus}
            onChange={handleOrderStatus}
            sx={{
              ".MuiSvgIcon-root ": {
                fill: "",
              },
            }}
            displayEmpty
          >
            <MenuItem value=""> All Date</MenuItem>

            <MenuItem value={"This Week"} className="font-medium">
              This Week
            </MenuItem>
            <MenuItem value={"This Month"} className="font-medium">
              Last Month
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1 }} size="small">
          <Select
            className="text-white text-lg appearance-none font-medium outline-0 border-0 rounded-lg "
            value={orderStatus}
            onChange={handleOrderStatus}
            sx={{
              ".MuiSvgIcon-root ": {
                fill: "",
              },
            }}
            displayEmpty={"Order Status"}
            IconComponent={(props) =>
              props.className.includes("MuiSelect-iconOpen") ? (
                <FaAngleUp />
              ) : (
                <FaAngleDown />
              )
            }
          >
            <MenuItem value="" disabled>
              {" "}
              Order Status
            </MenuItem>

            <MenuItem value={"Completed"} className="font-medium">
              Completed
            </MenuItem>
            <MenuItem value={"Processing"} className="font-medium">
              Processing
            </MenuItem>
            <MenuItem value={"Canceled"} className="font-medium">
              Canceled
            </MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default OrderTableBar;
