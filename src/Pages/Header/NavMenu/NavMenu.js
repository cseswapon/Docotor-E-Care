import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './NavMenu.css';
const NavMenu = () => {
    const { user, logout } = useAuth();
    // console.log(user);
    return (
        <Navbar className="background-color" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="#home" className="align-items-center d-flex">
                    <i className="fas fa-briefcase-medical logo-icon"></i>
                    <span className="fw-bold fs-1 ms-3 text-black-50">Doctor E Care</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto nav-menu align-items-center">
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
                    {user?.email && <span className="fw-bolder" style={{color:"red", fontSize:"20px", margin:"10px"}}>  
                        {user?.displayName}
                    </span>}
                    {
                        !user?.email ? <NavLink
                        to="/login"
                        activeStyle={{
                            color: "#1976d3",
                            borderBottom:"2px solid #1976d3"
                        }}
                        >
                        Login
                        </NavLink>:<button onClick={logout} className="btn btn-danger">Logout</button>
                    }
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavMenu;