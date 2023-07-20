"use client";
import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import IconCard from "@/app/Usage/IconCard";

import emailIcon from "@/src/assets/image/content_icon.png";
import projectIcon from "@/src/assets/image/content_icon.png";
import contentIcon from "@/src/assets/image/content_icon.png";

import styled from "@emotion/styled";
import { useMediaQuery } from "@mui/material";

const Title = styled.h1`
  color: #1C1C1C;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.72px;
`;

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
          padding: isSmallScreen ? "15px" : "40px",
        }}
      >
        <Title>Total</Title>
        <Grid
          container
          spacing={1}
          sx={{ margin: isSmallScreen ? "auto" : "0px 0px" }}
        >
          <IconCard count={1500} title="Total Messages" icon={emailIcon} />
          <IconCard count={368} title="Total Projects" icon={projectIcon} />
          <IconCard count={15} title="Total Contents" icon={contentIcon} />
        </Grid>
        <Title>For this month</Title>
        <Grid
          container
          spacing={1}
          sx={{ margin: isSmallScreen ? "auto" : "0px 0px" }}
        >
          <IconCard count={1500} title="Total Messages" icon={emailIcon} />
          <IconCard count={368} title="Total Projects" icon={projectIcon} />
          <IconCard count={15} title="Total Contents" icon={contentIcon} />
        </Grid>
      </Box>
    </>
  );
}

Page.propTypes = {
  window: PropTypes.func,
};

export default Page;
