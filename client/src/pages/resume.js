import React from 'react'
import resume from '../client/assets/resume.pdf'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(()=>({
    object:{
        width:'100%',
        minHeight:'100vh',
        overflow: 'scrollbar'
    }
}));


const Resume = () => {
    const classes = useStyles();
     
    return (
        <object data={resume} type="application/pdf" className={classes.object}>
            <embed src={resume} type="application/pdf" />
        </object>
    )
}

export default Resume;