import React from 'react';
import './styles.css'

import { makeStyles, Typography, Grid } from '@material-ui/core';
import Images from '../../assets/index';
import About from '../About/About';
import { animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-router-dom'


const useStyle = makeStyles((theme) => ({
    root: {
        position: "absolute",
        // backgroundColor: "red",
        width: "50%",
        height: "100%",
        display: "grid",
        placeItems: "center",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
            top: "2rem",
        },
        padding: 0
    },
    button: {
        display: "flex",
        justifyContent: "space-between",
        [theme.breakpoints.down('xs')]: {
            flexDirection: "column",
            "& a": {
                padding: theme.spacing(1, 0),
            }
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
                        <Typography className={classes.heading1} color="secondary" variant="h2" gutterBottom>
                            We Make Brands,<br /> We Design Growth.
                </Typography>
                        <Typography className={classes.heading2} variant="h5" gutterBottom>
                            The best ideas for your business,<br /> and will work with you to create a design <br />
                 that grows your company
                </Typography>
                        <div className={classes.button} >
                            <Link onClick={() => scroll.scrollToBottom()}>
                                <img src={Images.contactBtn} alt="" />
                            </Link>
                            <a href="#" style={{ cursor: "not-allowed" }} >
                                <img src={Images.priceBtn} alt="" />
                            </a>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <About />
        </div>
    )
}

