import React from 'react';
import { Carousel } from 'react-bootstrap';
import { makeStyles, Typography } from '@material-ui/core';

import Images from '../../../assets/index';


const useStyle = makeStyles((theme) => ({
    carouselRoot: {
        height: "100%",
        width: "100%",
    },
    item: {
        padding: theme.spacing(0, 10),
        textAlign: "left",
    },
}));

const CarouselSlider = () => {

    const classes = useStyle();

    return (
        <Carousel className={classes.carouselRoot} >
            <Carousel.Item className={classes.item} interval={1000}>
                <Typography varaint="h2" gutterBottom >Customer Experience</Typography>
                <Typography variant="body2" gutterBottom>
                    Customer Experience is fast becoming the most important competing and distinguishing factor for businesses.<br />
                        Through our mystery shoppers, we analyse your customer experience, monitor processes and together craft a bespoke and detailed customer experience.
                        </Typography>
                <a href="#">
                    <img src={Images.readMore} alt="" />
                </a>
            </Carousel.Item>
            <Carousel.Item className={classes.item} interval={500}>
                <Typography varaint="h2" gutterBottom >Marketing Service</Typography>
                <Typography variant="body2" gutterBottom>
                    Strategy is dynamic and active. That is why we take the greatest care to go into an in depth analysis of
                    your business, the competition and the market.<br /> We get to understand what matters to your customer
                    and together set clear and measurable objectives.
                        </Typography>
                <a href="#">
                    <img src={Images.readMore} alt="" />
                </a>
            </Carousel.Item>
            <Carousel.Item className={classes.item} >
                <Typography varaint="h2" gutterBottom >PR and Media Relations</Typography>
                <Typography variant="body2" gutterBottom >
                    PR is the persuasion business to stakeholders and publics.<br /> It is effective in convincing an audience, in
                    promoting your idea, spurring purchase, supporting your position, or publicising accomplishments.
                        </Typography>
                <a href="#">
                    <img src={Images.readMore} alt="" />
                </a>
            </Carousel.Item>
            <Carousel.Item className={classes.item} >
                <Typography varaint="h2" gutterBottom >Events and Content Production</Typography>
                <Typography variant="body2" gutterBottom >
                    We believe an exceptional, entertaining event shouldn’t be time-consuming or stressful to
                    you.<br /> Our bespoke end-to-end event management and production services use fresh,
                    innovative ideas to delight and engage your crowd and do ALL the heavy lifting so you
                    don’t have to.
                        </Typography>
                <a href="#">
                    <img src={Images.readMore} alt="" />
                </a>
            </Carousel.Item>
        </Carousel>

    )
}

export default CarouselSlider
