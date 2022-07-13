// Author: Vincent Vercruyssen
// Year:   2021

import { makeStyles, createTheme } from "@material-ui/core/styles";

// ----------------------------------------
// Theme
// ----------------------------------------

// * styles the full app

export const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#4db6ac", //"#1c657d",
    },
    secondary: {
      main: "#00867d", // "#7fccc4",
    },
  },
  typography: {
    // responsive to the user set fontsize
    htmlFontSize: 18,
    fontFamily: "Menlo, Meslo LG, monaco, sans-serif",
  },
});

// ----------------------------------------
// styling
// ----------------------------------------

//* styles individual parts

export const useStyles = makeStyles((theme) => ({
  // TITLE
  titleBar: {
    backgroundColor: "#00867d", //"#2d3e48",
    padding: theme.spacing(4, 0, 4, 0), // TLBR
  },
  titleBarText: {
    color: "white",
    width: "60vw",
    margin: "auto",
  },
  appContent: {
    width: "60vw",
    margin: "auto",
    display: "flex",
  },
  // PERSONALS
  personalInfo: {
    backgroundColor: "white",
    margin: theme.spacing(4, 2, 0, 0), // TLBR
  },
  profilePic: {
    width: "100%",
    overflow: "hidden",
    borderRadius: 4,
  },
  personalInfoContent: {
    padding: theme.spacing(1),
  },
  profileParagraph: {
    padding: theme.spacing(0, 0, 2, 0),
  },
  // CONTENT
  content: {
    margin: theme.spacing(4, 0, 2, 2), // TLBR
  },
  tabPanel: {
    backgroundColor: "#fafafa",
    color: "#fafafa",
    borderBottom: "5px",
  },
  contentPage: {
    margin: theme.spacing(3, 0, 4, 0),
  },
  publication: {
    margin: theme.spacing(0, 0, 3, 0),
  },
  contentControl: {
    margin: theme.spacing(0, 0, 2, 0),
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  // FOOTER
  footer: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    backgroundColor: "#2d3e48",
    minHeight: "20px",
    marginTop: "auto",
  },
  footerText: {
    color: "white",
    width: "60vw",
    margin: "auto",
    padding: theme.spacing(1, 0, 1, 0),
    display: "flex",
    alignContent: "center",
  },
  // MISC
}));
