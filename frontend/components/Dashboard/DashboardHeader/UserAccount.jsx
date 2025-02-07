import { Badge, IconButton, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import {
  MdAccountCircle,
  MdOutlineLogout,
  MdOutlineMail,
} from "react-icons/md";
import { PiWechatLogoLight } from "react-icons/pi";
import { LuUser2 } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { BsCardChecklist } from "react-icons/bs";

const UserAccount = ({
  anchorEl,
  menuId,
  handleProfileMenuOpen,
  setAnchorEl,
}) => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const mobileMenuId = "primary-search-account-menu-mobile";

  return (
    <div>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        id={menuId}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
        className="[&_.MuiMenu-paper]:dark:bg-dark-bg "
        // sx={{ "& .MuiMenu-paper": { backgroundColor: "#000000" } }}
        // sx={{ "& .MuiPaper-root": { backgroundColor: "#000000" } }}
      >
        <MenuItem onClick={handleMenuClose}>
          <span className="flex gap-2 items-center dark:text-dark-color">
            <LuUser2 className="text-xl " /> <span>Profile</span>
          </span>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <span className="flex gap-2 items-center dark:text-dark-color">
            <MdOutlineMail className="text-xl" /> <span>Inbox</span>
          </span>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <span className="flex gap-2 items-center dark:text-dark-color">
            <IoSettingsOutline className="text-xl" /> <span>Setting</span>
          </span>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <span className="flex gap-2 items-center dark:text-dark-color">
            <BiSupport className="text-xl" /> <span>Support</span>
          </span>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <span className="flex gap-2 items-center dark:text-dark-color">
            <BsCardChecklist className="text-xl" /> <span>Task Manager</span>
          </span>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <span className="flex gap-2 items-center dark:text-dark-color">
            <MdOutlineLogout className="text-xl" /> <span>Logout</span>
          </span>
        </MenuItem>
      </Menu>
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <MenuItem>
          <IconButton
            size="medium"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Badge badgeContent={4} color="error">
              <PiWechatLogoLight className="text-secondary" />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem>
          <IconButton
            size="medium"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={17} color="error">
              <IoIosNotificationsOutline />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton
            size="medium"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <MdAccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default UserAccount;
