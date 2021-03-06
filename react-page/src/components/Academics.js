// Author: Vincent Vercruyssen
// Year:   2021

import Typography from "@material-ui/core/Typography";
import _ from "lodash";

import { useStyles } from "../styling/styles";

// ----------------------------------------
// Data
// ----------------------------------------

const academicActivities = {
  professional: [
    {
      function: "PC member",
      year: 2022,
      venue: "36th Conference on Artificial Intelligence (AAAI)",
    },
    {
      function: "PC member",
      year: 2022,
      venue: "SIAM International Conference on Data Mining (SDM)",
    },
    {
      function: "Reviewer",
      year: 2021,
      venue: "Machine Learning (MACH)",
    },
    {
      function: "Reviewer",
      year: 2021,
      venue: "Data mining and knowledge discovery (DAMI)",
    },
    {
      function: "Editorial board member",
      year: 2021,
      venue: "Machine Learning Journal (MLJ)",
    },
    {
      function: "PC member",
      year: 2021,
      venue: "6th Outlier Detection and Description workshop @ KDD (ODD)",
    },
    { function: "Reviewer", year: 2021, venue: "Big Data" },
    {
      function: "Reviewer",
      year: 2021,
      venue: "Journal of Artificial Intelligence Research (JAIR)",
    },
    {
      function: "PC member",
      year: 2021,
      venue: "SIAM International Conference on Data Mining (SDM)",
    },
    {
      function: "PC member",
      year: 2021,
      venue: "35th Conference on Artificial Intelligence (AAAI)",
    },
    {
      function: "PC member",
      year: 2020,
      venue: "Conference on Information and Knowledge Management (CIKM)",
    },
    {
      function: "Reviewer",
      year: 2020,
      venue: "Machine Learning Journal (MLJ)",
    },
    {
      function: "PC member",
      year: 2020,
      venue:
        "International Joint Conference on Artificial Intelligence (IJCAI)",
    },
    {
      function: "PC member",
      year: 2020,
      venue: "StarAI workshop @ AAAI",
    },
    {
      function: "PC member",
      year: 2020,
      venue: "SIAM International Conference on Data Mining (SDM)",
    },
    {
      function: "Reviewer",
      year: 2019,
      venue: "Machine Learning Journal (MLJ)",
    },
    {
      function: "PC member",
      year: 2019,
      venue: "33th Conference on Artificial Intelligence (AAAI)",
    },
    {
      function: "PC member",
      year: 2019,
      venue:
        "25th AMC SIGKDD Conference on Knowledge Discovery and Data Mining (KDD)",
    },
    {
      function: "Subreviewer",
      year: 2019,
      venue:
        "International Joint Conference on Artificial Intelligence (IJCAI)",
    },
    {
      function: "Subreviewer",
      year: 2018,
      venue: "32th Conference on Artificial Intelligence (AAAI)",
    },
  ],
  theses: [
    {
      year: 2021,
      title:
        "MLSketcher: een tool voor het ge??mproviseerd schetsen van 2D datasets ter exploratie van machine learning algoritmes",
    },
    { year: 2020, title: "Anomaly detection with domain adaptation" },
    {
      year: 2020,
      title:
        "Designing a stability metric for assessing the robustness of anomaly rankings",
    },
    {
      year: 2018,
      title:
        "Leveraging user feedback in anomaly detection using semi-supervised Isolation Forests",
    },
    {
      year: 2018,
      title:
        "Anomaly detection in relational data using first-order logical decision trees",
    },
    {
      year: 2017,
      title:
        "Data-driven detection of unusual soccer players using event sequences",
    },
    {
      year: 2016,
      title:
        "The influence of the social network of board members on the prediction of finincial ratios of their companies",
    },
    {
      year: 2015,
      title: "A data-driven approach for plantar pressure analysis",
    },
  ],
  teaching: [
    {
      years: "2016-2021",
      function: "Ombuds of the Master of Artificial Intelligence",
    },
    {
      years: "2016-2018",
      function: "Teaching assistant Databases",
    },
    {
      years: "2015-2020",
      function: "Teaching assistant Fundamentals of AI",
    },
    {
      years: "2015-2020",
      function: "Teaching assistant Artificial Intelligence",
    },
  ],
};

// ----------------------------------------
// Academics
// ----------------------------------------

const Academics = () => {
  // hooks
  const classes = useStyles();

  return (
    <div className={classes.contentPage}>
      <Typography gutterBottom variant="h6">
        <b>Professional service</b>
      </Typography>
      <ul>
        {_.map(academicActivities.professional, (activity, index) => (
          <li>
            [{activity.year}] <b>{activity.function}</b> - {activity.venue}
          </li>
        ))}
      </ul>
      <Typography gutterBottom variant="h6">
        <b>Thesis advisor</b>
      </Typography>
      <ul>
        {_.map(academicActivities.theses, (activity, index) => (
          <li>
            [{activity.year}] {activity.title}
          </li>
        ))}
      </ul>
      <Typography gutterBottom variant="h6">
        <b>Teaching</b>
      </Typography>
      <ul>
        {_.map(academicActivities.teaching, (activity, index) => (
          <li>
            [{activity.years}] {activity.function}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Academics;
