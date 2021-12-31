const express = require("express");
employee = require('./dbFiles/employee')
dbOperation = require('./dbFiles/dbOperation')
cors = require("cors");

// const API_PORT = process.env.PORT || 5000;
// const app = express();

// let client
// let session
// app.use(cors());

// app.get('/api', function(req, res)  {
//     console.log('Called');
//     res.send({result: 'Helloooo'})
// })

// app.get('/quit', function(req, res)  {
//     console.log('Called quit');
//     res.send({result: 'Goodbye'})
// })
let Pam = new Employee(1002, 'Pam', 'Beezeley', 29, 'Female')


dbOperation.getEmployees().then(res => {
    console.log(res.recordset)
})

dbOperation.createEmployee(Pam)


// app.listen(API_PORT, () => console.log(`listening on port ${API_PORT}`));
