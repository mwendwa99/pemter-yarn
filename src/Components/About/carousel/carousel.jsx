import React from 'react';
import { Carousel } from 'react-bootstrap';
import { makeStyles, Typography } from '@material-ui/core';

import Images from '../../../assets/index';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import './styles.css'



const useStyle = makeStyles((theme) => ({
    item: {
        width: "100%",
        textAlign: "left",
        display: "flex",
        flexDirection: "row",
        gap: 20,
        [theme.breakpoints.down('sm')]: {
            gap: 10,

        },
        [theme.breakpoints.down('xs')]: {
            '& img': {
                display: "none",
            }
        },
    },
}));

const CarouselSlider = () => {

    const classes = useStyle();

    return (
        <Carousel
            className='carousel'
            prevLabel={null}
            nextLabel={null}
            bsPrefix='carousel'
        >
            <Carousel.Item bsPrefix='carousel-item' interval={500}>
                <div className={classes.item} >
                    <img lassName="d-block" style={{ objectFit: "contain" }} src={Images.slide2new} alt="" />
                    <div>
                        <Typography varaint="h2" gutterBottom >Marketing Service</Typography>
                        <Typography variant="body2" gutterBottom>
                            Strategy is dynamic and active. That is why we take the greatest care to go into an in depth analysis of
                            your business, the competition and the market.<br /> We get to understand what matters to your customer
                            and together set clear and measurable objectives.
                        </Typography>
                        <Link to='/service' onClick={() => scroll.scrollToTop()} >
                            <img style={{ objectFit: "contain" }} src={Images.readMore} alt="" />
                        </Link>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <div className={classes.item}>
                    <img style={{ objectFit: "contain" }} src={Images.slide1new} alt="" />
                    <div>
                        <Typography varaint="h2" gutterBottom >Customer Experience</Typography>
                        <Typography variant="body2" gutterBottom>
                            Customer Experience is fast becoming the most important competing and distinguishing factor for businesses.<br />
                            Through our mystery shoppers, we analyse your customer experience, monitor processes and together craft a bespoke and detailed customer experience.
                        </Typography>
                        <Link to='/service' onClick={() => scroll.scrollToTop()}>
                            <img style={{ objectFit: "contain" }} src={Images.readMore} alt="" />
                        </Link>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item >
                <div className={classes.item} >
                    <img style={{ objectFit: "contain" }} src={Images.slide3new} alt="" />
                    <div>
                        <Typography varaint="h2" gutterBottom >PR and Media Relations</Typography>
                        <Typography variant="body2" gutterBottom >
                            PR is the persuasion business to stakeholders and publics.<br /> It is effective in convincing an audience, in
                            promoting your idea, spurring purchase, supporting your position, or publicising accomplishments.
                        </Typography>
                        <Link to='/service' onClick={() => scroll.scrollToTop()}>
                            <img style={{ objectFit: "contain" }} src={Images.readMore} alt="" />
                        </Link>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item >
                <div className={classes.item} >
                    <img style={{ objectFit: "contain" }} src={Images.slide4new} alt="" />

                    <div>
                        <Typography varaint="h2" gutterBottom >Events and Content Production</Typography>
                        <Typography variant="body2" gutterBottom >
                            We believe an exceptional, entertaining event shouldn???t be time-consuming or stressful to
                            you.<br /> Our bespoke end-to-end event management and production services use fresh,
                            innovative ideas to delight and engage your crowd and do ALL the heavy lifting so you
                            don???t have to.
                        </Typography>
                        <Link to='/service' onClick={() => scroll.scrollToTop()}>
                            <img style={{ objectFit: "contain" }} src={Images.readMore} alt="" />
                        </Link>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>

    )
}

export default CarouselSlider