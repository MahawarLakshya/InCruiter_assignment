const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const authcheck = (req, resp, next) => {
    const token = req.cookies.token

    if (!token) {
        return resp.status(401).json({ message: 'No token provided, authentication failed' });
    }

    try {
        const decoded = jwt.verify(token, process.env.secret_key);
        req.user = decoded; // Attaching decoded user information from token to the request object
        next(); 
    } catch (err) {
        resp.status(401).json({ message: 'Authentication failed', err });
    }
};

module.exports = authcheck;