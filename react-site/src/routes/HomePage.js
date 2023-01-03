import { useEffect, useState } from "react";

import Grid from "@mui/material/Unstable_Grid2"; // renaming
import ReactMarkdown from "react-markdown";
import Section from "../components/Section.js";
import SectionWrapper from "../components/SectionWrapper.js";

const HomePage = () => {
  const [content, setContent] = useState("");

  // retrieve introduction from file
  useEffect(() => {
    fetch("resources/markdown/introduction.md")
      .then((response) => response.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <SectionWrapper>
      <Section>
        <Grid container spacing={2}>
          <Grid md={4} xs={12} style={{ paddingTop: "1rem" }}>
            <img
              src="/resources/imgs/me-stylized1.jpeg"
              alt="profile"
              style={{
                maxWidth: "100%",
                borderRadius: "1rem",
              }}
            />
          </Grid>
          <Grid md xs={12} style={{ textAlign: "justify" }}>
            <ReactMarkdown>{content}</ReactMarkdown>
          </Grid>
        </Grid>
      </Section>
    </SectionWrapper>
  );
};

export default HomePage;
