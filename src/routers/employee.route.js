const express = require(`express`);
const EmployeeController = require("../controllers/employee.controller");

const router = express.Router();


// tüm employee getir
router.get("/", EmployeeController.getEmpoyeeList);

//get employee b id 
router.get("/:id", EmployeeController.getEmpoyeeByID);

//yeni employee 
router.post("/", EmployeeController.createNewEmployee);

//employe güncelleme
router.put("/:id",EmployeeController.updateEmployee);

// employe silme 
router.delete("/:id",EmployeeController.deleteEmployee);


module.exports = router;