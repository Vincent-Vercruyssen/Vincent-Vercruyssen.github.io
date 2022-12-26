import { useEffect, useState } from "react";
import reactMarkdown from "react-markdown";
import Grid from "@mui/material/Unstable_Grid2"; // renaming
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function ProjectPage() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("resources/markdown/projects.md")
      .then((response) => response.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <Grid style={{ textAlign: "justify" }}>
      <ReactMarkdown children={content} />
    </Grid>
  );
}
