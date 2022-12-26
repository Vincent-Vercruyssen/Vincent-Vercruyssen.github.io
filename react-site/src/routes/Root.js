import { Outlet, NavLink } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2"; // renaming

const Header = () => {
  return (
    <Grid container spacing={2}>
      {/* home link */}
      <Grid md={4}>
        <Grid>
          <NavLink to={``}>Home</NavLink>
        </Grid>
      </Grid>
      {/* other links */}
      <Grid md display="flex" justifyContent="flex-end">
        <Grid>
          <NavLink to={`about`}>About me</NavLink>
        </Grid>
        <Grid>
          <NavLink to={`projects`}>Projects</NavLink>
        </Grid>
        <Grid>
          <NavLink to={`blog`}>Blog</NavLink>
        </Grid>
        <Grid>
          <NavLink to={`publications`}>Publications</NavLink>
        </Grid>
      </Grid>
    </Grid>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ position: "fixed", bottom: 0 }}>
      <div>
        &copy; Copyright {currentYear}, Vincent Vercruyssen - Made with REACT &
        MATERIAL UI
      </div>
    </footer>
  );
};

export default function Root() {
  // TODO: background color for the whole page
  return (
    <Container style={{ maxWidth: "700px" }}>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
}
