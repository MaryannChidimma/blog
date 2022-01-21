const express = require('express');
const userController = require('../controllers/user.controller');
require('express-async-errors');

const router = express.Router();

router.post("/", userController.create);
router.get("/", userController.getAll);
router.patch("/:blogId", userController.update);
router.get("/getbyid", userController.getOne);


module.exports = router;
