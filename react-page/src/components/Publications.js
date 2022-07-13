// Author: Vincent Vercruyssen
// Year:   2021

import { useState } from "react";
import _ from "lodash";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Typography from "@material-ui/core/Typography";
import SortIcon from "@material-ui/icons/Sort";
import CodeIcon from "@material-ui/icons/Code";
import SlideshowIcon from "@material-ui/icons/Slideshow";
import DescriptionIcon from "@material-ui/icons/Description";
import PublicIcon from "@material-ui/icons/Public";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";

import { useStyles } from "../styling/styles";

// data
import publicationData from "../data/publicationData";

// ----------------------------------------
// Data
// ----------------------------------------

const resourceLoc = "./_resources/";

// ----------------------------------------
// Publication
// ----------------------------------------

const Publication = ({ publication, sorter }) => {
  // hooks
  const classes = useStyles();

  const handleLinkClick = (event, linkType) => {
    event.preventDefault();
    const link = publication[linkType] || null;
    console.log(link);
    if (link) {
      window.location.href = link;
    }
  };

  return (
    <Card className={classes.publication}>
      <CardActionArea onClick={(e) => handleLinkClick(e, "pdf")}>
        <CardContent>
          <Typography gutterBottom variant="body1">
            <b>
              {"["}
              {sorter === "type" ? publication.year : publication.type}
            </b>
            {"] "}
            {publication.title}
          </Typography>
          <Typography gutterBottom variant="body2" color="textSecondary">
            {_.map(publication.authors, (author, index) => {
              const last =
                index === publication.authors.length - 1 ? true : false;
              const me = author === "Vincent Vercruyssen" ? true : false;
              // const renderAuthor = me ? <u>{author}</u> : { author };
              if (last && me) {
                return (
                  <span key={index}>
                    <u>{author}</u>
                  </span>
                );
              } else if (last) {
                return <span key={index}>{author}</span>;
              } else if (me) {
                return (
                  <span key={index}>
                    <u>{author}</u> -{" "}
                  </span>
                );
              } else {
                return <span key={index}>{author} - </span>;
              }
            })}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <em>{publication.venue}</em>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {publication.pdf && (
          <Button
            size="small"
            color="primary"
            startIcon={<DescriptionIcon />}
            onClick={(e) => handleLinkClick(e, "pdf")}
          >
            pdf
          </Button>
        )}
        {publication.code && (
          <Button
            size="small"
            color="primary"
            startIcon={<CodeIcon />}
            onClick={(e) => handleLinkClick(e, "code")}
          >
            code
          </Button>
        )}
        {publication.datasets && (
          <Button
            size="small"
            color="primary"
            startIcon={<FolderOpenIcon />}
            onClick={(e) => handleLinkClick(e, "datasets")}
          >
            datasets
          </Button>
        )}
        {publication.doi && (
          <Button
            size="small"
            color="primary"
            startIcon={<PublicIcon />}
            onClick={(e) => handleLinkClick(e, "print")}
          >
            doi
          </Button>
        )}
        {publication.presentation && (
          <Button
            size="small"
            color="primary"
            startIcon={<SlideshowIcon />}
            onClick={(e) => handleLinkClick(e, "presentation")}
          >
            presentation
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

// ----------------------------------------
// Publications
// ----------------------------------------

const Publications = () => {
  // hooks
  const classes = useStyles();

  // state
  const [sortBy, setSortBy] = useState("year");

  // change state
  const handleClickSort = (newValue) => {
    setSortBy(newValue);
  };

  // functions
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  const arrayColumn = (arr, n) => arr.map((x) => x[n]);

  // unique publication types
  var publicationTypes = [];
  _.forEach(
    publicationData,
    (value, key) => (publicationTypes[publicationTypes.length] = value["type"])
  );
  publicationTypes = publicationTypes.filter(onlyUnique).sort();

  // unique publication years
  var publicationYears = [];
  _.forEach(
    publicationData,
    (value, key) => (publicationYears[publicationYears.length] = value["year"])
  );
  publicationYears = publicationYears.filter(onlyUnique).sort().reverse();

  // sort paper id's by year
  var idsByYear = Object.keys(publicationData).map(function (key) {
    return [key, publicationData[key]["year"]];
  });

  idsByYear.sort(function (first, second) {
    return second[1] - first[1];
  });
  idsByYear = arrayColumn(idsByYear, 0);

  // sort paper id's by publication type

  return (
    <div className={classes.contentPage}>
      <div className={classes.contentControl}>
        <ButtonGroup size="small" color="primary">
          <Button
            color="primary"
            variant={sortBy === "year" ? "contained" : "outlined"}
            onClick={() => handleClickSort("year")}
          >
            sort papers by year
          </Button>
          <Button
            startIcon={<SortIcon />}
            variant={sortBy === "type" ? "contained" : "outlined"}
            onClick={() => handleClickSort("type")}
          >
            sort papers by type
          </Button>
        </ButtonGroup>
      </div>
      {sortBy === "type"
        ? _.map(publicationTypes, (type, index) => (
            <div key={index}>
              <Typography gutterBottom variant="h6">
                <b>{type}</b>
              </Typography>
              {_.map(idsByYear, (key) => {
                if (publicationData[key].type === type)
                  return (
                    <Publication
                      key={key}
                      publication={publicationData[key]}
                      sorter="type"
                    />
                  );
              })}
            </div>
          ))
        : _.map(publicationYears, (year, index) => (
            <div key={index}>
              <Typography gutterBottom variant="h6">
                <b>{year}</b>
              </Typography>
              {_.map(idsByYear, (key) => {
                if (publicationData[key].year === year)
                  return (
                    <Publication
                      key={key}
                      publication={publicationData[key]}
                      sorter="year"
                    />
                  );
              })}
            </div>
          ))}
    </div>
  );
};

export default Publications;
