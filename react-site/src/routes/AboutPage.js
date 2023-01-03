import { useEffect, useState } from "react";
import _ from "lodash";

import Grid from "@mui/material/Unstable_Grid2"; // renaming
import ReactMarkdown from "react-markdown";
import { Section, MarkdownSection } from "../components/Section";
import PageWrapper from "../components/PageWrapper";
import ClickableBullet from "../components/ClickableBullet";

import "../styles.css";

const CVBullet = ({ cvItem, period }) => {
  const [clicked, setClicked] = useState(true);

  const handleClickOpen = () => {
    setClicked(!clicked);
  };

  if (cvItem.abstract === null) {
    return (
      <ClickableBullet
        clickable={false}
        headerTitle={period}
        headerSubtitle={cvItem.jobtitle}
        headerInfo={`${cvItem.institute} (${cvItem.country})`}
      />
    );
  } else {
    return (
      <ClickableBullet
        clickable={true}
        clicked={clicked}
        handleClickOpen={handleClickOpen}
        detailsHeight="200px"
        headerTitle={period}
        headerSubtitle={cvItem.jobtitle}
        headerInfo={`${cvItem.institute} (${cvItem.country})`}
        bodyContent={<ReactMarkdown>{cvItem.abstract}</ReactMarkdown>}
      />
    );
  }
};

const ContactWrapper = ({ title, children }) => {
  return (
    <Grid container style={{ marginBottom: "1rem" }}>
      <Grid md={2} xs={4}>
        <b>{title}</b>
      </Grid>
      <Grid md xs>
        {children}
      </Grid>
    </Grid>
  );
};

const AboutPage = () => {
  const [about, setAbout] = useState("");
  const [academics, setAcademics] = useState("");
  const [curriculum, setCurriculum] = useState({});

  useEffect(() => {
    fetch("resources/markdown/about.md")
      .then((response) => response.text())
      .then((text) => setAbout(text));
  }, []);

  useEffect(() => {
    fetch("resources/json/curriculum.json")
      .then((response) => response.json())
      .then((data) => setCurriculum(data));
  }, []);

  useEffect(() => {
    fetch("resources/markdown/academics.md")
      .then((response) => response.text())
      .then((text) => setAcademics(text));
  }, []);

  return (
    <PageWrapper>
      {/* intro */}
      <MarkdownSection>{about}</MarkdownSection>
      {/* curriculum vitae */}
      <Section title="Curriculum">
        {_.map(curriculum, (cvItem, period) => {
          return <CVBullet cvItem={cvItem} period={period} key={period} />;
        })}
      </Section>
      {/* academic service */}
      <MarkdownSection title="Academic service">{academics}</MarkdownSection>
      {/* contact details */}
      <Section title="Contact">
        {/* email */}
        <ContactWrapper title="Email 📫">
          <a href="mailto:V.Vercruyssen@gmail.com">Send me an email</a>
        </ContactWrapper>
        {/* address */}
        <ContactWrapper title="Address 🏢">
          <div>Department of Computer Science, KU Leuven</div>
          <div>Clestijnenlaan 200A box 2402</div>
          <div>3001 Heverlee, Belgium</div>
        </ContactWrapper>
        {/* socials */}
        <ContactWrapper title="Socials 🌍">
          <a href="https://twitter.com/VercruyssenV">
            <i className="fa fa-twitter" />
          </a>
          {" and "}
          <a href="https://github.com/Vincent-Vercruyssen">
            <i className="fa fa-github" />
          </a>
          {" and "}
          <a href="https://scholar.google.be/citations?user=6hNLTrAAAAAJ&hl=en">
            <i className="fa fa-google" />
          </a>
          {" and "}
          <a href="https://www.linkedin.com/in/vincent-vercruyssen-b2734192/?locale=en_US">
            <i className="fa fa-linkedin"></i>
          </a>
        </ContactWrapper>
      </Section>
    </PageWrapper>
  );
};

export default AboutPage;
