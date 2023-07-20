"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea } from "@mui/material";
import CelebrationIcon from "@mui/icons-material/Celebration";
import Link from "next/link";

export default function Congrats() {
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
              backgroundColor: "#EBF1FF",
              borderRadius: 100,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CelebrationIcon
              sx={{
                width: 56,
                height: 56,
                color: "#0052FF",
              }}
            />
          </Box>
          <h1 style={{ fontSize: "28px", marginTop: "38px" }}>
            Congratulations
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
              color="primary"
              variant="contained"
              sx={{
                padding: "8px 36px",
                marginTop: "30px",
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
