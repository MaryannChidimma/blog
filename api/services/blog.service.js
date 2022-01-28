const BlogModel = require('../models/blog.model');
const CustomError = require('../utils/custom.error')
class blogService {
    async createPost(data) {
        const newBlog = await model.create(data);
        return newBlog;
    }

    async getAll() {
        return BlogModel.find()
    }
    async getById(id) {
        return BlogModel.findById(id);
    }
}

module.exports = new blogService();