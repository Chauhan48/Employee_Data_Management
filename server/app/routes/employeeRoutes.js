const employeeController = require('../controller/employeeController');

const employeeRoutes = require('express').Router();

employeeRoutes.post('/add-employee', employeeController.addEmployee);

module.exports = employeeRoutes