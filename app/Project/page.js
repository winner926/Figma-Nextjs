"use client";
import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import ProjectBox from "@/src/components/ProjectBox";
import Grid from "@mui/material/Grid";
import NewProjectButton from "@/src/components/NewProjectButton";
import Link from "next/link";

function Page() {
  const [drawerWidth, setDrawerWidth] = React.useState(360);
  const temp = "Lorizzle ipsum dizzle amconsectetizzle adipiscing elit. ";

  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 5,
          marginTop: "117px",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          height: "100%",
          backgroundColor: "#F7F8FA",
        }}
      >
        <Grid container spacing={1} sx={{ alignItems: "center" }}>
          <NewProjectButton />
          <ProjectBox
            title="Sapphire"
            content={temp}
            dateinfo="Created 2 days ago"
          />
          <ProjectBox
            title="Sparkle"
            content={temp}
            dateinfo="Created 1 week ago"
          />
          <ProjectBox
            title="Harmony"
            content={temp}
            dateinfo="Created 2 weeks ago"
          />
        </Grid>
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
