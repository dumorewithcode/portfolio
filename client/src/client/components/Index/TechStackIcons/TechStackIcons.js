import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import "typeface-montserrat";
import iconData from "./iconData.json";

import burp_logo from "../../../assets/icons/burp-icon.png"
import metasploit_logo from "../../../assets/icons/metasploit-icon.png"
import wireshark_logo from "../../../assets/icons/wireshark-icon.png"
import activedirectory_logo from "../../../assets/icons/activedirectory-icon.png"
import owasp_logo from "../../../assets/icons/owasp-icon.png"

const styles = {
techStack: {
    display: "flex",
    justifyContent: "space-around",
    flexFlow: 'row wrap',
    height: "20%",
  },

  iconContainer: {
    display: "flex",
    height: "7.5vmin",
    width: "80px",
    justifyContent: "center",
    alignItems: "center",
    marginTop: '70px'
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
        <div className={classNames(classes.iconContainer, "iconContainer")}>
          <a href="https://portswigger.net/" target="blank">
            <img
              src={burp_logo}
              alt="burpsuite"
              title="burpsuite"
              className={classNames(classes.icons, "icons")}
            />
          </a>
        </div>
        <div className={classNames(classes.iconContainer, "iconContainer")}>
          <a href="https://www.metasploit.com/" target="blank">
            <img
              src={metasploit_logo}
              alt="metasploit"
              title="metasploit"
              className={classNames(classes.icons, "icons")}
            />
          </a>
        </div>
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
        <div className={classNames(classes.iconContainer, "iconContainer")}>
          <a href="https://owasp.org/www-project-top-ten/" target="blank">
            <img
              src={owasp_logo}
              alt="owasp"
              title="owasp top 10"
              className={classNames(classes.icons, "icons")}
            />
          </a>
        </div>
        <div className={classNames(classes.iconContainer, "iconContainer")}>
          <a href="https://docs.microsoft.com/en-us/windows-server/identity/ad-ds/get-started/virtual-dc/active-directory-domain-services-overview" target="blank">
            <img
              src={activedirectory_logo}
              alt="active directory attacks"
              title="active directory attacks"
              className={classNames(classes.icons, "icons")}
            />
          </a>
        </div>
        <div className={classNames(classes.iconContainer, "iconContainer")}>
          <a href="https://www.wireshark.org/" target="blank">
            <img
              src={wireshark_logo}
              alt="wireshark"
              title="wireshark"
              className={classNames(classes.icons, "icons")}
            />
          </a>
        </div>
      </div>
  );
}

TechStackIcons.prototype = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TechStackIcons);