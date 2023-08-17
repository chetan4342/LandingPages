import React , { useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import styled from "styled-components";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import { Link } from "react-router-dom"; 
import { PersonAddAlt1Outlined } from "@mui/icons-material";


const SideBar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [width, setWidth] = useState("4%");
  const Navbar = [{
    name: "DashBoard",
    redirect : "/DashBoard",
    icon : <DashboardOutlinedIcon sx={{color:"white"}} />
  },
  {
    name: "Add Member",
    redirect: "/tablesec",
    icon: <PersonAddAlt1Outlined sx={{color:"white"}} />
  }
]
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
    setWidth(collapsed ? "250px" : "4%");
  };
  
  return (
    <div>
      <Drawer
        sx={{
          width: width,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            color: "white",
            backgroundColor: "#1c1c24",
            transition: "0.5s",
            width: width,
            boxSizing: "border-box",
            display: "block",
            overflow: "hidden",
            height:"90vh",
            marginTop:"10vh",
          },
        }}
        variant="persistent"
        anchor="left"
        open={true}
      >
        <List>
          {Navbar.map((data) => (
            <Link to={data.redirect} key={data.name}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                 {data.icon}
                </ListItemIcon>
                <ListItemText primary={data.name} sx={{color: "white", textDecoration:"none" }} />
              </ListItemButton>
            </ListItem>
            </Link>
          ))}
        </List>
        <DrawerHeader>
          <IconButton onClick={toggleCollapsed}>
            {collapsed ? (
              <KeyboardDoubleArrowRightIcon sx={{ color: "white" }} />
            ) : (             
              <KeyboardDoubleArrowLeftIcon sx={{ color: "white" }} />
            )}
          </IconButton>
        </DrawerHeader>
      </Drawer>
    </div>
  );
};

export default SideBar;

const DrawerHeader = styled.div`
  position: absolute;
  width: fit-content;
  right: 0;
  bottom: 100px;
  background-color: #3a364d;
`;
