import { Outlet, NavLink } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2"; // renaming
import "../styles.css";
import { cardClasses } from "@mui/material";

const Header = () => {
  return (
    <Grid
      container
      alignItems={"flex-end"}
      style={{
        marginTop: "2rem",
        marginBottom: "1rem",
        paddingBottom: "1rem",
        borderBottom: "dashed var(--grey-color)",
        borderWidth: "1px",
      }}
    >
      {/* home link */}
      <Grid md={4} xs={12} container>
        <Grid
          xs={2}
          container
          alignItems="center"
          style={{ marginRight: "1rem" }}
        >
          <img
            src="/resources/imgs/me-stylized1.jpeg"
            style={{
              maxWidth: "100%",
              borderRadius: "50%",
            }}
          />
        </Grid>
        <Grid>
          <NavLink className="navLink" to={``}>
            Vincent
            <br />
            <b>VERCRUYSSEN</b>
          </NavLink>
        </Grid>
      </Grid>
      {/* other links */}
      <Grid md={8} xs={12} container justifyContent="flex-end">
        <Grid md="auto" xs={12} style={{ paddingRight: "2rem" }}>
          <NavLink className="navLink" to={`about`}>
            <i className={"fa fa-angle-right arrowIcon"} />
            About me
          </NavLink>
        </Grid>
        <Grid md="auto" xs={12} style={{ paddingRight: "2rem" }}>
          <NavLink className="navLink" to={`projects`}>
            <i className={"fa fa-angle-right arrowIcon"} />
            Projects
          </NavLink>
        </Grid>
        <Grid md="auto" xs={12} style={{ paddingRight: "2rem" }}>
          <NavLink className="navLink" to={`blog`}>
            <i className={"fa fa-angle-right arrowIcon"} />
            Blog
          </NavLink>
        </Grid>
        <Grid md="auto" xs={12}>
          <NavLink className="navLink" to={`publications`}>
            <i className={"fa fa-angle-right arrowIcon"} />
            Publications
          </NavLink>
        </Grid>
      </Grid>
    </Grid>
  );
};

const Root = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container
      style={{
        maxWidth: "750px",
        position: "relative",
        minHeight: "97vh",
      }}
    >
      <div style={{ paddingBottom: "2.5rem" }}>
        <Header />
        <Outlet />
      </div>
      <div>
        <footer
          style={{
            position: "absolute",
            bottom: 0,
            height: "2.5rem",
            width: "100%",
          }}
        >
          &copy; Copyright {currentYear} <b>Vincent Vercruyssen</b> - made with{" "}
          <a href="https://reactjs.org/">
            <b>REACT</b>
          </a>{" "}
          and{" "}
          <a href="https://mui.com/">
            <b>MATERIAL UI</b>
          </a>
        </footer>
      </div>
    </Container>
  );
};

export default Root;
