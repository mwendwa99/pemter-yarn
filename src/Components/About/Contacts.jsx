import React from 'react';
import { Container, Typography, Divider, makeStyles } from '@material-ui/core';
import Images from '../../assets/index';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll'

const useStyles = makeStyles((theme) => ({
    contact: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",


    },
    contactSection2: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        textAlign: "left",
        '& div': {
            color: "white",
            textDecoration: "none"
        },
    },
    links: {
        textDecoration: "none"
    },
    icons: {
        display: 'flex',
        gap: 10
    },
}))

const Contacts = () => {


    const classes = useStyles();

    return (
        <Container className={classes.contact} >
            <Typography variant="h2"

            >Contact Us</Typography>
            <Divider style={{ marginBottom: "1rem", }} />
            <Typography variant="h3" >Let’s Build Your Competitive Advantage</Typography>
            <div className={classes.contactSection2}>
                <div>
                    <Link className={classes.links} to='/service' onClick={() => scroll.scrollToTop(0, 0)} >
                        <Typography variant="h4" gutterBottom style={{ textDecoration: "none" }} >SERVICES </Typography>
                    </Link>
                    <div>
                        <Link className={classes.links} to='/service' onClick={() => scroll.scrollTo(100)}>
                            <Typography variant="h5" gutterBottom  >Customer Experience</Typography>
                        </Link>
                        <Link className={classes.links} to='/service' onClick={() => scroll.scrollTo(450)}>
                            <Typography variant="h5" gutterBottom  >Marketing Services</Typography>
                        </Link>
                        <Link className={classes.links} to='/service' onClick={() => scroll.scrollTo(800)}>
                            <Typography variant="h5" gutterBottom  >Pr And Media Relations</Typography>
                        </Link>
                        <Link className={classes.links} to='/service' onClick={() => scroll.scrollTo(1000)}>
                            <Typography variant="h5" gutterBottom  >Events and Content Production</Typography>
                        </Link>

                    </div>
                </div>
                {/* <div>
                    <Typography variant="h4" gutterBottom color='textSecondary' >HELP</Typography>
                    <div>
                        <Typography variant="h5" gutterBottom color='textSecondary' >How It Works</Typography>
                        <Typography variant="h5" gutterBottom color='textSecondary' >Contact Support</Typography>
                        <Typography variant="h5" gutterBottom color='textSecondary' >Privacy Policy</Typography>
                    </div>
                </div> */}
                {/* <div>
                    <Typography variant="h4" gutterBottom color='textSecondary' >COMPANY</Typography>
                    <div>
                        <Typography variant="h5" gutterBottom color='textSecondary' >Blog</Typography>
                        <Typography variant="h5" gutterBottom color='textSecondary' >Pricing</Typography>
                        <Typography variant="h5" gutterBottom color='textSecondary' >Our Team</Typography>
                    </div>
                </div> */}
                <div>

                    <Typography variant="h4" gutterBottom  >GET IN TOUCH</Typography>
                    <div>
                        <Typography variant="h5" gutterBottom  >
                            <img src={Images.email} alt="" />
                            engageus&#64;pemtergroup.com
                        </Typography>
                        <Typography variant="h5" gutterBottom  >
                            <img src={Images.phone2} alt="" />
                            +(254) 711 493559
                        </Typography>
                        <Typography variant="h5" gutterBottom  >
                            <img src={Images.location} alt="" />
                            Nairobi, Kenya
                        </Typography>
                        <div className={classes.icons}>
                            <a href="https://twitter.com/PemterMarketing" target="_blank" rel="noopener noreferrer">
                                <img src={Images.twitter} alt="" />
                            </a>
                            <a href="https://www.facebook.com/pemtergroup" target="_blank" rel="noopener noreferrer">
                                <img src={Images.facebook} alt="" />
                            </a>
                            <a href="#" style={{ cursor: "not-allowed" }} >
                                <img src={Images.instagram} alt="" />
                            </a>
                            <a href="https://linkedin.com/in/pemter-group-37592b20a/" target="_blank" rel="noopener noreferrer">
                                <img width="36" height="36" src={Images.linkedin} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Contacts
