const BlogModel = require('../models/blog.model');
const CustomError = require('../utils/custom.error')
class blogService {
    async createPost(data) {

        if (!title || !description || !author) throw new CustomError("Validation failed");
        let createData = await model.create(data);
        if (!createData) {

        }
        return createData
    }

    async getAll() {
        return BlogModel.find()
    }
    async getById(id) {
        return BlogModel.findById(id);
    }
}

module.exports = new blogService();