import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";

import styled from "@emotion/styled";
import { useMediaQuery } from "@mui/material";

const cardIconStyle = {
  width: "49px",
  height: "49px",
  backgroundColor: "red",
};

const CardIcon = styled.div`
  width: 49px;
  height: 49px;
  background-color: rgba(0, 82, 255, 0.1);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  font-size: 0px;
`;

export default function IconCard({ count, title, icon }) {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  return (
    <Card
      sx={{
        padding: "30px",
        width: isSmallScreen ? "164px" : "240px",
        height: "160px",
        margin: isSmallScreen ? "5px" : "16px",
        border: "1px solid #EEE",
        borderRadius: "4px",
        boxShadow: "none  "
      }}
    >
      <CardIcon>
        <Image src={icon} width={26} height={26} objectFit="cover" alt="cardimage" />
      </CardIcon>
      <CardContent sx={{ padding: "0px" }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            textAlign: "center",
            fontSize: "17px",
            fontWeight: "600",
            lineHeight:"1.334",
            margin: "7px 0px",
            color: "#252525"
          }}
        >
          {count}
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            textAlign: "center",
            lineHeight: "1.5",
            letterSpacing: "0",
            margin: "0px",
          }}
        >
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}
