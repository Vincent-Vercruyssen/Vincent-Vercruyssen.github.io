import Grid from "@mui/material/Unstable_Grid2"; // renaming
import "../styles.css";

const SectionWrapper = ({ children }) => {
  return (
    <Grid container style={{ marginBottom: "5rem" }}>
      {children}
    </Grid>
  );
};

export default SectionWrapper;
