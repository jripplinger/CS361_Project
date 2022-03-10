import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PhoneNumber from "./PhoneNumber";

function Footer() {
    return (
      <footer>
          <Container>
              <Row>
                  <Col className= "py-3 ml-auto">
                        <div><b>Address:</b></div>
                        <div>123 Eggs and Bacon Street</div>
                        <div>Breakfastville, CA 90012</div>
                  </Col>
                  <Col className= "py-3 ml-auto">
                        <div></div>
                  </Col>
                  <Col className= "py-3 ml-auto">
                        <div></div>
                  </Col>
                  <Col className= "py-3 mr-auto">
                        <div><b>Phone:</b></div>
                        <PhoneNumber />
                        <div><b>Email:</b></div>
                        <div>fakebreakfastshop@gmail.com</div>
                  </Col>
              </Row>
          </Container>

      </footer>
    );
  }
  
  export default Footer;