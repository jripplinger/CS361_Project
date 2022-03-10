import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Header.css";


function Header() {
    return (
        <header>
            <Container style={{backgroundColor: "#2E86C1" }}>
                <Row>
                    <Col className= 'py-4'>
                        <h1>The Cereal Shop</h1>
                    </Col>
                </Row>
            </Container>
        </header>
    );
  }
  
export default Header;