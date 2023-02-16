const express = require('express');
const router = express.Router();

const ObjectId = require('mongoose').Types.ObjectId;
const user = require('../models/user.js');

router.get('/',(req,res)=>{
    user.find((err,doc)=>{
        if(err){
            console.log(" Error in get Data" + err);
        }else{
            res.send(doc)
        }
    })
});

router.post('/',(req,res)=>{
    let emp = new user({
        name : req.body.name,
        email: req.body.email,
        mobile : req.body.mobile
    });

    emp.save((err,doc)=>{
        if(err){
            console.log(" Error in post Data" + err);
        }else{
            res.send(doc)
        }
    })
});

router.get('/:id',(req,res)=>{

        if(ObjectId.isValid(req.params.id)){
            user.findById(req.params.id,(err,doc)=>{
                if(err){
                    console.log(" Error in post Data" + err);
                }else{
                    res.send(doc)
                }
            })
        }else{
            return res.status(400).send('No Data found')
        }
});

 router.delete('/:id',(req,res)=>{

    if(ObjectId.isValid(req.params.id)){
        user.findByIdAndRemove(req.params.id,(err,doc)=>{
            if(err){
                console.log(" Error in delete Data" + err);
            }else{
                res.send(doc)
            }
        })
    }else{
        return res.status(400).send('No Data found')
    }
});

// router.put('/:id',(req,res)=>{

//     let emp = {
//         email: req.body.email,
//         password : req.body.password
//     }
    
//     if(ObjectId.isValid(req.params.id)){
//         user.findByIdAndUpdate(req.params.id,{$set:emp},{new:true},(err,doc)=>{
//             if(err){
//                 console.log(" Error in delete Data" + err);
//             }else{
//                 res.send(doc)
//             }
//         })
//     }else{
//         return res.status(400).send('No Data found')
//     }
// });
module.exports = router;