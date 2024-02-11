const Transaction = require('../models/Transaction.js');

exports.saveTransactionDetails = async (req, res) => {
    try {
        const { hash, blockNumber, from, to, value } = req.body;

        // Create a new transaction document
        const newTransaction = new Transaction({
            hash,
            blockNumber,
            from,
            to,
            value
            // Add more fields as needed
        });

        // Save the transaction document to the database
        await newTransaction.save();

        // Send a success response back to the client
        res.status(200).json({ message: 'Transaction details saved successfully' });
    } catch (error) {
        console.error('Error saving transaction details:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
