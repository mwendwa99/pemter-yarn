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
        // [theme.breakpoints.down('xs')]
    },
    section1: {
        height: "100%",
        width: "100%",
        maxWidth: "100vw",
        margin: 0,
        padding: 0,
        borderRadius: "150% 150% 0 0",
        backgroundColor: "#283772",

    },
    textMain: {
        display: "grid",
        // flexDirection: "column",
        placeItems: "center",
        // padding: theme.spacing(3, 3),
    },
    section2: {
        width: "100%",
        maxWidth: "100vw",
        height: "100%",
        background: "#283772",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
    },
    slider: {
        background: "url('" + Images.exp + "')no-repeat center center ",
        backgroundSize: "contain",
        display: "grid",
        placeItems: "center",
        alignItems: "center",
        width: "80%",
        height: "100%",

    },
    section3: {
        padding: theme.spacing(3),
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
        padding: theme.spacing(3),
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
        height: "100%",
        background: "#283772",
        padding: theme.spacing(3),
    },
    section8: {
        // height: "100%",
        background: "#283772",
        padding: theme.spacing(3),
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
                        </Grid>
                        {/* <div className={classes.circle} >
                            
                        </div> */}
                    </Container>
                </section>
                <section className={classes.section2}>
                    <Typography variant="h2" color="secondary" gutterBottom > We provide various kind <br />    of services for you</Typography>
                    <Divider />
                    <div className={classes.slider}>
                        <Carousel />
                    </div>
                </section>
                <section className={classes.section3} >
                    <Container maxWidth="lg">
                        <Typography variant="h2" gutterBottom> Why Choose Us <br /> For Future Projects</Typography>
                        <Divider />
                        <Typography variant="body1" gutterBottom>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Eius ratione amet deleniti, praesentium odio nemo doloribus maxime, nostrum at necessitatibus quod unde, illo ullam.
                            Cumque exercitationem a animi unde sint.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Ipsum, explicabo similique omnis laudantium ipsa, nam blanditiis velit id et neque
                            veniam recusandae! In quas quod assumenda dicta dolorem recusandae vel!
                    </Typography>
                        <div className={classes.numbers}>
                            <img src={Images.one} alt="" />
                            <img src={Images.two} alt="" />
                            <img src={Images.three} alt="" />
                            <img src={Images.four} alt="" />
                            <img src={Images.five} alt="" />
                        </div>
                    </Container>
                </section>
                <section className={classes.section4} >
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
                </section>
                <section className={classes.section5} >
                    <Container style={{ paddingTop: "3rem" }} maxWidth="lg">
                        <div>
                            <Typography color="secondary" variant="h2" gutterBottom >Working Progress</Typography>
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
                                <Typography variant="h5" gutterBottom >Listen</Typography>
                                <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Architecto quaerat dicta eum libero earum praesentium voluptates, ipsa recusandae quo,
                                aliquid quam, debitis commodi molestias in rerum at blanditiis harum et.
                            </Typography>
                            </div>
                            <div>
                                <Typography variant="h5" gutterBottom>Plan and Budget</Typography>
                                <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Architecto quaerat dicta eum libero earum praesentium voluptates, ipsa recusandae quo,
                                aliquid quam, debitis commodi molestias in rerum at blanditiis harum et.
                            </Typography>
                            </div>
                            <div>
                                <Typography variant="h5" gutterBottom>Work &amp; Revision</Typography>
                                <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Architecto quaerat dicta eum libero earum praesentium voluptates, ipsa recusandae quo,
                                aliquid quam, debitis commodi molestias in rerum at blanditiis harum et.
                            </Typography>
                            </div>
                            <div>
                                <Typography variant="h5" gutterBottom>Delivery &amp; Feedback</Typography>
                                <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Architecto quaerat dicta eum libero earum praesentium voluptates, ipsa recusandae quo,
                                aliquid quam, debitis commodi molestias in rerum at blanditiis harum et.
                            </Typography>
                            </div>
                        </div>
                    </Container>
                </section>
                <section className={classes.section6} >
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
                </section>
                <section className={classes.section8} >
                    <Typography align="left" >&copy;2021. All Rights reserved by Brian Mwendwa</Typography>
                </section>
            </section>
        </div>
    );
}

export default About;