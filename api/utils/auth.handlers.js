const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const hashedPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(password, salt)

}
const generateToken = (user, time = "24h") => {
    return jwt.sign({ id: user.id, email: user.email },
        "chidimma", { expiresIn: time })
}

const verifyToken = (token) => {
    return jwt.verify(token, "chidimma")
}

module.exports = {
    hashedPassword,
    generateToken,
    verifyToken
}