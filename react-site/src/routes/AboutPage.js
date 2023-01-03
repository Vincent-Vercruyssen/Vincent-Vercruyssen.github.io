import { useEffect, useState } from "react";
import _ from "lodash";

import Grid from "@mui/material/Unstable_Grid2"; // renaming
import ReactMarkdown from "react-markdown";
import Section from "../components/Section";
import SectionWrapper from "../components/SectionWrapper";
import ClickableBullet from "../components/ClickableBullet";

import "../styles.css";

const CVBullet = ({ cvItem, period }) => {
  const [clicked, setClicked] = useState(true);

  const handleClickOpen = () => {
    setClicked(!clicked);
  };

  if (cvItem.abstract === null) {
    console.log("here");
    return (
      <ClickableBullet
        clickable={false}
        headerTitle={period}
        headerSubtitle={cvItem.jobtitle}
        headerInfo={`${cvItem.institute} (${cvItem.country})`}
      />
    );
  } else {
    console.log("there");
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

const AboutPage = () => {
  const [intro, setIntro] = useState("");
  const [curriculum, setCurriculum] = useState({});
  const [reviewing, setReviewing] = useState({});

  useEffect(() => {
    fetch("resources/markdown/aboutme.md")
      .then((response) => response.text())
      .then((text) => setIntro(text));
  }, []);

  // curriculum
  useEffect(() => {
    fetch("resources/json/curriculum.json")
      .then((response) => response.json())
      .then((data) => setCurriculum(data));
  }, []);

  // reviewing
  // useEffect(() => {
  //   fetch("resources/json/reviewing.json")
  //     .then((response) => response.json())
  //     .then((data) => setReviewing(data));
  // }, []);

  return (
    <SectionWrapper>
      <Section textAlign="justify">
        <ReactMarkdown>{intro}</ReactMarkdown>
      </Section>
      <Section title="Curriculum">
        {_.map(curriculum, (cvItem, period) => {
          return <CVBullet cvItem={cvItem} period={period} key={period} />;
        })}
      </Section>
      <Section title="Academic service">
        <ReactMarkdown>
          I have [peer reviewed](https://en.wikipedia.org/wiki/Peer_review)
          scientific articles for several journals and conferences.
        </ReactMarkdown>
        <ReactMarkdown>
          From 2016 to 2021, I was the ombuds of the Master of Artificial
          Intelligence at the KU Leuven. For several years between 2015 and
          2022, I was a teaching assistant for the KU Leuven courses
          [Databases](https://onderwijsaanbod.kuleuven.be/2022/syllabi/v/e/H0N65AE.htm#activetab=doelstellingen_idm2073792),
          [Fundamentals of Artificial
          Intelligence](https://onderwijsaanbod.kuleuven.be/syllabi/e/H02A0AE.htm#activetab=doelstellingen_idp40256),
          [Artificial
          Intelligence](https://onderwijsaanbod.kuleuven.be/syllabi/n/H06U1AN.htm#activetab=doelstellingen_idp2990752),
          and [Data
          Mining](https://onderwijsaanbod.kuleuven.be/syllabi/e/H02C6AE.htm#activetab=doelstellingen_idp45440).
        </ReactMarkdown>
      </Section>
      <Section title="Contact">
        <Grid container style={{ marginBottom: "1rem" }}>
          <Grid xs={2}>
            <b>Email 📫</b>
          </Grid>
          <Grid xs={8}>
            <a href="mailto:V.Vercruyssen@gmail.com">Send me an email</a>
          </Grid>
        </Grid>
        <Grid container style={{ marginBottom: "1rem" }}>
          <Grid xs={2}>
            <b>Address 🏢</b>
          </Grid>
          <Grid xs={8}>
            <div>Department of Computer Science, KU Leuven</div>
            <div>Clestijnenlaan 200A box 2402</div>
            <div>3001 Heverlee, Belgium</div>
          </Grid>
        </Grid>
        <Grid container style={{ marginBottom: "1rem" }}>
          <Grid xs={2}>
            <b>Socials 🌍</b>
          </Grid>
          <Grid xs={8}>
            <a href="https://twitter.com/VercruyssenV">
              <i class="fa fa-twitter" />
            </a>
            {" and "}
            <a href="https://github.com/Vincent-Vercruyssen">
              <i class="fa fa-github" />
            </a>
            {" and "}
            <a href="https://scholar.google.be/citations?user=6hNLTrAAAAAJ&hl=en">
              <i class="fa fa-google" />
            </a>
            {" and "}
            <a href="https://www.linkedin.com/in/vincent-vercruyssen-b2734192/?locale=en_US">
              <i class="fa fa-linkedin"></i>
            </a>
          </Grid>
        </Grid>
      </Section>
    </SectionWrapper>
  );
};

export default AboutPage;
