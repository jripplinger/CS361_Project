import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";


function Header() {
    return (
      <header>
          <Container style={{backgroundColor: "#89ABE3FF"}}>
              <Row>
                  <Col className= 'py-3 ml-auto'>
                        <h1>The Cereal Shop</h1>
                        <h4>The place for free samples</h4>
                  </Col>
                  <Col className= 'py-3 ml-auto'>
                        <div></div>
                        <div></div>
                        </Col>
                        <Col className= 'py-3 ml-auto'>
                        <div></div>
                        <div></div>
                  </Col>
                  <Col className= 'py-3 ms-auto'>
                      <h4><AiOutlineShoppingCart fontSize="2.5em"/><Link to='/Cart'>Check out</Link></h4>
                  </Col>
              </Row>
          </Container>

      </header>
    );
  }
  
  export default Header;