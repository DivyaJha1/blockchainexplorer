// models/address.js

const mongoose = require('mongoose');

// Define schema for address model
const addressSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true,
        unique: true
    },
    threshold: {
        type: Number,
        required: true
    },
    notificationMethod: {
        type: String,
        required: true,
        enum: ['email', 'sms', 'push']
    }
});

// Define methods for address model
addressSchema.statics.findByAddress = async function(address) {
    return await this.findOne({ address });
};

addressSchema.methods.toJSON = function() {
    const addressObject = this.toObject();
    delete addressObject.__v; // Remove version key
    return addressObject;
};

// Create and export Address model
const Address = mongoose.model('Address', addressSchema);
module.exports = Address;
