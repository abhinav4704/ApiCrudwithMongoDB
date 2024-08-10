const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter Product name"]
    },
    quantity: {
        type: Number,
        required: [true, "Please enter Quantity"],
        default: 0
    },
    price: {
        type: Number,
        required: [true, "Please enter Price"],
        
    },
    image: {
        type: String,
        required: false
    }
}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
