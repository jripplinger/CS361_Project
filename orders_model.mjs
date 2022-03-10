import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    streetAddress: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: String, required: true },
    creditCardNumber: { type: String, required: true },
    expirationDate: { type: String, required: true },
    csc: { type: String, required: true },
    total: { type: Number, required: true }
}, { collection: "orders"});


const Order = mongoose.model("Order", orderSchema);

const findOrders = async () => {
    const query = Order.find()
    return query.exec();
}

/**
 * Create an order
 * @param {String} firstName 
 * @param {String} lastName 
 * @param {String} streetAddress
 * @param {String} city
 * @param {String} state
 * @param {String} zipCode
 * @param {String} creditCardNumber
 * @param {String} expirationDate
 * @param {String} csc
 * @param {Number} total
 * @returns A promise.
 */
 const createOrder = async (firstName, lastName, streetAddress, city, state, zipCode, creditCardNumber, expirationDate, csc, total) => {
    const order = new Order({ firstName: firstName, lastName: lastName, streetAddress: streetAddress, city: city, state: state, zipCode: zipCode, creditCardNumber: creditCardNumber, expirationDate: expirationDate, csc: csc, total: total });
    return order.save();
 }


export { findOrders, createOrder };