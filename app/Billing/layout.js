"use client";

import React from "react";

import "@/src/assets/style/globals.css";
import "@/src/assets/style/app.css";
import { Inter } from "next/font/google";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import Sidebar from "@/src/layout/Sidebar";
import Header from "@/src/layout/Header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [drawerWidth, setDrawerWidth] = React.useState(360);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header
        drawerWidth={drawerWidth}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        title="Billing"
      />
      <Sidebar
        drawerWidth={drawerWidth}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        id="2"
      />
      {children}
    </Box>
  );
}
