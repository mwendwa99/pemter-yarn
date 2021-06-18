import React from 'react';
import './styles.css';
import { Nav, Navbar } from 'react-bootstrap'
import Images from '../../assets/index';
import { makeStyles } from "@material-ui/core";
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

const UseStyle = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(0, 1),
        [theme.breakpoints.down('xs')]: {
            "& div": {
                display: "grid",
                placeItems: "center",
                background: "#283772",
            },
        },
        textDecoration: "none",
    },
    'root.active': {
        background: "#fff"
    },
}))

const navBar = () => {


    const classes = UseStyle();

    return (
        <Navbar className={classes.root} variant='dark' expand="lg" fixed="top">
            <Navbar.Brand href="/">
                <img src={Images.logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto" justify="center">
                    <Nav.Link>
                        <Link style={{ textDecoration: "none", }} smooth to="/" onClick={() => scroll.scrollToTop(0, 0)} >
                            Home
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link style={{ textDecoration: "none", }} smooth to="/" onClick={() => scroll.scrollTo(500)}>
                            About Us
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link style={{ textDecoration: "none", }} to='/service' onClick={() => scroll.scrollToTop(0, 0)}>
                            Services
                        </Link>
                    </Nav.Link>
                    <Nav.Link  >
                        <Link style={{ textDecoration: "none", }} to='/' onClick={() => scroll.scrollTo(10000)}>
                            Contacts
                        </Link>
                    </Nav.Link>
                </Nav>
                <Nav className={classes.root} >
                    <img src={Images.phone} alt="" />
                    <div>+(254) 711 493559</div>
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    )
}

export default navBar