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

import checkmark from "@/src/assets/image/checkmark.png";

const CardItemList = styled.div`
  display: flex;
  align-items: center;
  margin: 4px;
`;
const PlanButton = styled.button`
  width: 100%;
  color: #fff;
  font-size: 20px;
  background-color : #2745FA;
  outline: none;
  padding: 20px 48px;
  border-radius: 6px;
  margin-top: 22px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color : #5770ff;
  }
`

export default function PriceCard({ count, title, icon }) {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  return (
    <Card
      sx={{
        padding: "30px",
        width: isSmallScreen ? "90%" : "470px",
        margin: isSmallScreen ? "16px auto" : "40px 24px 24px 24px",

      }}
    >
      <CardContent sx={{ padding: "0px" }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            textAlign: isSmallScreen ? "left" : "center",
            color: "#14151A",
            fontSize: isSmallScreen ? "19px" : "20px",
            fontWeight: "600",
            margin: "7px 0px",
          }}
        >
          Starter Plan
        </Typography>
        <Typography
          sx={{
            fontSize: isSmallScreen ? "32px" : "40px",
            textAlign: isSmallScreen ? "left" : "center",
            margin: "0px",
            fontWeight: "600",
            marginBottom: "30px"
          }}
        >
          $29/mo
        </Typography>
        <CardItemList>
          <Image src={checkmark} width={18} height={18} alt="image"/>
          <p
            style={{
              fontSize: "18px",
              color: "#585B6A",
              margin: "0px 0px 0px 10px",
            }}
          >
            Lorem Ipsum
          </p>
        </CardItemList>
        <CardItemList>
          <Image src={checkmark} width={18} height={18} alt="image"/>
          <p
            style={{
              fontSize: "18px",
              color: "#585B6A",
              margin: "0px 0px 0px 10px",
            }}
          >
            Lorem Ipsum
          </p>
        </CardItemList>
        <CardItemList>
          <Image src={checkmark} width={18} height={18} alt="image"/>
          <p
            style={{
              fontSize: "18px",
              color: "#585B6A",
              margin: "0px 0px 0px 10px",
            }}
          >
            Lorem Ipsum
          </p>
        </CardItemList>
        <CardItemList>
          <Image src={checkmark} width={18} height={18} alt="image"/>
          <p
            style={{
              fontSize: "18px",
              color: "#585B6A",
              margin: "0px 0px 0px 10px",
            }}
          >
            Lorem Ipsum
          </p>
        </CardItemList>
        <CardItemList>
          <Image src={checkmark} width={18} height={18} alt="image"/>
          <p
            style={{
              fontSize: "18px",
              color: "#585B6A",
              margin: "0px 0px 0px 10px",
            }}
          >
            Lorem Ipsum
          </p>
        </CardItemList>
      </CardContent>
      <PlanButton>Manage Plan</PlanButton>
    </Card>
  );
}
