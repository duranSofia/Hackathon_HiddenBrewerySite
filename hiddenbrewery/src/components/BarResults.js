import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import BarsList from "./BarsList";
import MyMapComponent from "./Map";
import "./resultsTab.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function Results(props) {
  const [value, setValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log("Bar Results-->", props.bars);
  return (
    <div className="results-section">
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleTabChange}
          aria-label="simple tabs example"
        >
          <Tab label="List" />
          <Tab label="Map" />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <BarsList barsData={props.bars}></BarsList>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div>
          <MyMapComponent
            isMarkerShown
            places={props.bars}
            userCoordinates={props.userCoordinates}
          />
        </div>
      </TabPanel>
    </div>
  );
}
