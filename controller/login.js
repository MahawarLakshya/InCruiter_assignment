const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const user = require('../model/user')
const loginUser = async (req, resp) => {
    try {
        const { email, password } = req.body
        const existuser = await user.findOne({ email })

        if (!existuser) 
            return resp.status(400).json({ message: "Invalid credentials" });

        const passwordMatch = await bcrypt.compare(password, existuser.password)
        if (!passwordMatch)
             return resp.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ username: existuser.email }, process.env.secret_key, { expiresIn: '1h' });
        resp.cookie('token', token, { httpOnly: true, secure: false });
        
        resp.json({ message: "Login successful", token });
    }
    catch (err) {
        resp.status(500).json({ message: "Error occured:", err });
    }
}
module.exports = loginUser