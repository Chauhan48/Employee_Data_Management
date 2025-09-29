const joi = require('joi');

const joiSchema = {};

joiSchema.addEmployeeSchema = {
    body: joi.object({
        name: joi.string().required(),
        email: joi.string().required(),
        position: joi.string().required()
    })
}

joiSchema.updateEmployeeSchema = {
    body: joi.object({
        employeeId: joi.number().required(),
        name: joi.string().required(),
        email: joi.string().required(),
        position: joi.string().required()
    })
}

joiSchema.deleteEmployeeSchema = {
    query: joi.object({
        employeeId: joi.number().required(),
    })
}

module.exports = joiSchema;