import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";

const NavigationBar = () => {

    return (
        <div>

            <Navbar bg="primary" expand="md">
                <Container>
                    <Navbar.Brand href="/">CRUD2</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/create">Create</Nav.Link>
                            <Nav.Link href="/blog">Blog</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default NavigationBar;