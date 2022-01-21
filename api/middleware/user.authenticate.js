
const userService = require("../services/user.service")
const { verifyToken } = require("../utils/auth.handlers")
const CustomError = require("../utils/custom.error")

exports.authenticate = async (req, res, next) => {

    const token = req.headers["x-auth-token"]
    console.log(token)
    if (!token) throw new CustomError("Not Authorized access", 401)
    try {
        const decodedUser = verifyToken(token)
        const user = await userService.findByEmail(decodedUser.email)
        if (!user) throw new CustomError("User does not exist", 401)
        next()
    }
    catch (err) {
        next(err)
    }
} 