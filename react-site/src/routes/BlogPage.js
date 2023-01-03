import ReactMarkdown from "react-markdown";
import Section from "../components/Section";
import SectionWrapper from "../components/SectionWrapper";

const BlogPage = () => {
  return (
    <SectionWrapper>
      <Section textAlign="justify">
        <ReactMarkdown>Coming soon... maybe 🤷‍♂️.</ReactMarkdown>
      </Section>
    </SectionWrapper>
  );
};

export default BlogPage;
