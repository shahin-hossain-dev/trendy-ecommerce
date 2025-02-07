import { styled, alpha } from "@mui/material/styles";
import { FormControl, Icon, InputBase, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { RiSearchLine } from "react-icons/ri";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(0.5, 1, 0.5, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const OrderTableBar = () => {
  const [orderStatus, setOrderStatus] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [showCountItems, setShowCountItems] = useState("");

  const handleOrderStatus = (event) => {
    setOrderStatus(event.target.value);
  };
  const handleDateFilter = (event) => {
    setDateFilter(event.target.value);
  };
  const showCountFilter = (event) => {
    setShowCountItems(event.target.value);
  };

  const handleOrderSearch = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className="flex justify-between gap-6 items-center px-6 py-1 border-b">
      <div className="flex">
        <FormControl sx={{ m: 1 }} size="small">
          <Select
            className="text-white text-lg appearance-none font-medium outline-0 border-0 rounded-lg "
            value={showCountItems}
            onChange={showCountFilter}
            sx={{
              ".MuiSvgIcon-root ": {
                fill: "",
              },
              "& .MuiSelect-select": {
                paddingRight: 2,
                paddingLeft: 2,
                paddingTop: 0.5,
                paddingBottom: 0.5,
              },
            }}
            displayEmpty
          >
            <MenuItem value="">10</MenuItem>

            <MenuItem value={"20"} className="font-medium">
              20
            </MenuItem>
            <MenuItem value={"30"} className="font-medium">
              30
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1 }} size="small">
          <Select
            className="text-white text-lg appearance-none font-medium outline-0 border-0 rounded-lg "
            value={dateFilter}
            onChange={handleDateFilter}
            sx={{
              ".MuiSvgIcon-root ": {
                fill: "",
              },
              "& .MuiSelect-select": {
                paddingRight: 2,
                paddingLeft: 2,
                paddingTop: 0.5,
                paddingBottom: 0.5,
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
              "& .MuiSelect-select": {
                paddingRight: 2,
                paddingLeft: 2,
                paddingTop: 0.5,
                paddingBottom: 0.5,
              },
            }}
            displayEmpty={"Order Status"}

            // IconComponent={(props) =>
            //   props.className.includes("MuiSelect-iconOpen") ? (
            //     <FaAngleUp />
            //   ) : (
            //     <FaAngleDown />
            //   )
            // }
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
      <div>
        <Search className="border border-[#E8E8F2] text-gray-600 rounded-xl md:w-[40%] lg:w-[30%]">
          <SearchIconWrapper>
            <RiSearchLine className="text-secondary" />
          </SearchIconWrapper>
          <StyledInputBase
            onChange={handleOrderSearch}
            placeholder="Result for Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </div>
    </div>
  );
};

export default OrderTableBar;
