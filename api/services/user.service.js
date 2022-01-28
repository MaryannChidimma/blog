const userModel = require('../models/user.model');
const CustomError = require('../utils/custom.error')

class userService {
    async createUser(data) {

        const existingUser = await userModel.findOne({ email: data.email })
        if (existingUser) {
            throw new CustomError("User already exist")
        }
        let createData = await userModel.create(data);
        return createData
    }

    async getAll(email) {
        return await userModel.findOne({ email })
    }

    async findByEmail(email) {
        return userModel.find({ email });
    }

    async updateUser(data, id) {

        return userModel.findByIdAndUpdate(id, data)

    }
}

module.exports = new userService();