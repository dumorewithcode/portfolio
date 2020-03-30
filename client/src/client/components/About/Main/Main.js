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
                    Adaptable and self motivated learner that's passionate about the latest and greatest technologies with an emphasis on security research/analysis and penetration testing.
                    <br />
                    <br />
                    I enjoy doing ctf's in my spare time and writing scripts using either bash or python to simplify workflow that becomes too repetitive.
                    <br />
                    <br />
                    My strength lies within the pentesting area of cyber security and writing simple scrips to automate workflows wherever necessary.
                    <br />
                    <br />
                    I am not an expert but my willingness to learn and adapt may surely be an asset to you, your team and  your company; with time, relevant skills, right mindset and a chance, I believe anyone can be valuable to any company.
                    <br />
                    <br />
                    I am currently open to opportunities within the cyber security discipline and if you feel as though my listed skills or willingness to learn/improve would be a great match for your company then it would be my utmost pleasure to hear from you.
                </Typography>
            </div>
        </div>
    )
}