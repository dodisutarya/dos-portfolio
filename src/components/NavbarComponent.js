import React from 'react';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const NavbarComponent = () => {
    return (
        <Navbar className="nav-style" bg="dark" variant="dark" expand="lg">
            <div className="container">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className="mr-3" href="#home">Home</Nav.Link>
                        <Nav.Link className="mr-3" href="#link">My Works</Nav.Link>
                        <Nav.Link className="mr-3" href="#link">Blog</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>                    
                </Navbar.Collapse>
            </div>
        </Navbar>

    )
}

export default NavbarComponent;