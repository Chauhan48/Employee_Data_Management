const employeeController = require('../controller/employeeController');
const { schemaValidation } = require('../middleware/schemaValidation');
const joiSchema = require('../utils/joiSchema');

const employeeRoutes = require('express').Router();

employeeRoutes.post('/add-employee', schemaValidation(joiSchema.addEmployeeSchema), employeeController.addEmployee);

employeeRoutes.put('/update-employee', schemaValidation(joiSchema.updateEmployeeSchema), employeeController.updateEmployee);

employeeRoutes.delete('/delete-employee', schemaValidation(joiSchema.deleteEmployeeSchema), employeeController.deleteEmployee);

employeeRoutes.get('/filter-employee', schemaValidation(joiSchema.filterEmployeeSchema), employeeController.filterEmployee);

employeeRoutes.get('/get-employees', employeeController.getEmployees);

module.exports = employeeRoutes