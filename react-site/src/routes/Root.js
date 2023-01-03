import { Outlet, NavLink } from "react-router-dom";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2"; // renaming

import "../styles.css";

const ArrowLink = ({ to, text, last }) => {
  return (
    <Grid md="auto" xs={12} style={{ paddingRight: last ? "0rem" : "2rem" }}>
      <NavLink className="navLink" to={to}>
        <i className={"fa fa-angle-right clickableArrow"} />
        {text}
      </NavLink>
    </Grid>
  );
};

const Header = () => {
  return (
    <Grid
      container
      alignItems="flex-end"
      className="rootHeader"
      style={{ marginBottom: "1rem" }}
    >
      {/* home link */}
      <Grid md={4} xs={12} container>
        <NavLink className="navLink" to={``}>
          <Grid container>
            <Grid
              xs={2}
              container
              alignItems="center"
              style={{ marginRight: "1rem" }}
            >
              <img
                src="/resources/imgs/me-stylized1.jpeg"
                className="headerImage"
              />
            </Grid>
            <Grid xs>
              Vincent <br /> VERCRUYSSEN
            </Grid>
          </Grid>
        </NavLink>
      </Grid>
      {/* other links */}
      <Grid md={8} xs={12} container justifyContent="flex-end">
        <ArrowLink to={`about`} text="About me" last={false} />
        <ArrowLink to={`projects`} text="Projects" last={false} />
        <ArrowLink to={`blog`} text="Blog" last={false} />
        <ArrowLink to={`publications`} text="Publications" last={true} />
      </Grid>
    </Grid>
  );
};

const Root = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container className="rootContainer" style={{ maxWidth: "750px" }}>
      <div className="rootContent">
        <Header />
        <Outlet />
      </div>
      <footer className="rootFooter">
        &copy; Copyright {currentYear} <b>Vincent Vercruyssen</b> - made with{" "}
        <a href="https://reactjs.org/">
          <b>REACT</b>
        </a>{" "}
        and{" "}
        <a href="https://mui.com/">
          <b>MATERIAL UI</b>
        </a>
      </footer>
    </Container>
  );
};

export default Root;
