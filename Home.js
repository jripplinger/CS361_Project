import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col } from "react-bootstrap";
import cereals from "../cereals";
import Header from "./Header";
import Footer from "./Footer";
import { AiFillStar } from "react-icons/ai";

function Home() {
    return (
        
        <div>
            <Header />
        <div>
        <Row>
            {cereals.map((cereal) => (
                <Col className="py-3" md={3}>
                    <Card>
                        <img src={cereal.image} alt='' />
                        <div><b>{ cereal.name }</b></div>
                        <div><b>Rating: { cereal.rating } <AiFillStar color="orange" fontSize="1.5em"/></b></div>
                        <Link to="/Cart">Add to Cart</Link>  
                    </Card>
                </Col>
        ))}
        </Row>
    </div>
        <Footer />
    </div>
  );
};

export default Home;