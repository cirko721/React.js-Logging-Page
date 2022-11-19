import React from 'react';
import { Container, Col, Row, } from 'react-bootstrap';
import classes from "./NavBar.module.css";

const NavBar = (props) => {
    return (
        <div className={classes.navbar}>
            <Container>
                <Row>
                    <Col md={8}>
                    <h1>The simple navbar</h1>
                    </Col>
                    <Col md={4}>
                    <ul>
                        <li>About</li>
                        <li>Gallery</li>
                    </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default NavBar;