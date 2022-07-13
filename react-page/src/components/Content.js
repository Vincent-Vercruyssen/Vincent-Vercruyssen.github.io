// Author: Vincent Vercruyssen
// Year:   2021

import { useState } from "react";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import Publications from "./Publications";
import Projects from "./Projects";
import Academics from "./Academics";
import Curriculum from "./Curriculum";
import { useStyles } from "../styling/styles";

// ----------------------------------------
// Content
// ----------------------------------------

const Content = () => {
  // hooks
  const classes = useStyles();

  // state
  const [selectedTab, setSelectedTab] = useState(0);

  // change state
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div className={classes.content}>
      {/* navigation */}
      <div className={classes.tabPanel}>
        <Tabs
          value={selectedTab}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
        >
          <Tab label="Publications" />
          <Tab label="Projects" />
          <Tab label="Academics" />
          <Tab label="Curriculum" />
        </Tabs>
      </div>
      {/* content */}
      {selectedTab === 0 ? (
        <Publications />
      ) : selectedTab === 1 ? (
        <Projects />
      ) : selectedTab === 2 ? (
        <Academics />
      ) : (
        <Curriculum />
      )}
    </div>
  );
};

export default Content;
