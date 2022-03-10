import React, { useState } from "react";
import CheckoutHeader from "./CheckoutHeader";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

function Cart() {
    const cartItems = JSON.parse(localStorage.getItem("productArray"));

    const nameCartItems = [];

    const priceCartItems = [];

    for (var pos = 0; pos < cartItems.length; pos += 2) {
        nameCartItems.push(cartItems[pos])
    };

    for (var pos = 1; pos < cartItems.length; pos += 2) {
        priceCartItems.push(cartItems[pos])
    };

    const placeholderPrevPos = 0
    const roughSum = (priceCartItems.reduce((previousPosition, currentPosition) => previousPosition + currentPosition, placeholderPrevPos));
    const total = roughSum.toFixed(2);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [streetAddress, setStreetAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [creditCardNumber, setCreditCardNumber] = useState("");
    const [expirationDate, setExpirationDate] = useState("");
    const [csc, setCsc] = useState("");

    const navigate = useNavigate();

    const addOrder = async () => {
        const newOrder = { firstName, lastName, streetAddress, city, state, zipCode, creditCardNumber, expirationDate, csc, total };
        const response = await fetch('/orders', {
            method: 'POST',
            body: JSON.stringify(newOrder),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        navigate("/Cart/CheckedOut");
    
    };

    localStorage.setItem("firstName", JSON.stringify(firstName));

    return (
        <>

        <CheckoutHeader />
        <br></br>
        
        <h4>Your cart:</h4>
        <table name = "cart">
            <tr>
                <th>
                    <b>Cereal</b>
                </th>
                <th>
                    <b>Price</b>
                </th>
            </tr>
            <td> 
                {nameCartItems.map(nameCartItem => { return <tr>{nameCartItem}</tr>})}
            </td>
            <td>
                {priceCartItems.map(priceCartItem => { return <tr>${priceCartItem}</tr>})}
            </td>
            <tr>
                <td>
                    Total: 
                </td>
                <td>
                    ${total}
                </td>
            </tr>
        </table>

        <br></br>
        <h4>Payment information:</h4>
            <input type="text" placeholder="First Name: " value= { firstName } onChange= { e => setFirstName(e.target.value) }/>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" placeholder="Last Name: " value= { lastName } onChange= { e => setLastName(e.target.value) }/>
            <br></br>
            <br></br>
            <input type="text" placeholder= "Street Address: " value= { streetAddress } onChange= { e => setStreetAddress(e.target.value) }/>
            <br></br>
            <br></br>
            <input type="text" placeholder= "City: " value= { city } onChange= { e => setCity(e.target.value) }/>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" placeholder= "State: " value= { state } onChange= { e => setState(e.target.value) }/>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" placeholder= "Zip Code: " value= { zipCode } onChange= { e => setZipCode(e.target.value) }/>
            <br></br>
            <br></br>
            <input type="text" placeholder= "Credit Card Number: " value= { creditCardNumber } onChange= { e => setCreditCardNumber(e.target.value) }/>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" placeholder= "Expiration Date (MM/YY): " value= { expirationDate } onChange= { e => setExpirationDate(e.target.value) }/>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" placeholder= "CSC: " value= { csc } onChange= { e => setCsc(e.target.value) }/>
            <br></br>
            <br></br>
            <button onClick={addOrder}>Submit Order</button>
        </> 

    )
}

export default Cart;