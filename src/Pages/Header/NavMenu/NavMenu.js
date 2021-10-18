import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './NavMenu.css';
const NavMenu = () => {
    return (
        <Navbar className="background-color" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="#home" className="align-items-center d-flex">
                    <i className="fas fa-briefcase-medical logo-icon"></i>
                    <span className="fw-bold fs-1 ms-3 text-black-50">Doctor Care</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto nav-menu">
                    <NavLink
                    to="/home"
                    activeStyle={{
                        color: "#1976d3",
                        borderBottom:"2px solid #1976d3"
                    }}
                    >
                    Home
                    </NavLink>
                    <NavLink
                    to="/about"
                    activeStyle={{
                        color: "#1976d3",
                        borderBottom:"2px solid #1976d3"
                    }}
                    >
                    About
                    </NavLink>
                    <NavLink
                    to="/support"
                    activeStyle={{
                        color: "#1976d3",
                        borderBottom:"2px solid #1976d3"
                    }}
                    >
                    Support
                    </NavLink>
                    <NavLink
                    to="/help"
                    activeStyle={{
                        color: "#1976d3",
                        borderBottom:"2px solid #1976d3"
                    }}
                    >
                    Help
                    </NavLink>
                    <NavLink
                    to="/login"
                    activeStyle={{
                        color: "#1976d3",
                        borderBottom:"2px solid #1976d3"
                    }}
                    >
                    Login
                    </NavLink>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavMenu;