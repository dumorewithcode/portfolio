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
    //height: "20%",
    flexFlow: 'row wrap',
    //border: '1px solid black',
    
  },

  iconContainer: {
    display: "flex",
    height: "7.5vmin",
    width: "80px",
    justifyContent: "center",
    alignItems: "center",
    //border: '1px solid black',
    marginTop: '20px'
    //flexFlow: 'row wrap'
  },

  icons: {
      
    //minHeight: '10px',
    height: '7vmin',
    //height: "4vmax",
    transition: "all .2s ease-in-out",
    "&:hover": {
      height: "8vmin"
    },
    //border: '1px solid black',
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
