const CustomError = require("../utils/custom.error")

module.exports = (schema) => (req, res, next) => {
    const errors = validate(req.body || {}, schema)
    console.log(errors)
    if (errors && errors.length > 0) {
        throw new CustomError(errors[0])
    }
    next()
}



const validate = (data, schema) => {
    const { error } = schema.validate(data);

    if (!error) return
    return error.details.map((error) => error.message);
}

