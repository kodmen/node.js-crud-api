const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// server portunun tanımlanması
const port = process.env.PORT || 5000;

// parse request data content type application/x-www-form-rulencoded
app.use(bodyParser.urlencoded({extended: false}));

//parse request data content type applicatinon/json
app.use(bodyParser.json());

// kök dağıtıcının tanmalanması
app.get("/",(req,res) =>{
    res.send("hello world");
});

//import employee routers
const employeeRouters = require("./src/routers/employee.route");

//router ouluştur
app.use("/api/v1/employee",employeeRouters);

// portu dinle
app.listen(port, ()=>{
    console.log(`server is running at port ${port}`);
});