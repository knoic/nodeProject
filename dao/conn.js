var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : '47.115.171.124',
    user     : 'schedule',
    password : '123456',
    database : 'schedule'
});

connection.connect();

connection.query('SELECT * from ssm', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
});
