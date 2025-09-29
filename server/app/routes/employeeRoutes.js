const employeeController = require('../controller/employeeController');
const { schemaValidation } = require('../middleware/schemaValidation');
const joiSchema = require('../utils/joiSchema');

const employeeRoutes = require('express').Router();

employeeRoutes.post('/add-employee', schemaValidation(joiSchema.addEmployeeSchema), employeeController.addEmployee);

employeeRoutes.post('/update-employee', schemaValidation(joiSchema.updateEmployeeSchema), employeeController.updateEmployee);

module.exports = employeeRoutes