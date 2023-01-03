import { useEffect, useState } from "react";

import { MarkdownSection } from "../components/Section";
import PageWrapper from "../components/PageWrapper";

const ProjectPage = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("resources/markdown/projects.md")
      .then((response) => response.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <PageWrapper>
      <MarkdownSection>{content}</MarkdownSection>
    </PageWrapper>
  );
};

export default ProjectPage;
