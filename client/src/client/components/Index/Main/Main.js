import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import profileIcons from './profileIcons'
import "typeface-montserrat";

import "./Main.css";



const styles = {
  root: {
    display: "flex",
    flexDirection: 'column',
    justifyContent: "center",
    height: "50%",
  },
  text: {
    textAlign: "center",
    fontFamily: '"Montserrat"',
    fontSize: "12vmin",
    color: "#727272",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
  },
  iconsContainer:{
    display: 'flex',
    justifyContent: 'center',
  },
  profileIconsContainer: {
    display: "flex",
    justifyContent:'space-around',
    width: '40%'
  },
  icons: {
    maxHeight: 30,
  }
};

function Main(props) {
  const { classes } = props;
  return (
    <div id='mainRoot' className={classes.root}>
        <div className={classNames(classes.textContainer, "textContainer")}>
        <Typography className={classNames(classes.text, "text")}>
         Cyber  
        </Typography>
        <Typography className={classNames(classes.text, "text")}>
          Security
        </Typography>
        <Typography className={classNames(classes.text, "text")}>
          Analyst
        </Typography>
        </div>
    </div>
  );
}

Main.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Main);
