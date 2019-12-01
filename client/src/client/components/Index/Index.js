import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from 'classnames'


import NavBar from "../NavBar/NavBar";
import Main from "./Main/Main";
import TechStackIcons from "./TechStackIcons/TechStackIcons"

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    height: '100vh',
  }
};

function Landing(props) {
  const { classes } = props;
  return (
    <div className={classNames(classes.root, 'root ')}>
      <NavBar />
      <Main />
      <TechStackIcons />
    </div>
  );
}

Landing.prototype = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Landing);
