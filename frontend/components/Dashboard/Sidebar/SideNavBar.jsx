import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Toolbar } from "@mui/material";
import { MdDashboard } from "react-icons/md";
import { FaArrowsSpin, FaUserLarge } from "react-icons/fa6";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { BiSolidCategory } from "react-icons/bi";
import { FaAngleDown, FaStar } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";

export default function SideNavBar() {
  const [open, setOpen] = React.useState(true);
  const pathname = usePathname();
  const router = useRouter();
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  // nav links
  const navItems = [
    {
      id: 1,
      title: "Dashboard",
      href: "/dashboard",
      icon: <MdDashboard />,
    },
    {
      id: 2,
      title: "Order",
      href: "/dashboard/order",
      icon: <FaArrowsSpin />,
      subCat: [],
    },
    {
      id: 3,
      title: "Products",
      href: "/dashboard/products",
      icon: <BsFillBoxSeamFill />,
      subCat: [],
    },
    {
      id: 4,
      title: "Categories",
      href: "/dashboard/categories",
      icon: <BiSolidCategory />,
      subCat: [],
    },
    {
      id: 5,
      title: "User",
      href: "/dashboard/users",
      icon: <FaUserLarge />,
      subCat: [],
    },
    {
      id: 6,
      title: "Rating",
      href: "/dashboard/rating",
      icon: <FaStar />,
      subCat: [],
    },
  ];

  //active route style

  const activeNav = (activePathName) => {
    if (pathname === activePathName) {
      return { color: "#2FB261" };
    } else {
      return { color: "#181818" };
    }
  };

  const drawer = (
    <div>
      <Toolbar>Trendy</Toolbar>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem
            key={item.id}
            disablePadding
            sx={{ borderBottom: "1px solid #EAEAEA" }}
            onClick={() => router.push(item.href)}
          >
            <ListItemButton style={activeNav(item.href)}>
              <ListItemIcon
                style={activeNav(item.href)}
                sx={{
                  fontSize: "18px",
                  justifyContent: "center",
                  rowGap: "20px",
                  color: "#273c75",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.title}
                primaryTypographyProps={{ fontSize: "18px", fontWeight: "600" }}
              />
              {item.subCat && <FaAngleDown />}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", lg: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "calc(100% * 2/ 12)",
          },
        }}
        open={open}
        onClose={toggleDrawer(false)}
      >
        {drawer}
      </Drawer>
      <Drawer
        sx={{
          display: { sm: "block", lg: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 240,
          },
        }}
        variant="temporary"
        open={open}
        onClose={toggleDrawer(false)}
      >
        {drawer}
      </Drawer>
    </div>
  );
}
