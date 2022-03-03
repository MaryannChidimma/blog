const BlogModel = require('../models/blog.model');
const CustomError = require('../utils/custom.error')
class blogService {
    async createPost(data) {
        const createData = await BlogModel.create(data);
        return createData
    }

    async getAll() {
        return BlogModel.find()
    }
    async getById(id) {
        return BlogModel.findById(id);
    }
    async update(id, data) {
        return BlogModel.findByIdAndUpdate(id, data, { new: true })
    }
}

module.exports = new blogService();