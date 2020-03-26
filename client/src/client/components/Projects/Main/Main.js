import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Link from '@material-ui/core/Link';
import "typeface-montserrat";


const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: 'wrap',
    justifyContent: "center",
  },
  card: {
    maxWidth: 400,
    minHeight: 700,
    margin: "3%",
    backgroundColor: 'transparent'
  },
  media: {
    height: 360,
    maxWidth: 400,
    // paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  cardHeader: {
    textAlign: 'center',
    fontFamily: '"Montserrat"',
    color: "#fff",
    color: "#727272",
  },
  iconButton: {
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  githubAvatar: {
    maxWidth: 30,
  },
  link: {
    fontFamily: '"Montserrat"',
    color: "#727272",
    "&:hover": {
      textDecoration: "none"
    },
  },
  typography: {
    fontFamily: '"Montserrat"',
    fontSize: 17,
    color: '#fff'
  },
  cardInfoHeaders:{
    fontFamily: '"Montserrat"',
    fontSize: 19,
    color: '#727272'
  }
  
}));


export default function ProjectCards() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
 

  return (
    <div id='mainRoot' className={classes.root}>
    <div id='card1'>
    <Card className={classes.card} elevation={0} key={1}>
      <Typography variant="body2" color="textSecondary" component="p" className={classes.cardHeader}>
      <CardHeader
        title="Command Line Web Scraper"
      />
      </Typography>
      <CardActionArea>
      <CardMedia
        id ="iframeM"
        component="iframe"
        className={classes.media}
        image="https://www.youtube.com/embed/yVb1EeJr90I"
        title="scraper"
        frameBorder={0}
        allowfullscreen
      />
      </CardActionArea>
      <CardContent >
        <Typography variant="body2" color="textSecondary" component="p" className={classes.typography}>
          Written in Python and bundled for Windows, Linux and Mac, this tool was written for a colleague that required gamelogs data for each team listed on 
          <Link href="https://www.sports-reference.com/cbb/seasons/2019-school-stats.html" target="_blank" rel="noopener noreferrer" className={classes.link}> this page</Link>. 
          This tool retrieves the gamelogs for each team for a specific year or start from a specific year and return the gamelogs for every subsequent year e.g.(2012 - current year).
          This data is then exported as a csv document. 
          Instructions for usage and modules used are specified below.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" className={classes.iconButton}>
          <a href='https://github.com/jmsct/scraper' target='_blank' rel="noopener noreferrer" className={classes.a}><img src='https://cdn.svgporn.com/logos/github-icon.svg' className={classes.githubAvatar}/></a>
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph className={classes.cardInfoHeaders}>Usage:</Typography>
          <Typography paragraph className={classes.typography}>
            git clone https://github.com/jmsct/scraper 
          </Typography>
          <Typography paragraph className={classes.typography}>
           Open relevant OS folder and run scraper
          </Typography>
          <Typography paragraph className={classes.cardInfoHeaders}>
           Modules used:
          </Typography>
          <Typography paragraph className={classes.typography}>
           Python csv (makes exporting to csv a breeze)
          </Typography>
          <Typography paragraph className={classes.typography}>
           BeautifulSoup (html parser)
          </Typography>
          <Typography paragraph className={classes.typography}>
           grequests (for making asynchronous calls)
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>
    
    
    <div id='card2'>
    <Card className={classes.card} elevation={0} key={2}>
      <Typography variant="body2" color="textSecondary" component="p" className={classes.cardHeader}>
      <CardHeader
        title="Command Line Web Scraper"
      />
      </Typography>
      <CardActionArea>
      <CardMedia
        id ="iframeM"
        component="iframe"
        className={classes.media}
        image="https://www.youtube.com/embed/yVb1EeJr90I"
        title="scraper"
        frameBorder={0}
        allowfullscreen
      />
      </CardActionArea>
      <CardContent >
        <Typography variant="body2" color="textSecondary" component="p" className={classes.typography}>
          Written in Python and bundled for Windows, Linux and Mac, this tool was written for a colleague that required gamelogs data for each team listed on 
          <Link href="https://www.sports-reference.com/cbb/seasons/2019-school-stats.html" target="_blank" rel="noopener noreferrer" className={classes.link}> this page</Link>. 
          This tool retrieves the gamelogs for each team for a specific year or start from a specific year and return the gamelogs for every subsequent year e.g.(2012 - current year).
          This data is then exported as a csv document. 
          Instructions for usage and modules used are specified below.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" className={classes.iconButton}>
          <a href='https://github.com/jmsct/scraper' target='_blank' rel="noopener noreferrer" className={classes.a}><img src='https://cdn.svgporn.com/logos/github-icon.svg' className={classes.githubAvatar}/></a>
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph className={classes.cardInfoHeaders}>Usage:</Typography>
          <Typography paragraph className={classes.typography}>
            git clone https://github.com/jmsct/scraper 
          </Typography>
          <Typography paragraph className={classes.typography}>
           Open relevant OS folder and run scraper
          </Typography>
          <Typography paragraph className={classes.cardInfoHeaders}>
           Modules used:
          </Typography>
          <Typography paragraph className={classes.typography}>
           Python csv (makes exporting to csv a breeze)
          </Typography>
          <Typography paragraph className={classes.typography}>
           BeautifulSoup (html parser)
          </Typography>
          <Typography paragraph className={classes.typography}>
           grequests (for making asynchronous calls)
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>
    </div>
  );
}