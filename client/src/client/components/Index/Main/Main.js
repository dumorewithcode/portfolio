import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import "typeface-montserrat";

import "./Main.css";


const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "60%",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    fontFamily: '"Montserrat"',
    fontSize: "12vmin",
    color: "#727272",
    lineHeight: 1.2
  },
  heading: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "70%"
  },
};

function Main(props) {
  const { classes } = props;
  return (
    <div id='mainRoot' className={classes.root}>
      <div id='heading' className={classes.heading}>
        <Typography className={classNames(classes.text, "text")}>
          Full Stack
        </Typography>
        <Typography className={classNames(classes.text, "text")}>
          Developer
        </Typography>
      </div>
    </div>
  );
}

Main.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Main);
