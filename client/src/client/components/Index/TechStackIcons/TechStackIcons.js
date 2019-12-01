import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import "typeface-montserrat";
import iconData from "./iconData.json";


const styles = {
techStack: {
    display: "flex",
    justifyContent: "space-around",
    flexFlow: 'row wrap',
  },

  iconContainer: {
    display: "flex",
    height: "7.5vmin",
    width: "80px",
    justifyContent: "center",
    alignItems: "center",
    marginTop: '20px'
  },

  icons: {
    height: '7vmin',
    transition: "all .2s ease-in-out",
    "&:hover": {
      height: "8vmin"
    },
  }
}

function TechStackIcons(props) {
  const { classes } = props;
  return (
      <div className={classNames(classes.techStack, "techStack")}>
        {iconData.map(icon => (
          <div className={classNames(classes.iconContainer, "iconContainer")} key={iconData.indexOf(icon)+1}>
            <a href={icon.link} target="blank">
              <img
                src={icon.url}
                alt={icon.name}
                title={icon.name}
                className={classNames(classes.icons, "icons")}
              />
            </a>
          </div>
        ))}
      </div>
  );
}

TechStackIcons.prototype = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TechStackIcons);