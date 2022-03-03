const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Blog = require('./api/routes/blog.route');
const User = require("./api/routes/user.route")
require('dotenv').config();


// require("express-async-errors")



mongoose.connect(process.env.MONGO_URL).then(() => { console.log("Connected") })
    .catch(err => console.log(err));

app.use(morgan("dev"));

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.status = 200;
    res.json({ response: "server is live" });
});

app.use("/blog", Blog);
app.use("/blog/user", User)

app.use((req, res, next) => {
    const err = new Error("Not found");
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({ success: "false", error: err.message })
});


module.exports = app;