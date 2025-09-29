const joi = require('joi');

const joiSchema = {};

joiSchema.addEmployeeSchema = {
    body: joi.object({
        name: joi.string().required(),
        email: joi.string().email().required(),
        position: joi.string().required()
    })
}

joiSchema.updateEmployeeSchema = {
    body: joi.object({
        employeeId: joi.number().required(),
        name: joi.string().required(),
        email: joi.string().email().required(),
        position: joi.string().required()
    })
}

joiSchema.deleteEmployeeSchema = {
    query: joi.object({
        employeeId: joi.number().required(),
    })
}

joiSchema.filterEmployeeSchema = {
    query: joi.object({
        name: joi.string().optional(),
        position: joi.string().optional()
    })
}

module.exports = joiSchema;