const nodemailer = require('nodemailer');
const twilio = require('twilio');
const admin = require('firebase-admin');

// Initialize Firebase Admin SDK (replace with your Firebase service account credentials)
const serviceAccount = require('./path/to/serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Function to send email notification
const sendEmailNotification = async (recipient, subject, message) => {
    try {
        // Configure nodemailer transporter (replace placeholders with actual SMTP credentials)
        const transporter = nodemailer.createTransport({
            host: 'smtp.example.com',
            port: 587,
            secure: false,
            auth: {
                user: 'your@example.com',
                pass: 'your_password'
            }
        });

        // Send email
        await transporter.sendMail({
            from: 'your@example.com',
            to: recipient,
            subject: subject,
            text: message
        });

        console.log('Email notification sent successfully');
    } catch (error) {
        console.error('Error sending email notification:', error);
    }
};

// Function to send SMS notification
const sendSMSNotification = async (recipient, message) => {
    try {
        // Twilio configuration (replace placeholders with actual Twilio credentials)
        const accountSid = 'your_account_sid';
        const authToken = 'your_auth_token';
        const client = twilio(accountSid, authToken);

        // Send SMS using Twilio
        await client.messages.create({
            body: message,
            from: 'your_twilio_phone_number',
            to: recipient
        });

        console.log('SMS notification sent successfully');
    } catch (error) {
        console.error('Error sending SMS notification:', error);
    }
};

// Function to send push notification
const sendPushNotification = async (deviceToken, title, body) => {
    try {
        const message = {
            notification: {
                title: title,
                body: body
            },
            token: deviceToken
        };

        // Send the message to the device token
        const response = await admin.messaging().send(message);
        
        console.log('Push notification sent successfully:', response);
    } catch (error) {
        console.error('Error sending push notification:', error);
    }
};

module.exports = {
    sendEmailNotification,
    sendSMSNotification,
    sendPushNotification
};
