import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import Grid from "@mui/material/Unstable_Grid2"; // renaming

export default function HomePage() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("resources/markdown/introduction.md")
      .then((response) => response.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid md={3} margin="20px">
        <img
          src="/resources/imgs/me-stylized1.jpeg"
          alt="profile"
          style={{ maxWidth: "100%" }}
        />
      </Grid>
      <Grid md style={{ textAlign: "justify" }}>
        {/* <ReactMarkdown children={content} /> */}
        <ReactMarkdown>
          I am a **postdoctoral** researcher at the [DTAI Research
          Lab](https://wms.cs.kuleuven.be/dtai) of the [KU
          Leuven](https://www.kuleuven.be/english/kuleuven/index.html). I am
          building a [spin-off](https://claytech-ai.github.io/) company on
          automating machine learning pipelines.
        </ReactMarkdown>
        <ReactMarkdown>
          My research interests include making Machine Learning and Data Science
          more interactive. I like to solve real-world problems using the
          state-of-the-art algorithmic advances in machine learning, data
          mining, and computer science, if technology is the differentiating
          factor.
        </ReactMarkdown>
      </Grid>
    </Grid>
  );
}
