// config/config.js

// Configuration settings
const config = {
    // Web3 provider URL (replace with your Ethereum node URL)
    web3ProviderUrl: 'https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID',

    // SMTP settings for sending email notifications
    smtp: {
        host: 'smtp.example.com',
        port: 587,
        secure: false,
        auth: {
            user: 'your@example.com',
            pass: 'your_password'
        }
    },

    // Twilio settings for sending SMS notifications
    twilio: {
        accountSid: 'your_account_sid',
        authToken: 'your_auth_token',
        phoneNumber: 'your_twilio_phone_number'
    },

    // Firebase Cloud Messaging (FCM) settings for sending push notifications
    firebase: {
        serviceAccountKeyPath: './path/to/serviceAccountKey.json'
    }
};

module.exports = config;
