const { Schema, model } = require('mongoose');
const readingTime = require('../utils/textMinRead');

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    author: {
        type: String,
        required: true
    },

    noOfViews: {
        type: Number,
    },
    readingTime: {
        type: Number
    },
    email: {
        type: String
    }

});

module.exports = model("blog", blogSchema);