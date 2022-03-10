import React, { useState, useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";
import { AiFillStar } from "react-icons/ai";
import { Container } from "react-bootstrap";
import "./Home.css";

function Home() {

    const [cereals, setCereals] = useState([]);

    const loadCereals = async () => {
        const response = await fetch('/cereals');
        const data = await response.json();
        setCereals(data);
    }

    useEffect(() => {
        loadCereals();
    }, []);

    /* Note: I had a very hard converting my JSON data into a JavaScript object. I ended up following the tutorial found on
    "https://medium.com/@sandhya.sadanandan/javascript-how-to-construct-an-array-of-json-objects-using-map-d1a513727008" */
    const listCereals = cereals.map(function(cereal){
        let info = {"name": cereal.cerealName,
                    "image": cereal.image,
                    "brand": cereal.brand,
                    "price": cereal.price,
                    "rating": cereal.rating }
        return info;
    });

    const [filterName, setFilterName] = useState("")
    const [filterBrand, setFilterBrand] = useState("")
    const [filterRating, setFilterRating] = useState("")

    const stars1 = [< AiFillStar color="orange" fontSize="1.5em"/>]
    const stars2 = [< AiFillStar color="orange" fontSize="1.5em"/>,< AiFillStar color="orange" fontSize="1.5em"/>]
    const stars3 = [< AiFillStar color="orange" fontSize="1.5em"/>,< AiFillStar color="orange" fontSize="1.5em"/>,< AiFillStar color="orange" fontSize="1.5em"/>]
    const stars4 = [< AiFillStar color="orange" fontSize="1.5em"/>,< AiFillStar color="orange" fontSize="1.5em"/>,< AiFillStar color="orange" fontSize="1.5em"/>,< AiFillStar color="orange" fontSize="1.5em"/>]
    const stars5 = [< AiFillStar color="orange" fontSize="1.5em"/>,< AiFillStar color="orange" fontSize="1.5em"/>,< AiFillStar color="orange" fontSize="1.5em"/>,< AiFillStar color="orange" fontSize="1.5em"/>,< AiFillStar color="orange" fontSize="1.5em"/>]
    
    const retrieveProducts = JSON.parse(localStorage.getItem("productArray"))

    const [productArray, setProductArray] = useState(retrieveProducts != null ? retrieveProducts : [])
    
    useEffect(() => {localStorage.setItem("productArray", JSON.stringify(productArray));}, [productArray])
   
    return (
        
        <>        
        <div>
            <Header />
        <div>
        <Container className='py-3 ml-auto' >
            <p>
                <b>Search by:&nbsp;&nbsp;&nbsp;&nbsp;</b>
                <b>Popular:&nbsp;&nbsp;&nbsp;</b> 
                Cheerios<input type="radio" value="Cheerios" name="name" onChange={(e)=> setFilterName(e.target.value)}/>
                &nbsp;&nbsp;
                Chex<input type="radio" value="Chex" name="name" onChange={(e)=> setFilterName(e.target.value)}/> 
                &nbsp;&nbsp;
                Raisin Bran<input type="radio" value="Raisin Bran" name="name" onChange={(e)=> setFilterName(e.target.value)}/> 
                &nbsp;&nbsp;
                All<input type="radio" value="" name="name" onChange={(e)=> setFilterName(e.target.value)}/>
                &nbsp;&nbsp;&nbsp;&nbsp;

                <b>Brand:&nbsp;&nbsp;&nbsp;</b>
                General Mills<input type="radio" value="General Mills" name="brand" onChange={(e)=> setFilterBrand(e.target.value)}/>
                &nbsp;&nbsp;
                Kellogs<input type="radio" value="Kellogs" name="brand" onChange={(e)=> setFilterBrand(e.target.value)}/> 
                &nbsp;&nbsp;
                Post<input type="radio" value="Post" name="brand" onChange={(e)=> setFilterBrand(e.target.value)}/> 
                &nbsp;&nbsp;
                Quaker Oats<input type="radio" value="Quaker Oats" name="brand" onChange={(e)=> setFilterBrand(e.target.value)}/> 
                &nbsp;&nbsp;
                All<input type="radio" value="" name="brand" onChange={(e)=> setFilterBrand(e.target.value)}/>
                &nbsp;&nbsp;&nbsp;&nbsp;

                <b>Rating:&nbsp;&nbsp;&nbsp;</b>
                1<input type="radio" value="1" name="rating" onChange={(e)=> setFilterRating(e.target.value)}/>
                &nbsp;&nbsp;
                2<input type="radio" value="2" name="rating" onChange={(e)=> setFilterRating(e.target.value)}/> 
                &nbsp;&nbsp;
                3<input type="radio" value="3" name="rating" onChange={(e)=> setFilterRating(e.target.value)}/>
                &nbsp;&nbsp;
                4<input type="radio" value="4" name="rating" onChange={(e)=> setFilterRating(e.target.value)}/>
                &nbsp;&nbsp;
                5<input type="radio" value="5" name="rating" onChange={(e)=> setFilterRating(e.target.value)}/> 
                &nbsp;&nbsp;
                All<input type="radio" value="" name="rating" onChange={(e)=> setFilterRating(e.target.value)}/>
                &nbsp;&nbsp;
                </p>
        </Container>
        <Row>
            {listCereals.filter(listCereal => (listCereal.name.includes(filterName) && listCereal.brand.includes(filterBrand)) && listCereal.rating.includes(filterRating)).map(filteredlistCereal => (
            <Col className="py-3" md={3}>
                <Card>
                    <img src={filteredlistCereal.image} alt ='' />
                    <div><b>{ filteredlistCereal.name }</b></div>
                    <div><b>Price: ${filteredlistCereal.price}</b></div>
                    <div><b>Rating: {filteredlistCereal.rating==("1") ? stars1 : ""} {filteredlistCereal.rating==("2") ? stars2 : ""} {filteredlistCereal.rating==("3") ? stars3 : ""}
                    {filteredlistCereal.rating==("4") ? stars4 : ""} {filteredlistCereal.rating==("5") ? stars5 : ""}</b></div>
                    <button onClick={() => {setProductArray((productArray) => productArray.concat(filteredlistCereal.name, filteredlistCereal.price))}}>Add to Cart</button>
                </Card>
            </Col>
            
            ))}
        </Row>
        </div>
            <Footer />
        </div>

        </>
    );
};

export default Home;