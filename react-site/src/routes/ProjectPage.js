import { useEffect, useState } from "react";

import ReactMarkdown from "react-markdown";
import Section from "../components/Section";
import SectionWrapper from "../components/SectionWrapper";

const ProjectPage = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("resources/markdown/projects.md")
      .then((response) => response.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <SectionWrapper>
      <Section textAlign="justify">
        <ReactMarkdown>{content}</ReactMarkdown>
      </Section>
    </SectionWrapper>
  );
};

export default ProjectPage;
