import React from "react";
import CheckoutHeader from "./CheckoutHeader";
import { Container, Row, Col } from 'react-bootstrap';
import Footer from "./Footer";

function CheckedOut() {
    return (
        <div>
        <CheckoutHeader />
        <Container>
            <Row>
                <Col className="py-2" md={4}> 
                    <h2></h2>
                    <h2></h2>
                </Col>
                <Col className="text-center" md={4}> 
                    <h1>Thank you</h1>
                    <h1>for your order.</h1>
                    <h2>Please allow 2-3 weeks</h2>
                    <h2>for delivery.</h2>
                </Col>
                <Col className="py-2" md={4}> 
                    <h2></h2>
                    <h2></h2>
                </Col>
            </Row>  
        </Container>
        <Footer />
        </div>
    )
};

export default CheckedOut;