import React from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import RTDP from "./GDPR_contents/RTDP";
import RTBI from "./GDPR_contents/RTBI";
import ROA from "./GDPR_contents/ROA";
import General from "./GDPR_contents/General";
import Consent from "./GDPR_contents/Consent";



const GDPR = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="GDPR_main">
      <Box sx={{ display: "flex", height: "100%" }}>
        <Box sx={{ width: 200 }}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="vertical tabs example"
          >
            <Tab label="General" />
            <Tab label="Right to Data Portability" />
            <Tab label="Right of access" />
            <Tab label="Right to be informed" />
            <Tab label="Consent" />
          </Tabs>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <TabPanel value={value} index={0}>
            <General />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <RTDP />
          </TabPanel>
          <TabPanel value={value} index={2}>
           <ROA />
          </TabPanel>
          <TabPanel value={value} index={3}>
           <RTBI />
          </TabPanel>
          <TabPanel value={value} index={4}>
           <Consent />
          </TabPanel>
        </Box>
      </Box>
    </div>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tabpanel-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default GDPR;
