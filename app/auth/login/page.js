"use client";

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import img2 from "@/public/img2.svg";
import Image from "next/image";
import { Padding } from "@mui/icons-material";
import { Input } from "@mui/material";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" sx={{ width: "100%" }}>
        <CssBaseline />
        <Box
          className="login-form"
          sx={{
            position: "relative",
            margin: "105px auto",
            padding: "29px 98px",
            display: "flex",
            flexDirection: "column",
            width: "625px",
            background: "#FFF",
            borderRadius: "15px",
            border: "1px solid #EEE",
          }}
        >
          <Typography
            component="h1"
            variant="h6"
            sx={{ fontWeight: "600", fontSize: "22px" }}
          >
            Login to your HypeWize account
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{
              mt: 6,
              borderTop: "2px solid #F9F9F9",
              borderBottom: "2px solid #F9F9F9",
              padding: "25px 0px",
              marginTop: "40px",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <h5>Email</h5>
                <TextField
                  required
                  fullWidth
                  id="email"
                  name="email"
                  autoComplete="email"
                  className="custom-input"
                />
              </Grid>
              <Grid item xs={12}>
                <h5>Password</h5>
                <TextField
                  required
                  fullWidth
                  name="password"
                  type="password"
                  id="password"
                  className="custom-input"
                  autoComplete="new-password"
                />
                <Link
                  href="#"
                  className="account_link"
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    fontSize: "14px",
                    color: "#143C69",
                    marginTop: "5px",
                  }}
                >
                  Forget Password?
                </Link>
              </Grid>
            </Grid>
            <Link href="/Project">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  background: "#101D69",
                  textTransform: "none",
                  fontSize: "14px",
                  fontWeight: "700",
                  height: "40px",
                }}
              >
                Login
              </Button>
            </Link>
            <Typography
              component="h1"
              variant="h6"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontSize: "14px",
              }}
              className="sticky_line"
            >
              {" "}
              OR
            </Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                backgroundColor: "#fff",
                color: "#000",
                textTransform: "none",
                fontSize: "14px",
                height: "40px",
                fontWeight: "400",
                margin: "10px 0px",
              }}
            >
              <Image src={img2} width={15} height={15} alt="Google" /> &nbsp;
              Sign in with Google
            </Button>
            <span style={{ fontSize: "12px" }}>
              By Selecting Sign up with Google, you agree to our
              <Link href="#" variant="body2" className="account_link">
                {" "}
                Terms{" "}
              </Link>
              and have read and acknowledge our
              <Link href="#" variant="body2" className="account_link">
                {" "}
                Global Privacy Statement.
              </Link>
            </span>
          </Box>

          <Grid container sx={{ marginTop: 1 }}>
            <Grid item>
              <span style={{ fontSize: "14px" }}>Don't have an account? </span>
              <Link
                href="./signup"
                variant="body2"
                className="account_link"
                sx={{
                  fontSize: "14px",
                  color: "#0052FF",
                }}
              >
                Create an Account
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
