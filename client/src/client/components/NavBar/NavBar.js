import React, { Component } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import Button from "@material-ui/core/Button"
import MenuIcon from "@material-ui/icons/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import Menu from "@material-ui/core/Menu"
import classNames from "classnames"
import Paper from "@material-ui/core/Paper"
import navBarData from "./navBarData.json"
import "./styles/NavBar.css"
import "typeface-montserrat"

const styles = {
  navBarRoot: {
    display: "flex",
    flexDirection: "column",
    //height: "20%",
    justifyContent: "space-between",
    // border: '1px solid black',
  },
  largeNavBar: {
    //border: '1px solid black',
    //height: '100%',
  },

  titleRoot: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    height: "40%",
    alignItems: "center",
    margin: "35px",
  },

  title: {
    fontFamily: '"Montserrat"',
    color: "#fff",
    textDecoration: "none",
    fontSize: "4.5vmin",
  },

  toolbarContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    height: "30%",
  },

  toolbar: {
    width: "75%",
    justifyContent: "space-evenly",
    display: "flex",
    flexFlow: "row wrap",
  },

  navButtons: {
    borderRadius: 0,
    "&:hover": {
      borderBottom: "3px solid #727272",
      background: "transparent",
    },
    padding: "0px 0px 10px 0px",
    borderBottom: "3px solid transparent",
  },

  navButtonsLabel: {
    fontSize: "20px",
    fontFamily: '"Montserrat"',
    textTransform: "none",
    textDecoration: "none",
    color: "#fff",
    //border: '1px solid black'
  },

  mobileNavBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    //border: '1px solid black',
    //backgroundColor: 'rgba(255, 255, 255, .5)',
  },

  mobileMenuButton: {
    color: "#727272",
    marginRight: "5vmax",
  },

  mobileMenuData: {
    color: "#727272",
    textDecoration: "none",
  },

  menu: {
    textColor: "#727272",
    marginRight: "5vmax",
    textDecoration: "none",
  },

  mobileTitle: {
    fontSize: "4vmin",
    fontFamily: "Montserrat",
    color: "#727272",
    marginLeft: "5vmax",
    textDecoration: "none",
  },
}

class NavBar extends Component {
  state = {
    auth: true,
    anchorEl: null,
  }

  handleChange = event => {
    this.setState({ auth: event.target.checked })
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  render() {
    const { classes } = this.props
    const { anchorEl } = this.state
    const open = Boolean(anchorEl)
    //const nav = ["Resume", "Projects","About","Contact"];

    return (
      <div className={classNames(classes.navBarRoot, "navBarRoot")}>
        <div className={classNames(classes.largeNavBar, "largeNavBar")}>
          <div className={classNames(classes.titleRoot, "titleRoot")}>
            <div className={classNames(classes.title, "title")}>
              <Typography
                
                className={classNames(classes.title, "title")}
              >
                <Link to="/" className={classNames(classes.title, "title")}>
                  Jamal Scott
                </Link>
              </Typography>
            </div>
          </div>
          <div
            className={classNames(classes.toolbarContainer, "toolbarContainer")}
          >
            <div className={classNames(classes.toolbar, "toolbar")}>
              {navBarData.map(data => (
                <Button
                  classes={{ label: classes.navButtonsLabel }}
                  className={classNames(classes.navButtons, "navButtons")}
                  disableRipple={true}
                  disableTouchRipple={true}
                  key={navBarData.indexOf(data)}
                >
                  <Link to={data.link} style={styles.navButtonsLabel}>
                    {data.title}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div
          id="mobileNavBar"
          className={classNames(classes.mobileNavBar, "mobileNavBar")}
        >
          <Typography>
            <Link
              to="/"
              className={classNames(classes.mobileTitle, "mobileTitle")}
            >
              Jamal Scott
            </Link>
          </Typography>

          <div>
            <IconButton
              onClick={this.handleMenu}
              color="inherit"
              className={classNames(
                classes.mobileMenuButton,
                "mobileMenuButton"
              )}
            >
              <MenuIcon />
            </IconButton>

            <Paper>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={this.handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
              >
                {navBarData.map(data => (
                  <MenuItem
                    key={navBarData.indexOf(data)+navBarData.length}
                    onClick={this.handleClose}
                  >
                    <Link
                      to={data.link}
                      className={classNames(
                        classes.mobileMenuData,
                        "mobileMenuData"
                      )}
                    >
                      {data.title}
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Paper>
          </div>
        </div>
      </div>
    )
  }
}

NavBar.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
}

export default withStyles(styles)(NavBar)
