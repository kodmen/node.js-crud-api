const mysql = require("mysql");

// bağlantı oluşturma

//burda hata aldım dbye bağlanırken https://stackoverflow.com/questions/30266221/node-js-mysql-error-connect-econnrefused
//burdan hatamı çözdüm

const dbConn = mysql.createConnection({
    host: `localhost`,
    user: `root`,
    password: `root`,
    database: `node_mysql_crud_db`,
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
});

dbConn.connect( function(error){
   if(error){
    console.log('Error connecting to Db');
    console.log(error);
    return;
   } 
    console.log("veri tabanına bağlantı başarılı");
})

module.exports = dbConn;
