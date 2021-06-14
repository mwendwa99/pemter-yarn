import React from 'react';
import './styles.css';

import { makeStyles, Typography, Grid } from '@material-ui/core';
import About from '../About/About';
import getStarted from './getStarted';


const useStyle = makeStyles((theme) => ({
    root: {
        position: "absolute",
        width: "50%",
        height: "100%",
        display: "grid",
        placeItems: "center",
        [theme.breakpoints.down('xs')]: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            fontSize: "10px",
            justifyContent: "center",
        },
    },
    button: {
        [theme.breakpoints.down('xs')]: {
            flexDirection: "column",
            "& a": {
                padding: theme.spacing(1, 0),
            }
        },
        '& img': {
            width: '30%',

        }
    }
}));

export default function Home() {

    const classes = useStyle();

    return (
        <div>
            <div id='home' style={{ flexGrow: 1 }} >
                <Grid className={classes.root} container spacing={3}>
                    <Grid item sm={12} >
                        <Typography color="secondary" variant="h2" gutterBottom>
                            We  Create Brands,<br /> We Design Growth.
                        </Typography>
                        <Typography variant="h5" gutterBottom>
                            We take pride in creating campaigns and communication <br /> that deliver on your bottom line,
                            transform processes <br /> and shape your customer perception.
                        </Typography>
                        <div className={classes.button} >
                            <getStarted />
                        </div>
                    </Grid>
                </Grid>
            </div>
            <About />
        </div>
    )
}

