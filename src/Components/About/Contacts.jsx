import React from 'react';
import { Container, Typography, Divider, makeStyles } from '@material-ui/core';
import Images from '../../assets/index';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll'

const useStyles = makeStyles((theme) => ({
    contact: {
        // padding: theme.spacing(3),
        background: "url( ' " + Images.artboard + " ' ) no-repeat center center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",

    },
    contactSection2: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        textAlign: "left",
    },
}))

const Contacts = () => {


    const classes = useStyles();

    return (
        <Container className={classes.contact} >
            <div>
                <Typography variant="h2"
                    color='textSecondary'
                >Contact Us</Typography>
                <Divider style={{ marginBottom: "1rem", }} />
                <Typography variant="h6" gutterBottom color="textSecondary" > If you’re passionate about creating a corporate culture that promotes financial and <br />
                         human well-being while protecting the environment, let’s meet.
                        </Typography>
            </div>
            <div className={classes.contactSection2}>
                <div>
                    <Link to='/service' onClick={() => scroll.scrollToTop(0, 0)} >
                        <Typography variant="h4" gutterBottom color='textSecondary' >SERVICES </Typography>
                    </Link>
                    <div>
                        <Link to='/service' onClick={() => scroll.scrollTo(100)}>
                            <Typography variant="h5" gutterBottom color='textSecondary' >Customer Experience</Typography>
                        </Link>
                        <Link to='/service' onClick={() => scroll.scrollTo(450)}>
                            <Typography variant="h5" gutterBottom color='textSecondary' >Marketing Services</Typography>
                        </Link>
                        <Link to='/service' onClick={() => scroll.scrollTo(800)}>
                            <Typography variant="h5" gutterBottom color='textSecondary' >Pr And Media Relations</Typography>
                        </Link>
                        <Link to='/service' onClick={() => scroll.scrollTo(1000)}>
                            <Typography variant="h5" gutterBottom color='textSecondary' >Events and Content Production</Typography>
                        </Link>

                    </div>
                </div>
                <div>
                    <Typography variant="h4" gutterBottom color='textSecondary' >HELP</Typography>
                    <div>
                        <Typography variant="h5" gutterBottom color='textSecondary' >How It Works</Typography>
                        <Typography variant="h5" gutterBottom color='textSecondary' >Contact Support</Typography>
                        <Typography variant="h5" gutterBottom color='textSecondary' >Privacy Policy</Typography>
                    </div>
                </div>
                <div>
                    <Typography variant="h4" gutterBottom color='textSecondary' >COMPANY</Typography>
                    <div>
                        <Typography variant="h5" gutterBottom color='textSecondary' >Blog</Typography>
                        <Typography variant="h5" gutterBottom color='textSecondary' >Pricing</Typography>
                        <Typography variant="h5" gutterBottom color='textSecondary' >Our Team</Typography>
                    </div>
                </div>
                <div>
                    <Typography variant="h4" gutterBottom color='textSecondary' >GET IN TOUCH</Typography>
                    <div>
                        <Typography variant="h5" gutterBottom color='textSecondary' >
                            Feel free to get in touch with <br />us via email.
                            </Typography>
                        <Typography variant="h5" gutterBottom color='textSecondary' >
                            <img src={Images.email} alt="" />
                                peternjeru&#64;pemtergroup.com
                                </Typography>
                        <Typography variant="h5" gutterBottom color='textSecondary' >
                            <img src={Images.phone2} alt="" />
                            +(254) 711 493559
                            </Typography>
                        <Typography variant="h5" gutterBottom color='textSecondary' >
                            <img src={Images.location} alt="" />
                            Nairobi, Kenya
                            </Typography>
                        <div>
                            <a href="https://twitter.com/PemterMarketing" target="_blank" rel="noopener noreferrer">
                                <img src={Images.twitter} alt="" />
                            </a>
                            <a href="https://www.facebook.com/pemtergroup" target="_blank" rel="noopener noreferrer">
                                <img src={Images.facebook} alt="" />
                            </a>
                            <a href="#" style={{ cursor: "not-allowed" }} >
                                <img src={Images.instagram} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Contacts
