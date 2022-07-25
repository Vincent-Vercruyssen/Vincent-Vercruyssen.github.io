// Author: Vincent Vercruyssen
// Year:   2021

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import SchoolIcon from "@material-ui/icons/School"; // google scholar
import TwitterIcon from "@material-ui/icons/Twitter"; // twitter
import GitHubIcon from "@material-ui/icons/GitHub"; // github
import HomeIcon from "@material-ui/icons/Home"; // homepage
import EmailIcon from "@material-ui/icons/Email"; // email
import LinkedInIcon from "@material-ui/icons/LinkedIn"; // linkedin
import Link from "@material-ui/core/Link";

import { useStyles } from "../styling/styles";
import profile from "./_resources/imgs/profile-2.png";

// ----------------------------------------
// Data
// ----------------------------------------

const links = {
  scholar: "https://scholar.google.be/citations?user=6hNLTrAAAAAJ&hl=en&oi=ao",
  github: "https://github.com/Vincent-Vercruyssen",
  twitter: "https://twitter.com/vercruyssenv?lang=en",
  linkedin: "https://www.linkedin.com/in/vincent-vercruyssen-b2734192/",
  home: "https://www.kuleuven.be/wieiswie/en/person/00105845",
  dtai: "http://dtai.cs.kuleuven.be/",
  kul: "http://www.kuleuven.be/",
  jesse: "http://people.cs.kuleuven.be/~jesse.davis/",
  wannes: "http://people.cs.kuleuven.be/~wannes.meert/",
  abnormal: "https://dtai.cs.kuleuven.be/topics/anomalydetection",
};

// ----------------------------------------
// Helpercomponents
// ----------------------------------------

const TextLink = ({ value, text, end }) => {
  const handleLinkClick = (event, linkType) => {
    event.preventDefault();
    const link = links[linkType] || null;
    if (link) {
      window.location.href = link;
    }
  };

  return (
    <>
      {" "}
      <Link href="#" onClick={(e) => handleLinkClick(e, value)}>
        {text}
      </Link>
      {!end && " "}
    </>
  );
};

// ----------------------------------------
// PersonalInfo
// ----------------------------------------

const PersonalInfo = () => {
  // hooks
  const classes = useStyles();

  // handle clicks
  const handleLinkClick = (event, linkType) => {
    event.preventDefault();
    const link = links[linkType] || null;
    if (link) {
      window.location.href = link;
    }
  };

  return (
    <Paper variant="elevation" className={classes.personalInfo}>
      <img src={profile} alt="profile" className={classes.profilePic} />
      <div className={classes.personalInfoContent}>
        <div>
          <Typography variant="body2" className={classes.profileParagraph}>
            I am building a spin-off company on time series machine learning and
            anomaly detection. I am a postdoctoral researcher in the{" "}
            <TextLink value="dtai" text="DTAI Research Lab" end={false} />
            at <TextLink value="kul" text="KU Leuven" end={true} />.
            {/* Previously, I obtained a PhD degree (2020) and master's degree (2015) in AI and */}
            {/* a master's degree (2014) in economics. */}
          </Typography>
          <Typography variant="body2">
            My research focuses mainly on flexible, interactive machine
            learning, i.e., how to incorporate domain knowledge in classifiers?
            I like to solve real-world problems using the state-of-the-art
            algorithmic advances in machine learning, data mining, and computer
            science, if technology is the differentiating factor.
            {/* I develop machine learning models that fully automatically detect
            <TextLink value="abnormal" text="anomalous" end={false} />
            behaviour in large datasets. My interests span machine learning,
            data mining, and practical applications thereof. */}
          </Typography>
        </div>
        <div>
          <IconButton
            color="primary"
            onClick={(e) => handleLinkClick(e, "scholar")}
          >
            <SchoolIcon />
          </IconButton>
          <IconButton
            color="primary"
            onClick={(e) => handleLinkClick(e, "github")}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            color="primary"
            onClick={(e) => handleLinkClick(e, "twitter")}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            color="primary"
            onClick={(e) => handleLinkClick(e, "linkedin")}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            color="primary"
            onClick={(e) => handleLinkClick(e, "home")}
          >
            <HomeIcon />
          </IconButton>
          <IconButton
            color="primary"
            onClick={(e) => {
              window.location = "mailto:V.Vercruyssen@gmail.com";
              e.preventDefault();
            }}
          >
            <EmailIcon />
          </IconButton>
        </div>
      </div>
    </Paper>
  );
};

export default PersonalInfo;

// I work on
// the Andes project in collaboration with professor
// <TextLink value="jesse" text="Jesse Davis" end={false} /> and dr.{" "}
// <TextLink value="wannes" text="Wannes Meert" end={true} />.
