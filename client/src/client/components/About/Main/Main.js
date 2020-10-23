import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import "typeface-montserrat";

const useStyles = makeStyles(()=>({
    root: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: '7%',
        
        // border: '1px solid black'
    },
    container: {
        width: '50%',
        // border: '1px solid black'
    },
    typography:{
        fontSize: '20px',
        fontFamily: 'montserrat',
        color: '#fff'
    }
}));

export default function AboutPage() {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <div className={classes.container}>
                <Typography className={classes.typography}>
                    Adaptable and self motivated learner that's passionate about the latest and greatest technologies with an emphasis on security research/analysis, penetration testing and automation.
                    <br />
                    <br />
                    I enjoy performing security audits on web/mobile apps and writing scripts using either bash or python to simplify workflow that becomes too repetitive.
                    <br />
                    <br />
                    I am currently scripting an auditor that works as a wrapper around many open source tools and my own scripts to automate the process of finding common security flaws within web apps. This is a private tool that is a work in progress 
                    with a planned open source release when it's ready.
                    <br />
                    <br />
                    My willingness to learn and adapt may surely be an asset to you, your team and  your company; with time, relevant skills, right mindset and a chance, I believe anyone can be valuable to any company.
                    <br />
                    <br />
                    I am currently open to opportunities preferably within the cyber security discipline and if you feel as though my listed skills and willingness to learn/improve would be a great match for your company then it would be my utmost pleasure to hear from you.
                </Typography>
            </div>
        </div>
    )
}