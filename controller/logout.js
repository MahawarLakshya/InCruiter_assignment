const logoutUser = (req, resp) => {
    resp.clearCookie('token');
    resp.json({ message: "Logged out successfully!" });
}
module.exports = logoutUser;