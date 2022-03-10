import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Header.css";


function Header() {
    return (
        <header>
            <Container style={{backgroundColor: "#2E86C1"}}>
                <Row>
                    <Col className= 'py-4'>
                        <h1>The Cereal Shop</h1>
                    </Col>
                    <Col className= 'py-4'>
                        <h3><AiOutlineShoppingCart fontSize="2.5em"/>
                        <Link to='/Cart' style={{ color: '#ffffff' }} >Check out</Link>
                        </h3>
                    </Col>

                </Row>
            </Container>
        </header>
    );
  }
  
export default Header;