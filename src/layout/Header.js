import * as React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";

import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import UserMenu from "../components/UserMenu";

const Header = ({ drawerWidth, handleDrawerToggle, title = "Project"}) => {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar className="custom-header">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, color: "black" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            className="logo-title"
          >
            {title}
          </Typography>
          <div className="pull-right" style={{ display: "flex" }}>
            <IconButton
              size="large"
              aria-label="search"
              sx={{ color: "black" }}
            >
              <SearchIcon />
            </IconButton>
            <IconButton
              size="large"
              aria-label="search"
              sx={{ color: "black" }}
            >
              <NotificationsIcon />
            </IconButton>
            <UserMenu />
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
