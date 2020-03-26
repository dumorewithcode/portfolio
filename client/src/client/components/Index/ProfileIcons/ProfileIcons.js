import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import "typeface-montserrat";
import profileIcons from "./profileIcons.json";


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
}

function ProfileIcons(props) {
  const { classes } = props;
  return (
    <div id="iconsContainer" className={classNames(classes.iconsContainer, "iconsContainer")}>
        <div className={classNames(classes.profileIconsContainer, "profileIconsContainer")}>
        {profileIcons.map(icon => (
          <div className={classNames(classes.iconContainer, "iconContainer")} key={icon.url}>
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
    </div>
      
  );
}

ProfileIcons.prototype = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProfileIcons);