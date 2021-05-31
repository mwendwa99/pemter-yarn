import React from 'react';
import './styles.css';
import { Container, makeStyles, Typography, Divider, Grid } from '@material-ui/core';
import Images from '../../assets/index'


const useStyle = makeStyles((theme) => ({
    main: {
        position: "absolute",
        // background: "rgba(0,0,0,0)",
        textAlign: "center",
        top: 100,
        // height: "80%",
        width: "100%",
        maxWidth: "100vw",
        // [theme.breakpoints.down('xs')]
    },
    section1: {
        height: "100%",
        width: "100%",
        // maxWidth: "100vw",
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
        backgroundColor: "#283772",
        padding: theme.spacing(5),

    },
}));

const Service = () => {

    const classes = useStyle();

    return (
        <section className={classes.main}>
            <section className={classes.section1}>
                <Container maxWidth="md"  >
                    <Grid container className={classes.textMain}>
                        <Grid item sm={9} md={9} xs={9} lg={12}>
                            <Typography
                                variant="h2"
                                color="secondary"
                            >Our Services
                            <Divider />
                            </Typography>
                            <Typography variant="body1" maxWidth="sm" >
                                We are driven by delivering on measurable objectives and the mission you set us. <br />
                            We take pride in creating campaigns and communicationthat deliver on your bottom line, transform processes and shape your customer perception.<br />
                             We help you segment, get the right leads anddrive your business strategy to conversion.
                            </Typography >
                        </Grid>
                    </Grid>
                    {/* <div className={classes.circle} >
                    
                </div> */}
                </Container>
            </section>
            <section className={classes.section2} >
                <Container maxWidth="md">
                    <Grid className={classes.textMain}>
                        <Grid item sm={9} md={9} xs={9} lg={12}>
                            <Typography
                                variant="h3"
                                color="secondary"
                            >Customer Experience
                            <Divider />
                            </Typography>
                            <div style={{ display: "flex", gap: 50 }} >
                                <div style={{ display: "grid", placeItems: "center" }} >
                                    <img src={Images.slide1} alt="" />
                                </div>
                                <Typography variant="body1" maxWidth="sm" style={{ textAlign: "left" }} >
                                    Customer Experience is fast becoming the most important competing and distinguishing
                                factor for businesses.<br />
                                Through our mystery shoppers, we analyse your customer experience, monitor
                                processes and together craft a bespoke and detailed customer experience. <br /> We offer
                                training for your staff and dealers on a new standard way of doing things.
                                Through scheduled mystery shopping, we ensure standards are followed and that
                                trainings have a lasting and measurable impact developing to engraved CX culture.
                            </Typography >
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <section className={classes.section2} >
                <Container maxWidth="md">
                    <Grid className={classes.textMain}>
                        <Grid item sm={9} md={9} xs={9} lg={12}>
                            <Typography
                                variant="h3"
                                color="secondary"
                            >Marketing Services
                            <Divider />
                            </Typography>
                            <div style={{ display: "flex", gap: 50 }} >
                                <div style={{ display: "grid", placeItems: "center" }} >
                                    <img src={Images.slide2} alt="" />
                                </div>
                                <Typography variant="body1" maxWidth="sm" style={{ textAlign: "left" }} >
                                    Strategy is dynamic and active. That is why we take the greatest care to go into an in depth analysis of
                                    your business, the competition and the market. We get to understand what matters to your customer
                                    and together set clear and measurable objectives. Our strategic analysis coupled with an understanding
                                    of your segmentation, targeting and positioning helps craft business tactics that give you a lasting
                                    competitive advantage.<br /><br />
                                    From SEO, web design, leads management, community management to social media content calendars,
                                    we offer solutions that fit all needs and sizes of businesses.<br /><br />
                                    We produce a wide range of creative material, from social media content, print adverts, billboards,
                                    corporate literature, promotional point of sale materials etc.
                            </Typography >
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <section className={classes.section2} >
                <Container maxWidth="md">
                    <Grid className={classes.textMain}>
                        <Grid item sm={9} md={9} xs={9} lg={12}>
                            <Typography
                                variant="h3"
                                color="secondary"
                            >PR and Media Relations
                            <Divider />
                            </Typography>
                            <div style={{ display: "flex", gap: 50 }} >
                                <div style={{ display: "grid", placeItems: "center" }} >
                                    <img src={Images.slide3} alt="" />
                                </div>
                                <Typography variant="body1" maxWidth="sm" style={{ textAlign: "left" }} >
                                    PR is the persuasion business to stakeholders and publics. It is effective in convincing an audience, in
                                    promoting your idea, spurring purchase, supporting your position, or publicising accomplishments.<br /><br />
                                    At Pemter, we are storytellers. We create narratives to advance your organisation's agenda. We
                                    analyse the organisation, find the positive messages and translate those messages into positive stories.<br /><br />
                                    We strategically anticipate, analyse and interpret public opinion, attitudes and issues that might
                                    impact, for good or ill, the operations and plans of the organisation. We help you put together a crisis
                                    management strategy ensuring you are always prepared.<br /><br />
                                    Our experienced team will negotiate on your behalf giving you better value and better media
                                    placements. We additionally monitor your visibility giving you insights
                            </Typography >
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <section className={classes.section2} >
                <Container maxWidth="md">
                    <Grid className={classes.textMain}>
                        <Grid item sm={9} md={9} xs={9} lg={12}>
                            <Typography
                                variant="h3"
                                color="secondary"
                            >Events and Content Production
                            <Divider />
                            </Typography>
                            <div style={{ display: "flex", gap: 50 }} >
                                <div style={{ display: "grid", placeItems: "center" }} >
                                    <img src={Images.slide4} alt="" />
                                </div>
                                <Typography variant="body1" maxWidth="sm" style={{ textAlign: "left" }} >
                                    We believe an exceptional, entertaining event shouldn’t be time-consuming or stressful to
                                    you. Our bespoke end-to-end event management and production services use fresh,<br />
                                    innovative ideas to delight and engage your crowd and do ALL the heavy lifting so you
                                    don’t have to.<br /><br />
                                    Take advantage of our years of experience in exhibitions, roadshows, product launches,
                                    auto clinics and a wide variety of other events. From specialised equipment such as flame<br />
                                    throwers and custom stages we offer a wide range of services to suit all tastes and budgets.
                            </Typography >
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </section>
    )
}

export default Service
