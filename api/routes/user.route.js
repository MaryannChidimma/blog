const express = require('express');
const userController = require('../controllers/user.controller');
const { authenticate } = require('../middleware/user.authenticate');
require('express-async-errors');

const router = express.Router();

router.post("/", authenticate, userController.create);
router.get("/", userController.getAll);
router.patch("/:blogId", userController.update);
router.get("/getbyid", userController.getOne);


module.exports = router;
