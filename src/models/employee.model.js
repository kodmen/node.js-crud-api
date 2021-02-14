var dbConn = require("../../config/db.config");

var Employee = function(employee){
    this.first_name      = employee.first_name;
    this.last_name       = employee.last_name;
    this.email           = employee.email;
    this.phone           = employee.phone;
    this.organization    = employee.organization;
    this.designation     = employee.designation;
    this.salary          = employee.salary;
    this.status          = employee.status ? employee.status : 1;
    this.created_at      = new Date();
    this.updated_at      = new Date();
}


// tüm employeeleri al
Employee.getAllEmployees = (result) => {
    dbConn.query("SELECT * FROM employees where is_deleted=0", (err, res) => {
      
        if(err){
            console.log("employyerleri çekerkern hata", err);
            result(null,err);
        }else{
            result(null,res);
        }
    })
}

// id ile getir 
Employee.getEmployeeByID = (id, result) => {
    dbConn.query("SELECT * FROM employees WHERE id=?", id, (err,res) => {
        if(err){
            console.log("id ile çekerken hata",err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// employe yeni oluştur
Employee.createEmployee = (employeeReqData, result) => {
    dbConn.query('INSERT INTO employees SET ?', employeeReqData, (err,res)=>{
        if(err){
            console.log(" yeni kullanıcı oluşturuken hata olud");
            result(null, err);
        }else{
            console.log("başarıyla yeni kullanıcı oluşturuldu");
            result(null, res)
        }
    })
}

//update employe
Employee.updateEmployee = (id, employeeReqData, result) =>{
    dbConn.query("UPDATE employees SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [employeeReqData.first_name,employeeReqData.last_name,employeeReqData.email,employeeReqData.phone,employeeReqData.organization,employeeReqData.designation,employeeReqData.salary, id], (err, res)=>{
        if(err){
            console.log("employe güncellerken hata oluştu")
            result(null, err);
        }else{
            console.log("employe başarıyla güncellendi");
            result(null,res);
        }
    })
   
}

//delete employee
Employee.deleteEmployee = (id, result) => {
    console.log([id]);
    // dbConn.query("DELETE FROM employees WHERE id = ? ", [id], (err,res) =>{
    //     if(err){
    //         console.log("employe silerken hata oluştu")
    //         result(null, err);
    //     }else{
    //         result(null, res);
    //     }
    // })
    dbConn.query("UPDATE employees SET is_deleted=? WHERE id = ?", [ 1, id], (err, res)=>{
        if(err){
            console.log("employe silerken hata oluştu")
            result(null, err);
        }else{
            console.log("employe başarıyla silindi");
            result(null,res);
        }
    })
}

module.exports = Employee;