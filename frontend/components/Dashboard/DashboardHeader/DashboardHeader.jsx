import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { BiMenuAltLeft } from "react-icons/bi";
import { RiSearchLine } from "react-icons/ri";
import { MdAccountCircle } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { PiWechatLogoLight } from "react-icons/pi";

import { PiMoon } from "react-icons/pi";
import { IoSunnyOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { HandlerContext } from "@/lib/providers/HandlerProvider";
import UserAccount from "./UserAccount";

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
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const DashboardHeader = () => {
  const [isDarkMood, setDarkMood] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { handleDrawerOpen } = React.useContext(HandlerContext);

  // account handler
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const menuId = "primary-search-account-menu";

  return (
    <Box sx={{ flexGrow: 1 }} position="sticky" className="w-full">
      <AppBar position="static" sx={{ backgroundColor: "#FFFFFF" }}>
        <Toolbar>
          <IconButton
            size="medium"
            edge="start"
            // color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={() => handleDrawerOpen(true)}
          >
            <BiMenuAltLeft className="text-secondary" />
          </IconButton>

          <Search className="border border-[#E8E8F2] text-gray-600 rounded-xl md:w-[40%] lg:w-[30%]">
            <SearchIconWrapper>
              <RiSearchLine className="text-secondary" />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Result for Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{ display: { xs: "flex" } }}
            className="gap-[10px] lg:gap-[20px] items-center"
          >
            {isDarkMood ? (
              <IconButton
                size="medium"
                aria-label="show 17 new notifications"
                // color="inherit"
                onClick={() => setDarkMood(!isDarkMood)}
                className="bg-[#F7F8F9]"
              >
                <PiMoon className="text-secondary" />
              </IconButton>
            ) : (
              <IconButton
                size="medium"
                aria-label="show 17 new notifications"
                // color="inherit"
                onClick={() => setDarkMood(!isDarkMood)}
                className="bg-[#F7F8F9]"
              >
                <IoSunnyOutline className="text-secondary" />
              </IconButton>
            )}
            <IconButton
              size="medium"
              aria-label="show 4 new mails"
              className="bg-[#F7F8F9]"
              // color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <PiWechatLogoLight className="text-secondary" />
              </Badge>
            </IconButton>
            <IconButton
              size="medium"
              aria-label="show 17 new notifications"
              className="bg-[#F7F8F9]"
              // color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <IoIosNotificationsOutline className="text-secondary" />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              className="flex gap-2 items-center"
            >
              <MdAccountCircle className="text-secondary" />
              <span className="text-secondary text-lg hidden md:block font-medium">
                Mr. Tanvir
              </span>
              <FaAngleDown className="text-secondary text-lg hidden md:block" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <UserAccount
        menuId={menuId}
        handleProfileMenuOpen={handleProfileMenuOpen}
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
      />
    </Box>
  );
};
export default DashboardHeader;
