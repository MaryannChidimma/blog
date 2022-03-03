const userService = require('../services/user.service');
const CustomError = require('../utils/custom.error');
const { hashedPassword, generateToken } = require("../utils/auth.handlers")

class userController {

    async create(req, res) {

        const password = await hashedPassword(req.body.password)
        const user = await userService.createUser({ ...req.body, password });
        const token = generateToken(user)
        res.status(201).send({
            success: true, message: "user created",
            data: { user, token }

        });
    }

    async getAll(req, res) {
        const result = await userService.getAll();
        res.status(200).send({
            success: true, massage: "users gotten succesfully.",
            data: result
        });
    }
    async getOne(req, res) {
        console.log('this is the output', req.query);
        const result = await userService.getById(req.query.id);
        res.status(201).send({
            success: true, massage: "user gotten succesfully.",
            data: result
        });
    }
    async update(req, res) {
        res.status(201).send({ success: true, massage: "user updated succesfully." })
    }

}



module.exports = new userController();