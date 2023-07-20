import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { Button } from "@mui/material";

const ContentItem = ({ content, contentID, setCurrent, removeItem }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "12px 20px",
          background: "white",
          margin: "20px 0px",
          alignItems: "center",
          cursor: "pointer",
          width: "100%",
          color: "GrayText",
        }}
      >
        <div style={{ fontSize: "18px" }}>{content}</div>
        <div>
          <IconButton
            sx={{
              borderRadius: "100%",
              padding: "16px",
              width: "56px",
              height: "56px",
            }}
            onClick={() => setCurrent(contentID)}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            sx={{
              borderRadius: "100%",
              padding: "16px",
              width: "56px",
              height: "56px",
              color: "#F23B3B",
            }}
            onClick={() => removeItem(contentID)}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default ContentItem;
