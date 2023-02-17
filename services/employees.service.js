
const httpStatus = require('http-status');
const { employees } = require('../models');
const ApiError = require('../utils/ApiError');



async function createEmployee(body) {
  try {
    body._id = String(2* new Date()); 
    console.log(body + "data");
    return employees.create(body);
  } catch (err) {
    
    throw err;
  }
}

async function getEmployees() {
  const employeesDetails = employees.find({isActive: true});
  return employeesDetails;
}

async function getEmployeeById(id, projection = {}) {
  return employees.findOne({ _id: id, isActive: true }).select(projection).lean(true);
}

async function updateEmployees(id, body) {
  return employees.findOneAndUpdate({ _id: id }, { $set: body }, { new: true }).lean(true);
}

/**
 * function to delete conversation by ID
 * @param {string} id ID of the conversation
 */

async function deleteEmployeesById(id) {
  const query = {
    isActive: false,
  };
  return employees.findOneAndUpdate(
    {
      _id: id,
    },
    { $set: query }
  );
}

module.exports = {
    createEmployee,
    getEmployees,
    getEmployeeById,
    updateEmployees,
    deleteEmployeesById,
};
