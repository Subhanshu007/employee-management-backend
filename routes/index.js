var express = require('express');
const router = express.Router({ mergeParams: true });
const employeesController  = require('../controller/employees.controller');
const auth = require('../middleware/auth');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', adminController.getSignIn);

router.get('/getEmployees',  employeesController.getEmployees);
router.get('/:id', employeesController.getEmployeeById);
router.post('/', employeesController.createEmployee);
router.put('/:id', employeesController.updateEmployees);
router.delete('/:id', employeesController.deleteEmployeesById);

module.exports = router;
