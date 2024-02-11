// models/tokenPrice.js

const mongoose = require('mongoose');

// Define schema for token price model
const tokenPriceSchema = new mongoose.Schema({
    tokenSymbol: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },
    timestamp: {
        type: Date,
        required: true
    }
});

// Define static methods for token price model
tokenPriceSchema.statics.findByTokenSymbol = async function(tokenSymbol) {
    return await this.findOne({ tokenSymbol });
};

// Define instance methods for token price model
tokenPriceSchema.methods.toJSON = function() {
    const tokenPriceObject = this.toObject();
    delete tokenPriceObject._id; // Remove _id field
    delete tokenPriceObject.__v; // Remove version key
    return tokenPriceObject;
};

// Create and export TokenPrice model
const TokenPrice = mongoose.model('TokenPrice', tokenPriceSchema);
module.exports = TokenPrice;
