const EmployeeModel = require("../models/employee.model")

// get all employee list

exports.getEmpoyeeList = (req,res) => {
    //console.log("here all employess list");
    EmployeeModel.getAllEmployees((err, employees) =>{
       
        if(err) res.send(err);
        
        res.send(employees);
    })
}

// get employee by id
exports.getEmpoyeeByID = (req, res) => {
    //console.log("get by id");
    console.log(req);
    EmployeeModel.getEmployeeByID(req.params.id, (err, employee)=>{
        if(err) res.send(err);
        
        res.send(employee);
    })
}

exports.createNewEmployee = (req,res) =>{
    const employeeReqData = new EmployeeModel(req.body);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success:false, message: "please fill all fielsds"});
    }else{
        EmployeeModel.createEmployee(employeeReqData, (err, employee)=>{
            if(err)
                res.send(err);
                res.json({status: true, message: "başarıyla kaydedildi", data: employee.insertId});
            
        })
    }
}

exports.updateEmployee = (req,res) => {
    const employeeReqData = new EmployeeModel(req.body);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success:false, message: "please fill all fielsds"});
    }else{
        EmployeeModel.updateEmployee(req.params.id, employeeReqData, (err, employee)=>{
            if(err)
                res.send(err);
                res.json({status: true, message: "başarıyla güncenlendi"});
            
        })
    }
}

//employe silme
exports.deleteEmployee = (req, res)=>{
    EmployeeModel.deleteEmployee(req.params.id , (err, employee) =>{
        if(err) 
        res.send(err);
        res.json({success: true, message:"employe başarıyla silindi"});
    })
}