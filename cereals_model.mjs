import mongoose from 'mongoose';

const cerealSchema = mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: String, required: true }
}, {collection: "cereals"});

const Cereal = mongoose.model("Cereal", cerealSchema);

const findCereals = async () => {
    const query = Cereal.find()
    return query.exec();
}

export { findCereals };