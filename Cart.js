import React from "react";
import { Link } from "react-router-dom";
import CheckoutHeader from "./CheckoutHeader";
import Footer from "./Footer";

function cart() {
    
    return (
        <>
        <CheckoutHeader />
        <h3>Your products:</h3>
        <Link to="/">Return to cereal selection</Link>
        <h3>Your shipping information:</h3>
        <container>
        <form>
            <div className="py-3">
            <label>First Name: <input type="text"/></label>
            <label>Last Name: <input type="text"/></label>
            </div>
            <div className="py-3">
            <label>Email: <input type="text"/></label>
            </div>
            <div className="py-3">
            <label>Street Address: <input type="text"/></label>
            </div>
            <div className="py-3">
            <label>City: <input type="text"/></label>
            <label>State: <input type="text"/></label>
            <label>Zip Code: <input type="text"/></label>
            </div>
        </form>
        </container>
        <Link to='./CheckedOut'>Check Out</Link>


        <Footer />
        </>
    )
}

export default cart;