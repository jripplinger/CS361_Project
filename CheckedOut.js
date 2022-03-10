import React from "react";
import CheckoutHeader from "./CheckoutHeader";
import { Container, Row, Col } from 'react-bootstrap';

function CheckedOut() {

    const retrievedFirstName = JSON.parse(localStorage.getItem("firstName"))

    return (
        <>

        <div>
        <CheckoutHeader />
        <Container>
            <Row>
                <Col className="py-2" md={4}> 
                    <h2></h2>
                    <h2></h2>
                </Col>
                <Col className="text-center" md={4}> 
                    <h2>Thank you for your</h2>
                    <h2>order {retrievedFirstName}!</h2>
                    <h2>Please allow 1-2 weeks</h2>
                    <h2>for delivery.</h2>
                </Col>
                <Col className="py-2" md={4}> 
                    <h2></h2>
                    <h2></h2>
                </Col>
            </Row>  
        </Container>
        </div>
        </>
    )
};

export default CheckedOut;