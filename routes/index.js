var express = require("express");
const router = express.Router({ mergeParams: true });
const employeesController = require("../controller/employees.controller");
const adminController = require("../controller/admin.controller");

const auth = require("../middleware/auth");

/* GET home page. */
router.post("/login", adminController.getSignIn);

router.get("/getEmployees", employeesController.getEmployees);
router.get("/:id", employeesController.getEmployeeById);
router.post("/", employeesController.createEmployee);
router.put("/:id", employeesController.updateEmployees);
router.delete("/:id", employeesController.deleteEmployeesById);

module.exports = router;
