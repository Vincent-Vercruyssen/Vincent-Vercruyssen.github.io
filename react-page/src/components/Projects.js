// Author: Vincent Vercruyssen
// Year:   2021

import _ from "lodash";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CodeIcon from "@material-ui/icons/Code";
import DescriptionIcon from "@material-ui/icons/Description";
import PublicIcon from "@material-ui/icons/Public";

import { useStyles } from "../styling/styles";

// data
import projectData from "../data/projectData";

// ----------------------------------------
// Project
// ----------------------------------------

const Project = ({ projectInfo }) => {
  // hooks
  const classes = useStyles();

  const highlight = {
    backgroundColor: "rgb(127,204,196,0.5)",
    // backgroundColor: "rgb(45,62,72,0.3)",
  };

  const handleLinkClick = (event, linkType) => {
    event.preventDefault();
    const link = projectInfo[linkType] || null;
    console.log(link);
    if (link) {
      window.location.href = link;
    }
  };

  return (
    <Card
      className={classes.publication}
      style={projectInfo.highlight ? highlight : {}}
    >
      <CardContent>
        <Typography gutterBottom variant="body1">
          {projectInfo.title}
        </Typography>
        <Typography gutterBottom variant="body2" color="textSecondary">
          {projectInfo.description}
        </Typography>
      </CardContent>
      <CardActions>
        {projectInfo.link && (
          <Button
            size="small"
            color="primary"
            startIcon={<PublicIcon />}
            onClick={(e) => handleLinkClick(e, "link")}
          >
            link
          </Button>
        )}
        {projectInfo.code && (
          <Button
            size="small"
            color="primary"
            startIcon={<CodeIcon />}
            onClick={(e) => handleLinkClick(e, "code")}
          >
            code
          </Button>
        )}
        {projectInfo.text && (
          <Button
            size="small"
            color="primary"
            startIcon={<DescriptionIcon />}
            onClick={(e) => handleLinkClick(e, "text")}
          >
            read more
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

// ----------------------------------------
// Projects
// ----------------------------------------

const Projects = () => {
  // hooks
  const classes = useStyles();

  return (
    <div className={classes.contentPage}>
      {_.map(projectData, (project, key) => (
        <Project key={key} projectInfo={project} />
      ))}
    </div>
  );
};

export default Projects;
