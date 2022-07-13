// author: Vincent Vercruyssen
// year: 2021

import Typography from "@material-ui/core/Typography";

import { useStyles } from "../styling/styles";

// ----------------------------------------
// TitleBar
// ----------------------------------------

const TitleBar = () => {
  // hooks
  const classes = useStyles();

  return (
    <div className={classes.titleBar}>
      <div className={classes.titleBarText}>
        <Typography variant="h4" style={{ fontWeight: "bold" }}>
          Vincent Vercruyssen
        </Typography>
        <Typography variant="h5">
          Postdoctoral researcher Artificial Intelligence
        </Typography>
      </div>
    </div>
  );
};

export default TitleBar;
