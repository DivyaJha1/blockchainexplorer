// models/transaction.js

const mongoose = require('mongoose');

// Define schema for transaction model
const transactionSchema = new mongoose.Schema({
    hash: {
        type: String,
        required: true,
        unique: true
    },
    blockNumber: {
        type: Number,
        required: true
    },
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    }
    // Add more fields as needed
});

// Define methods for transaction model
transactionSchema.statics.findByHash = async function(hash) {
    return await this.findOne({ hash });
};

transactionSchema.methods.toJSON = function() {
    const transactionObject = this.toObject();
    delete transactionObject.__v; // Remove version key
    return transactionObject;
};

// Create and export Transaction model
const Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;
