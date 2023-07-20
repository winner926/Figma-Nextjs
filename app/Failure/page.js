"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea } from "@mui/material";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import Link from "next/link";

export default function Failure() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card
        sx={{
          padding: "48px 0px",
        }}
        className="congrate"
      >
        <Box
          className="custom-congrate"
          sx={{
            margin: "auto",
            width: "683px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              width: 109,
              height: 109,
              backgroundColor: "rgba(255, 0, 0, 0.07)",
              borderRadius: 100,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <WarningAmberRoundedIcon
              sx={{
                width: 56,
                height: 56,
                color: "#F00",
              }}
            />
          </Box>
          <h1 style={{ fontSize: "28px", marginTop: "38px" }}>
            Failure Detected
          </h1>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: 18,
              width: "70%",
              margin: "18px 0px",
              textAlign: "center",
              color: "#767676",
            }}
          >
            Project Discrioption here Dummy Text Here we will place for now.
            Loream Espume Dummy Text Here we will place for now.
          </Typography>
          <Link href="/Project">
            <Button
              color="error"
              sx={{
                padding: "8px 36px",
                marginTop: "30px",
                backgroundColor: "rgba(255, 0, 0, 0.07)",
              }}
            >
              Home
            </Button>
          </Link>
        </Box>
      </Card>
    </Box>
  );
}
