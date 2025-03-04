const bcrypt = require('bcrypt')
const user = require('../model/user')
const resetPassword = async (req, resp) => {
    try {
        const loggedInUser = req.user.username
        if (!loggedInUser) 
            return resp.status(401).json({ message: "Authentication failed: No user data found" });
        
        const { email, oldpassword, newpassword } = req.body
        if (loggedInUser !== email)
            return resp.status(403).json({ message: "Unauthorized: You can only change your own password" });

        const existuser = await user.findOne({ email });
        if (!existuser) return resp.status(400).json({ message: "User not found" });

        const passwordMatch = await bcrypt.compare(oldpassword, existuser.password)
        if (!passwordMatch) 
            return resp.status(400).json({ message: "Old password is incorrect" });

        const newhashedPassword = await bcrypt.hash(newpassword, 10);
        existuser.password = newhashedPassword;
        await existuser.save();
        
        resp.json({ message: "Password updated successfully" });
    }
    catch (err) {
        resp.status(500).json({ message: "Error occured:", err });
    }
}

module.exports = resetPassword;