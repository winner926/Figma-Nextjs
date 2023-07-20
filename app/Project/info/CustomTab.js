import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, Grid, Input, TextField } from "@mui/material";
import Pageinfo from "./Pageinfo";
import Contents from "./Contents";
import Messages from "./Messages";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ padding: "24px 0px" }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function CustomTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", marginTop: "24px", padding: "0px 10px" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{ fontSize: "18px" }}
        >
          <Tab label="Info" {...a11yProps(0)} className="custom-tab" />
          <Tab label="Messages" {...a11yProps(1)} className="custom-tab" />
          <Tab label="Contents" {...a11yProps(2)} className="custom-tab" />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0} style={{ padding: "0px" }}>
        <Pageinfo />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1} sx={{ padding: "0px" }}>
        <Messages />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Contents />
      </CustomTabPanel>
    </Box>
  );
}
