const mongoose = require('mongoose');

const login = mongoose.model('loginUser',{
    email: {type:String},
    password:{type:String}
})

module.exports = login;