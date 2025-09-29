const joi = require('joi');

const joiSchema = {};

joiSchema.addEmployeeSchema = {
    body: joi.object({
        name: joi.string().required(),
        email: joi.string().required(),
        position: joi.string().required()
    })
}

module.exports = joiSchema;