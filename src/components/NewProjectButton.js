import React from "react";
import { Grid } from "@mui/material";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import Link from "next/link";

const NewProjectButton = () => {
  return (
    <Grid item xs={12} md={4} sm={6} sx={{ padding: "8px", height: "100%" }}>
      <Link href="/Project/info">
        <div
          className="project-card cursor"
          style={{ justifyContent: "center" }}
        >
          <div className="project-body create-btn">
            <LibraryAddIcon
              sx={{ width: "48px", height: "48px", color: "#2745FA" }}
            />
            <div className="btn">+ Create new project</div>
          </div>
        </div>
      </Link>
    </Grid>
  );
};

export default NewProjectButton;
