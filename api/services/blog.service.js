const BlogModel = require('../models/blog.model');
const CustomError = require('../utils/custom.error')
class blogService {
    async createPost(data) {
        return await model.create(data);
    }

    async getAll() {
        return BlogModel.find()
    }
    async getById(id) {
        return BlogModel.findById(id);
    }
}

module.exports = new blogService();