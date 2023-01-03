import Grid from "@mui/material/Unstable_Grid2"; // renaming

const PageWrapper = ({ children }) => {
  return (
    <Grid container style={{ marginBottom: "5rem" }}>
      {children}
    </Grid>
  );
};

export default PageWrapper;
