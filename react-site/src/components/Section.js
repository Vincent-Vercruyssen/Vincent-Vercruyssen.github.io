import Grid from "@mui/material/Unstable_Grid2"; // renaming
import "../styles.css";

const Section = ({ title, children, ...props }) => {
  return (
    <Grid
      xs={12}
      style={{ marginBottom: "1rem", textAlign: "justify" }}
      {...props}
    >
      {title && (
        <h2 className="sectionTitle">
          <span>{title}</span>
        </h2>
      )}
      {children}
    </Grid>
  );
};

export default Section;
