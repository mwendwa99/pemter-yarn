import React from 'react';
import './styles.css';
import { Container, makeStyles, Typography, Divider, Grid } from '@material-ui/core';
import Carousel from './Carousel/carousel';
import Images from '../../assets/index';
import Contacts from './Contacts'



const useStyle = makeStyles((theme) => ({
    main: {
        position: "absolute",
        background: "rgba(0,0,0,0)",
        textAlign: "center",
        top: 570,
        height: "80%",
        width: "100%",
        maxWidth: "100vw",
        [theme.breakpoints.down('xs')]: {
            // top: 650,
            display: "flex",
            flexDirection: "column",
            // justifyContent: "center",
            alignItems: "center",
        },
    },
    section1: {
        height: "100%",
        width: "100%",
        maxWidth: "100vw",
        borderRadius: "150% 150% 0 0",
        backgroundColor: "#283772",
        [theme.breakpoints.down('sm')]: {
            borderRadius: '30px 30px 0 0',
            height: "auto",
        },

    },
    textMain: {
        display: "grid",
        placeItems: "center",
    },
    serviceSection: {
        width: "100%",
        maxWidth: "100vw",
        height: "100%",
        background: "#283772",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        padding: theme.spacing(2),
        paddingTop: theme.spacing(12),
        [theme.breakpoints.down('xs')]: {
            // display: "none",
        }
    },
    slider: {
        background: "url('" + Images.exp + "')no-repeat center center ",
        backgroundSize: "auto",
        display: "flex",
        // placeItems: "center",
        alignItems: "center",
        justifyContent: "center",
        width: "80%",
        height: "100%",

    },
    section3: {
        padding: theme.spacing(1),
        background: "#283772",
        height: "auto",
    },
    numbers: {
        display: "flex",
        justifyContent: "Center",
        padding: theme.spacing(3, 0),
    },
    section4: {
        padding: theme.spacing(3),
        display: "flex",
        background: "#283772",
        height: "100%",
        flexDirection: "column",
    },
    inner: {
        display: "flex",
        alignItems: "center",
        '& div': {
            width: "100%",
        },
    },
    section5: {
        padding: theme.spacing(1),
        background: "#283772",
        height: "100%",
    },
    icons: {
        display: "flex",
        justifyContent: "space-around",
    },
    textArea: {
        padding: theme.spacing(2),
        display: "flex",
        '& div': {
            width: "100%",
        },
    },
    section6: {
        padding: theme.spacing(3),
        background: "#283772",
        height: "100%",
    },
    testimonials: {
        display: "flex",
        gap: 10,
        "& img": {
            maxWidth: "300px"
        },
        // justifyContent: "center",

    },
    section7: {
        background: "#283772",
        padding: theme.spacing(2),
    },
    contact: {
        height: "100%",
        background: "#283772",
        // padding: theme.spacing(5),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
}));

const About = () => {

    const classes = useStyle();

    return (
        <div id="about">
            <section className={classes.main}>
                <section className={classes.section1}>
                    <Container maxWidth="md"  >
                        <Grid container className={classes.textMain}>
                            <Grid item sm={9} md={9} xs={9} lg={12}>
                                <Typography
                                    variant="h2"
                                    color="secondary"
                                    style={{ padding: "2rem" }}
                                >About Us
                                    <Divider />
                                </Typography>
                                <Typography variant="body1" maxWidth="sm" >
                                    Pemter Consultancy Agency is a stem of Pemter Group Limited. We are a customer experience consultancy and a 360-degree marketing, PR and events agency.
                                    We understand the business environment and backed by in-depth intelligence, craft bespoke solutions that give your business a lasting competitive advantage.
                                    <br /><br />
                                    We are driven by delivering on measurable objectives and the mission you set us.
                                    We take pride in creating campaigns and communication that deliver on your bottom line, transform processes and shape your customer perception. We help you segment, get the right leads and drive your business strategy to conversion.
                                    <br /><br />
                                    We believe in finding a cultural connect. Building content that your customers will want to share enthusiastically on multiple platforms with their peers.
                                    Our dedicated and highly experienced team deliver a personalized and round the clock service to ensure your business is always top of mind.
                                    <br /><br />
                                    We are a Kenyan based company comprising of professionals with a wide range of experience from diverse industries such as marketing, customer experience, IT, Petroleum, Retail, Hospitality, Research, Entertainment and Events Management.
                                    Pemter Group Limited has interests in Marketing and Customer Experience Consultancy, Events, Agriculture, Real Estate, Health Care, Film Production, Research and Development, Hospitality and Automotive sectors.
                                    <br /><br />
                                    Our philosophy is grounded on integrity, fair business, value, hard work, belief in people and pioneering innovation.
                                    We look forward to a successful partnership.
                                </Typography >
                            </Grid>
                        </Grid>s
                    </Container>
                </section>
                <section className={classes.serviceSection}>
                    <Container maxWidth='lg'>
                        <Grid container className={classes.textMain}>
                            <Grid item sm={9} md={9} xs={9} lg={12}>
                                <Typography style={{ padding: '10px' }} variant="h2" color="secondary"> Our Services </Typography>
                                <Divider />
                                <div className={classes.slider}>
                                    <Carousel />
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
                <section className={classes.section3} >
                    <Container maxWidth="lg">
                        <Typography variant="h2" gutterBottom> Why Us </Typography>
                        <Divider />
                        <Typography variant="body1" gutterBottom>
                            We take the greatest care to go into an in depth analysis of your business, the competition and the market.<br />
                            We get to understand what matters to your customer and together set clear and measurable objectives.<br />
                            Our strategic analysis coupled with an understanding of your segmentation, <br />
                            targeting and positioning helps craft business tactics that give you a lasting competitive advantage
                        </Typography>
                        <div className={classes.numbers}>
                            <img src={Images.one} alt="" />
                            <img src={Images.two} alt="" />
                            <img src={Images.three} alt="" />
                            <img src={Images.four} alt="" />
                            <img src={Images.five} alt="" />
                        </div>
                        <Typography variant="h3" >Let’s Build Your Competitive Advantage</Typography>
                    </Container>
                </section>
                {/* <section className={classes.section4} >
                    <Container maxWidth="lg" >
                        <div>
                            <Typography color="secondary" variant="h2" gutterBottom>Statistics</Typography>
                            <Typography variant="h5" gutterBottom>we completed 1200+ projects yearly <br />
                            successfully &amp; counting</Typography>
                            <Divider />
                        </div>
                        <div className={classes.inner}>
                            <div><img src={Images.statistics1} alt="" /></div>
                            <div>
                                <img src={Images.statistics2} alt="" />
                            </div>
                            <div>
                                <Typography
                                    variant="h4" gutterBottom align='left'
                                >Ultimate Experiences <br /> with story, emotion and <br /> purpose.</Typography>
                                <Typography align='left' gutterBottom >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida justo sollicitudin, tincidunt nibh vel, viverra lacus.
                                Aenean varius orci a porta imperdiet. Quisque lobortis vitae ante in accumsan.
                        Vestibulum tempus mollis egestas.<br /><br />
                                    <a href="#" style={{ cursor: "not-allowed" }}    >
                                        <img src={Images.discoverBtn} alt="" />
                                    </a>
                                </Typography>
                            </div>
                        </div>
                    </Container>
                </section> */}
                <section className={classes.section5} >
                    <Container style={{ paddingTop: "3rem" }} maxWidth="lg">
                        <div>
                            <Typography color="secondary" variant="h2" gutterBottom >Our Approach</Typography>
                            <Typography variant="h5" gutterBottom >How Does It Work</Typography>
                            <Divider />
                        </div>
                        <div className={classes.icons} >
                            <img src={Images.plan} alt="" />
                            <img src={Images.work} alt="" />
                            <img src={Images.listen} alt="" />
                            <img src={Images.feedback} alt="" />
                        </div>
                        <img src={Images.line} style={{ width: "80%", }} alt="" />
                        <div className={classes.textArea}>
                            <div>
                                <Typography variant="h5" gutterBottom >Crafting your strategy </Typography>
                                <Typography>Reviewing your strategic plan and anchoring your messaging on your main objectives
                                </Typography>
                            </div>
                            <div>
                                <Typography variant="h5" gutterBottom>Strengthening your channels </Typography>
                                <Typography>Capitalising on every-day opportunities to build unrivalled visibility
                                </Typography>
                            </div>
                            <div>
                                <Typography variant="h5" gutterBottom>Amplifying your Brand </Typography>
                                <Typography>Delivering creative ideas and content around your big campaign moments
                                </Typography>
                            </div>
                            <div>
                                <Typography variant="h5" gutterBottom>Curating Shareable Content </Typography>
                                <Typography>We help you cut across the cluster of messaging and leave a lasting mark in the minds of your target audience encouraging them to organically share your content.
                                </Typography>
                            </div>
                        </div>
                    </Container>
                </section>
                {/* <section className={classes.section6} >
                    <Container style={{ paddingTop: "3rem" }} maxWidth="lg" >
                        <div>
                            <Typography variant="h2" color="secondary" gutterBottom>Testimonials</Typography>
                            <Typography variant="h5" gutterBottom>Thanks for your Sweet <br />Words to us</Typography>
                            <Divider />
                            <Typography>Over 10,000 happy clients.  Are you the next one? Here are <br />some words form  friends</Typography>
                        </div>
                        <div className={classes.testimonials} >
                            <img src={Images.testimonial} alt="" />
                            <img src={Images.testimonial} alt="" />
                            <img src={Images.testimonial} alt="" />
                            <img src={Images.testimonial} alt="" />
                        </div>
                    </Container>
                </section>
                <section className={classes.section7}>
                    <Contacts />
                </section>*/}
                {/* <section className={classes.section7} > */}
                <section className={classes.contact}  >
                    {/* <div> */}
                    {/* <Typography variant="h2"
                        color='textSecondary'
                    >Contact Us</Typography>
                    <Divider style={{ marginBottom: "1rem", }} />
                    <Typography variant="h3" >Let’s Build Your Competitive Advantage</Typography> */}
                    {/* </div> */}
                    {/* <div > */}
                    <Contacts />
                    {/* </div> */}
                </section>
                <section className={classes.section7} >
                    <Typography align="left" >&copy;2021. All Rights reserved by pemtergroup</Typography>
                </section>
            </section>
        </div>
    );
}

export default About;