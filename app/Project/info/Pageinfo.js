import React, { useState } from "react";
import { Box, Button, Grid, IconButton, Input, TextField } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
const Pageinfo = () => {
  const init =
    "This is the test. This is the test. This is the test. This is the test. This is the test. This is the test. This is the test. This This is the test. This is the test. This is the test. This is the test. This is the test. This is the test. This is the test. is the test. This is the test.";
  const [codesnip, setCodesnip] = useState(init);

  const handleChange = (e) => setCodesnip(e.target.value);

  return (
    <>
      <Grid container>
        <Grid item xs={12} md={8}>
          <h3
            style={{
              color: "#14151A",
              fontSize: "20px",
              padding: "16px 0px",
            }}
          >
            Add Website Domain
          </h3>
          <div className="form-group">
            <Input className="text-input" placeholder="www.example@gmail.com" />
            <Button variant="contained" className="btn-primary">
              Add
            </Button>
          </div>
        </Grid>
      </Grid>

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <InfoOutlinedIcon sx={{ color: "#14151A" }} />
        <p style={{ marginLeft: "12px" }}>
          Copy the chatbot embeddable code below, and paste it into your
          website's HTML code to integrate the chatbot.
        </p>
      </Box>

      <Grid container sx={{ margin: "16px 0px" }}>
        <Grid item xs={12} md={8}>
          <div className="card-header">
            <h3>Python</h3>
            <div>
              <IconButton
                sx={{
                  borderRadius: "10px",
                  fontSize: "18px",
                  color: "#2745FA",
                }}
              >
                <ContentCopyOutlinedIcon />
                &nbsp; Copy
              </IconButton>
            </div>
          </div>
          <div className="card-body">
            <textarea
              className="code-snip"
              value={codesnip}
              onChange={handleChange}
            />
          </div>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} md={8}>
          <h3
            style={{
              color: "#14151A",
              fontSize: "20px",
              padding: "16px 0px",
            }}
          >
            Agent
          </h3>
          <div className="form-group">
            <Input className="text-input" placeholder="Agent Test" />
            <Button variant="contained" className="btn-primary">
              Save
            </Button>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Pageinfo;
