import Grid from "@mui/material/Unstable_Grid2"; // renaming
import ReactMarkdown from "react-markdown";

import "../styles.css";

const Wrapper = ({ title, children, ...props }) => {
  console.log(props);
  return (
    <Grid
      xs={12}
      {...props}
      style={{ marginBottom: "1rem", textAlign: "justify" }}
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

export const MarkdownSection = ({ title, children, ...props }) => {
  return (
    <Wrapper title={title} props={props}>
      <ReactMarkdown>{children}</ReactMarkdown>
    </Wrapper>
  );
};

export const Section = ({ title, children, ...props }) => {
  return (
    <Wrapper title={title} props={props}>
      {children}
    </Wrapper>
  );
};
