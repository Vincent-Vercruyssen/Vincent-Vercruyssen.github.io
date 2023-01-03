import { useEffect, useState } from "react";

import Grid from "@mui/material/Unstable_Grid2"; // renaming
import ReactMarkdown from "react-markdown";
import { Section } from "../components/Section.js";
import PageWrapper from "../components/PageWrapper.js";

import "../styles.css";

const HomePage = () => {
  const [content, setContent] = useState("");

  // retrieve introduction from file
  useEffect(() => {
    fetch("resources/markdown/introduction.md")
      .then((response) => response.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <PageWrapper>
      <Section>
        <Grid container>
          <Grid md={4} xs={12} display="flex">
            <img
              src="/resources/imgs/me-stylized1.jpeg"
              alt="profile"
              className="homeImage"
            />
          </Grid>
          <Grid md xs={12} style={{ textAlign: "justify" }}>
            <ReactMarkdown>{content}</ReactMarkdown>
          </Grid>
        </Grid>
      </Section>
    </PageWrapper>
  );
};

export default HomePage;
