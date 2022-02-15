import React from "react";
import { Container, Row, Col } from "react-bootstrap";


function CheckoutHeader() {
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
                  <Col className= 'py-3 ml-auto'>
                        <div></div>
                        <div></div>
                    </Col>
              </Row>
          </Container>

      </header>
    );
  }
  
  export default CheckoutHeader;