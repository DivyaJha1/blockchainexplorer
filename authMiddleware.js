const jwt = require('jsonwebtoken');

// Middleware function to authenticate JWT tokens
const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ error: 'Forbidden' });
        }
        req.user = decoded;
        next();
    });
};

module.exports = authenticateToken;
