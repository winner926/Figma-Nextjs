"use client";
import * as React from "react";
import "../../../src/assets/style/app.css";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Toolbar from "@mui/material/Toolbar";

import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CustomTab from "./CustomTab";

function Page(props) {
  const [drawerWidth, setDrawerWidth] = React.useState(360);

  React.useEffect(() => {
    // console.log(window.theme.breakpoints);
  }, []);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const temp =
    "Lorizzle ipsum dizzle amconsectetizzle adipiscing elit. Lorizzle ipsum dizzle amconsectetizzle adipiscing elit.";

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="custom-nav">
      <Toolbar sx={{ height: "116px" }} />
      <Divider />
      <List>
        {["Projects", "Usage", "Billing", "Account"].map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            sx={{ padding: "0px" }}
            className={index === 0 ? "li-active" : ""}
          >
            <ListItemButton sx={{ padding: "20px 32px" }}>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <InboxIcon sx={{ color: "white", fontSize: "32px" }} />
                ) : (
                  <AccountCircleIcon
                    sx={{ color: "white", fontSize: "32px" }}
                  />
                )}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ fontSize: "20px" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 5,
          marginTop: "117px",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          backgroundColor: "#F7F8FA",
        }}
      >
        <div className="custom-topbar">
          <div>
            <h1 style={{ color: "#14151A", padding: "0px 10px" }}>Sapphire</h1>
            <span style={{ color: "#7A7E8F", padding: "0px 10px" }}>
              You can edit existing projects or create new projects below
            </span>
          </div>
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        </div>
        <CustomTab />
      </Box>
    </>
  );
}

Page.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Page;
