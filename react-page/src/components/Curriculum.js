// Author: Vincent Vercruyssen
// Year:   2021

import _ from "lodash";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PublicIcon from "@material-ui/icons/Public";

import { useStyles } from "../styling/styles";

// data
import cvData from "../data/cvData";

// ----------------------------------------
// Curriculum
// ----------------------------------------

const CurriculumItem = ({ item }) => {
  // hooks
  const classes = useStyles();

  const handleLinkClick = (event, linkType) => {
    event.preventDefault();
    const link = item[linkType] || null;
    console.log(link);
    if (link) {
      window.location.href = link;
    }
  };

  return (
    <Card className={classes.publication}>
      <CardContent>
        <Typography gutterBottom variant="body1">
          [
          {item.start === item.end
            ? item.start
            : `${item.start} to ${item.end || "present"}`}
          ] - {item.jobtitle}
        </Typography>
        <Typography gutterBottom variant="body2" color="textSecondary">
          {item.employer}, {item.location}
        </Typography>
        {item.grade && (
          <Typography gutterBottom variant="body2" color="textSecondary">
            <em>{item.grade}</em>
          </Typography>
        )}
      </CardContent>
      <CardActions>
        {item.link && (
          <Button
            size="small"
            color="primary"
            startIcon={<PublicIcon />}
            onClick={(e) => handleLinkClick(e, "link")}
          >
            link
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

const Curriculum = () => {
  // hooks
  const classes = useStyles();

  return (
    <div className={classes.contentPage}>
      {_.map(cvData, (item, key) => (
        <CurriculumItem key={key} item={item} />
      ))}
    </div>
  );
};

export default Curriculum;
