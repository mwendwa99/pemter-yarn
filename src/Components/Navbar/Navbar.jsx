import React from 'react';
import './styles.css';
import { Nav, Navbar } from 'react-bootstrap'
import Images from '../../assets/index';
import { makeStyles } from "@material-ui/core"

const UseStyle = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(0, 1),
        [theme.breakpoints.down('xs')]: {
            "& div": {
                display: "grid",
                placeItems: "center",
                background: "#283772",
            },
        }
    },
}))

const navBar = () => {


    const classes = UseStyle();

    return (
        <Navbar className={classes.root} variant='dark' expand="sm" fixed="top">
            <Navbar.Brand href="#home">
                <img src={Images.logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto" justify="center">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">About Us</Nav.Link>
                    <Nav.Link href="#link">Services</Nav.Link>
                    <Nav.Link href="#link">Projects</Nav.Link>
                    <Nav.Link href="#link">Contact</Nav.Link>
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