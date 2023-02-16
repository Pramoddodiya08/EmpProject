const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/EmployeesDATABASE',
    (err)=>{
    if(!err){
            console.log("Database Connected");
    }else{
            console.log("error in Database connectivity " + err);
    }
})
module.exports = mongoose;