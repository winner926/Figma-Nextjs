"use client";
import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import styled from "@emotion/styled";
import { useMediaQuery } from "@mui/material";

function Page() {
  const [drawerWidth, setDrawerWidth] = React.useState(360);
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  const Title = styled.h3`
    font-size: 20px;
    font-weight: 400;
    color: #7a7e8f;
    margin: 20px 0px 5px 0px;
  `;
  const TextInput = styled.input`
    width: 100%;
    height: 64px;
    border: 1px solid #e1e3eb;
    border-radius: 6px;
    font-size: 18px;
    padding: 12px;
  `;
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
        <Title>Your name</Title>
        <TextInput/>
        <Title>Email</Title>
        <TextInput/>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Button
            variant="text"
            sx={{
              fontSize: isSmallScreen ? "17px" : "20px",
              fontWeight: "600",
              padding: "20px",
              marginTop: "30px",
              color: "#14151A",
              display: isSmallScreen ? "none" : "block",
              borderRadius: "6px",
              width: "160px",
              marginRight: "16px",
              textTransform: "none"
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{
              width: isSmallScreen ? "100%" : "fit-content",
              fontSize: isSmallScreen ? "17px" : "20px",
              fontWeight: "600",
              backgroundColor: "#2745FA",
              padding: "20px",
              borderRadius: "6px",
              marginTop: "30px",
              width: "160px",
              textTransform: "none"
            }}
          >
            Save
          </Button>
        </div>
      </Box>
    </>
  );
}

Page.propTypes = {
  window: PropTypes.func,
};

export default Page;
