import React from 'react';
import './styles.css';
import { Container, makeStyles, Typography, Divider, Grid } from '@material-ui/core'
import Images from '../../assets/index';


import Carousel from './carousel/carousel'

const useStyle = makeStyles((theme) => ({
    main: {
        position: "absolute",
        textAlign: "center",
        top: 570,
        maxWidth: "100vw",
    },
    section1: {
        position: "relative",
        height: "75vh",
        width: "100%",
        maxWidth: "100vw",
        background: 'linear-gradient(to bottom, rgba(0,0,0, 0) 50% , #283772 50%)',

    },
    circle: {
        position: "absolute",
        height: "100%",
        background: "#283772",
        width: "100%",
        maxWidth: "100vw",
        borderRadius: "50%",

        display: "flex",
        flexDirection: "column",
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
        display: "flex",
        flexDirection: "row",
        background: "url('" + Images.exp + "')no-repeat center center ",
        backgroundSize: "contain",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%",
        height: "100%",
        "& img": {
            objectFit: "contain",
        },
        "& div": {
            width: "45rem"
        },
        padding: theme.spacing(4),

    },
    section3: {
        background: "#283772",
        height: "auto",
    },
    numbers: {
        display: "flex",
        justifyContent: "Center",
        padding: theme.spacing(3, 0),
    },
    section4: {
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
        background: "#283772",
        height: "100%",
        width: "100%",
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
        background: "#283772",
        height: "100%",
        width: "100%",
    },
    testimonials: {
        display: "inline-block",
        justifyContent: "center",
        '& img': {
            padding: theme.spacing(1),
        },
    },
    section7: {
        height: "100%",
        background: "#283772",
        padding: theme.spacing(2),
    },
    contact: {
        padding: theme.spacing(2),
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
    section8: {
        height: "100%",
        background: "#283772",
        padding: theme.spacing(2, 5),
    },

}));

const About = () => {

    const classes = useStyle();

    return (
        <section className={classes.main}>
            <section className={classes.section1}>
                <div className={classes.circle} >
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
                            <br />
                            We are driven by delivering on measurable objectives and the mission you set us.
                            We take pride in creating campaigns and communication that deliver on your bottom line, transform processes and shape your customer perception. We help you segment, get the right leads and drive your business strategy to conversion.
                            <br />
                            We believe in finding a cultural connect. Building content that your customers will want to share enthusiastically on multiple platforms with their peers.
                            Our dedicated and highly experienced team deliver a personalized and round the clock service to ensure your business is always top of mind.
                            <br />
                            We are a Kenyan based company comprising of professionals with a wide range of experience from diverse industries such as marketing, customer experience, IT, Petroleum, Retail, Hospitality, Research, Entertainment and Events Management.
                            Pemter Group Limited has interests in Marketing and Customer Experience Consultancy, Events, Agriculture, Real Estate, Health Care, Film Production, Research and Development, Hospitality and Automotive sectors.
                            <br />
                            Our philosophy is grounded on integrity, fair business, value, hard work, belief in people and pioneering innovation.
                            We look forward to a successful partnership.
                    </Typography >
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </section>
            <section className={classes.section2}>
                <Typography variant="h2" color="secondary" gutterBottom > We provide various kind <br />    of services for you</Typography>
                <Divider />
                <div className={classes.slider}>
                    <img src={Images.customerExp} alt="" />
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
                <Container maxWidth="xl" >
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
                                <img src={Images.discoverBtn} alt="" />
                            </Typography>
                        </div>
                    </div>
                </Container>
            </section>
            <section className={classes.section5} >
                <Container>
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
                <Container maxWidth="lg">
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
                            <Typography variant="h4" gutterBottom color='textSecondary' >SERVICES </Typography>
                            <div>
                                <Typography variant="h5" gutterBottom color='textSecondary' >Customer Experience</Typography>
                                <Typography variant="h5" gutterBottom color='textSecondary' >Marketing Services</Typography>
                                <Typography variant="h5" gutterBottom color='textSecondary' >Pr And Media Relations</Typography>
                                <Typography variant="h5" gutterBottom color='textSecondary' >Events And Content </Typography>
                                <Typography variant="h5" gutterBottom color='textSecondary' >Production</Typography>

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
                                    <img src={Images.twitter} alt="" />
                                    <img src={Images.facebook} alt="" />
                                    <img src={Images.instagram} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <section className={classes.section8} >
                <Typography align="left" >&copy;2021. All Rights reserved by Brian Mwendwa</Typography>
            </section>
        </section>
    );
}

export default About;