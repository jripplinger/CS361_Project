import * as cereals from "./cereals_model.mjs";
import * as orders from "./orders_model.mjs";
import express from "express";
import mongoose from 'mongoose';

const app = express();

const PORT = 5000;

mongoose.connect(
    "mongodb://localhost:27017/cereals_db",
    { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

app.use(express.urlencoded({extended: true}));

app.use(express.json());

app.get("/cereals", (req, res) => {
    cereals.findCereals()
        .then(cereals => {
            res.json(cereals);
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({ Error: "Request failed" });
        });
});

app.get("/orders", (req, res) => {
    orders.findOrders()
        .then(orders => {
            res.json(orders);
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({ Error: "Request failed" });
        });
});

app.post('/orders', (req, res) => {
    orders.createOrder(req.body.firstName, req.body.lastName, req.body.streetAddress, req.body.city, req.body.state, req.body.zipCode, req.body.creditCardNumber, req.body.expirationDate, req.body.csc, req.body.total)
        .then(order => {
            res.status(201).json(order);
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({ Error: 'Request failed' });
        });
});

app.listen(PORT, () => {
    console.log("Server listening on port 5000...");
});
