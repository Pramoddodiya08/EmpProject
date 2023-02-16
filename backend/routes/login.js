const express = require('express');
const router = express.Router();

const ObjectId = require('mongoose').Types.ObjectId;
const login = require('../models/home');

router.get('/',(req,res)=>{
    login.find((err,doc)=>{
        if(err){
            console.log(" Error in get Data" + err);
        }else{
            res.send(doc)
        }
    })
});

router.post('/',(req,res)=>{
    let log = new login({
        email: req.body.email,
        password : req.body.password
    });

    log.save((err,doc)=>{
        if(err){
            console.log(" Error in post Data" + err);
        }else{
            res.send(doc)
        }
    })
});

module.exports = router;