// author: Vincent Vercruyssen
// year: 2021

import TitleBar from "./TitleBar";
import Content from "./Content";
import PersonalInfo from "./PersonalInfo";
import Footer from "./Footer";
import { useStyles } from "../styling/styles";

// ----------------------------------------
// App
// ----------------------------------------

const App = () => {
  // hooks
  const classes = useStyles();

  return (
    <div>
      <TitleBar />
      <div className={classes.appContent}>
        <div style={{ flex: 2 }}>
          <PersonalInfo />
        </div>
        <div style={{ flex: 6 }}>
          <Content />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
