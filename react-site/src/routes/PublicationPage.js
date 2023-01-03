import { useEffect, useState } from "react";
import _ from "lodash";

import ReactMarkdown from "react-markdown";
import Section from "../components/Section";
import SectionWrapper from "../components/SectionWrapper";
import ClickableBullet from "../components/ClickableBullet";

import "../styles.css";

const Publication = ({ publication }) => {
  const [clicked, setClicked] = useState(true);
  const authorString = publication.authors.join(", ");
  const renderLinks = {};

  // heuristic to compute max-height
  // large = 100 chars; small = 40 chars
  if (window.screen.width > 1000) {
    var lines = Math.ceil(publication.abstract.length / 100);
  } else {
    var lines = Math.ceil(publication.abstract.length / 40);
  }
  const maxHeight = publication.abstract === null ? "50px" : `${lines * 40}px`;

  // fill the links to render
  _.map(publication, (value, key) => {
    if (["doi", "pdf", "code", "dataset"].indexOf(key) > -1 && value != null) {
      renderLinks[key] = value;
    }
  });

  const handleClickOpen = () => {
    setClicked(!clicked);
  };

  return (
    <ClickableBullet
      clickable={true}
      clicked={clicked}
      handleClickOpen={handleClickOpen}
      detailsHeight={maxHeight}
      headerTitle={`${publication.venueAbbr} (${publication.type})`}
      headerSubtitle={publication.title}
      headerInfo={authorString}
      bodyContent={
        <>
          <ReactMarkdown>{publication.abstract}</ReactMarkdown>
          <span>
            [{" "}
            {_.map(renderLinks, (value, key) => {
              const last =
                key ===
                Object.keys(renderLinks)[Object.keys(renderLinks).length - 1]
                  ? true
                  : false;
              if (last) {
                return (
                  <span key={key}>
                    <a href={value}>{key}</a>
                  </span>
                );
              } else {
                return (
                  <span key={key}>
                    <a href={value}>{key}</a>,{" "}
                  </span>
                );
              }
            })}{" "}
            ]
          </span>
        </>
      }
    />
  );
};

const PublicationPage = () => {
  const [pubYears, setPubYears] = useState([]);
  const [pubDict, setPubDict] = useState({});

  // retrieve publications from file
  useEffect(() => {
    fetch("resources/json/publications.json")
      .then((response) => response.json())
      .then((data) => {
        var years = Object.keys(data).sort().reverse();
        setPubYears(years);
        setPubDict(data);
      });
  }, []);

  return (
    <SectionWrapper>
      <Section textAlign="justify">
        <ReactMarkdown>
          Here you can find an overview of my scientific publications. You can
          also find these publications on my
          [Lirias](https://www.cs.kuleuven.be/publicaties/lirias/TEST2/mypubs.php?unum=U0105845)
          or [Google
          Scholar](https://scholar.google.be/citations?user=6hNLTrAAAAAJ&hl=en&oi=ao)
          profile. Click on any publication to read its abstract and view the
          links.
        </ReactMarkdown>
      </Section>
      {/* loop over publications */}
      {_.map(pubYears, (year, ID) => {
        return (
          <Section title={year} key={ID}>
            {_.map(pubDict[year], (publication, ID2) => {
              return <Publication publication={publication} key={ID2} />;
            })}
          </Section>
        );
      })}
    </SectionWrapper>
  );
};

export default PublicationPage;
