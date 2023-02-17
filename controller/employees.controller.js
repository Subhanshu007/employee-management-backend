
const httpStatus = require('http-status');
const employeeService = require('../services/employees.service');
const ApiError = require('../utils/ApiError');



async function createEmployee(req, res) {
  try {
    const employee = employeeService.createEmployee(req.body);
    return res.status(200).send(employee);
  } catch (err) {
    throw err;
  }
}

async function getEmployees(req,res) {
  const employeesDetails = employeeService.getEmployees();
  return res.status(201).send(employeesDetails);
}

async function getEmployeeById(req, res) {
    const { id } = req.params;
    const employee = employeeService.getEmployeeById(id);
    return res.status(201).send(employee);
}

async function updateEmployees(req, res) {
    const { id } = req.params;

  const employee = employeeService.updateEmployees(id, req.body);
  return res.status(201).send(employee);
}

/**
 * function to delete 
 * @param {string} id ID
 */

async function deleteEmployeesById(req, res) {
    const { id } = req.params;
    const employee = employeeService.deleteEmployeesById(id);
  return res.status(201);

}

module.exports = {
    createEmployee,
    getEmployees,
    getEmployeeById,
    updateEmployees,
    deleteEmployeesById,
};
