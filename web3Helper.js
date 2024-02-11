const Web3 = require('web3');

// Initialize web3 provider (replace with your Ethereum node URL)
const web3 = new Web3('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');

// Function to get Ethereum balance for an address
const getBalance = async (address) => {
    try {
        const balance = await web3.eth.getBalance(address);
        return web3.utils.fromWei(balance, 'ether');
    } catch (error) {
        console.error('Error getting balance:', error);
        return null;
    }
};

// Function to get list of transactions for an address
const getTransactions = async (address) => {
    try {
        const transactions = await web3.eth.getTransactionsByAddress(address);
        return transactions;
    } catch (error) {
        console.error('Error getting transactions:', error);
        return null;
    }
};

// Function to get transaction details by transaction hash
const getTransactionDetails = async (txHash) => {
    try {
        const transaction = await web3.eth.getTransaction(txHash);
        return transaction;
    } catch (error) {
        console.error('Error getting transaction details:', error);
        return null;
    }
};

module.exports = {
    getBalance,
    getTransactions,
    getTransactionDetails
};
