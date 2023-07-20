import * as React from "react";
import { Box, Drawer } from "@mui/material";
import Image from "next/image";
import CustomDrawer from "@/src/components/CustomDrawer";

const Sidebar = (props) => {
  const {
    window,
    id,
    mobileOpen,
    setMobileOpen,
    handleDrawerToggle,
    drawerWidth,
  } = props;
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <CustomDrawer id={id} />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          <CustomDrawer id={id} />
        </Drawer>
      </Box>
    </>
  );
};

export default Sidebar;
