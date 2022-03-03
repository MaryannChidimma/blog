const blogSevice = require('../services/blog.service');
const CustomError = require('../utils/custom.error');
const readingTime = require('../utils/textMinRead');
class BlogController {

    async create(req, res) {
        const data = req.body

        data.readingTime = readingTime(data.description)

        const result = await blogSevice.createPost(data);

        res.status(201).send({
            success: true, message: "blog post created",
            data: result
        });
    }

    async getAll(req, res) {
        const result = await blogSevice.getAll();
        res.status(200).send({
            success: true, message: "blog posts gotten succesfully.",
            data: result
        });
    }
    async getOne(req, res) {
        const blog = await blogSevice.getById(req.query.id);
        if (!blog) throw new CustomError("blog not founf")

        const count = blog.noOfViews + 1;

        const result = await blogSevice.update(blog, { noOfViews: count })
        res.status(201).send({
            success: true, message: "blog post gotten succesfully.",
            data: result
        });
    }
    async update(req, res) {
        res.status(201).send({ success: true, message: "blog post updated succesfully." })
    }
    async delete(req, res) {
        res.status(201).send({ success: true, message: "blog post deleted succesfully." })
    }
}



module.exports = new BlogController();