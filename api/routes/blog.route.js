const express = require('express');
const blogController = require('../controllers/blog.controller');
const { authenticate } = require('../middleware/user.authenticate');
const joiValidator = require("../validators")
const { blogSchema } = require("../validators/blog.schema")
require('express-async-errors');


const router = express.Router();

router.post("/", authenticate, joiValidator(blogSchema), blogController.create);
router.get("/", blogController.getAll);
router.patch("/:blogId", blogController.update);
router.get("/getbyid", blogController.getOne);
router.delete("/:blogId", blogController.delete);


module.exports = router;
