const express = require('express');
const blogController = require('../controllers/blog.controller');
const { authenticate } = require('../middleware/user.authenticate');
const joiValidator = require("../validators")
const { blogSchema } = require("../validators/blog.schema")
require('express-async-errors');
//authenticate

const router = express.Router();

router.post("/add", joiValidator(blogSchema), blogController.create);
router.get("/get-all", blogController.getAll);
router.patch("/:blogId", blogController.update);
router.get("/get-one", blogController.getOne);
router.delete("/:blogId", blogController.delete);


module.exports = router;
