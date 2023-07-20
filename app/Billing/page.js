"use client";
import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import PriceCard from "@/app/billing/PriceCard";

import styled from "@emotion/styled";
import { useMediaQuery } from "@mui/material";

function Page() {
  const [drawerWidth, setDrawerWidth] = React.useState(360);
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 5,
          marginTop: "117px",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          height: "calc(100vh - 117px)",
          backgroundColor: "#F7F8FA",
          padding: isSmallScreen ? "15px" : "0px 40px",
        }}
      >
        <Grid
          container
          spacing={1}
          sx={{
            margin: isSmallScreen ? "auto" : "0px 0px",
            flexWrap: "wrap",
            display: isSmallScreen ? "block" : "flex",
          }}
        >
          <PriceCard />
          <PriceCard />
        </Grid>
      </Box>
    </>
  );
}

Page.propTypes = {
  window: PropTypes.func,
};

export default Page;
