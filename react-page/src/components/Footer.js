// author: Vincent Vercruyssen
// year: 2021

import Typography from "@material-ui/core/Typography";

import { useStyles } from "../styling/styles";

// ----------------------------------------
// Footer
// ----------------------------------------

const Footer = () => {
  // hooks
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className={classes.footerText}>
        <Typography variant="body2">
          &copy; Copyright 2021, Vincent Vercruyssen - Made with REACT &
          MATERIAL UI
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
