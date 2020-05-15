import express from "express"
const router = express.Router()
import m from "../models/example"
import jwt from "../library/JWT"

router.get("/", (req,res) => { // Get All
  m.find({}, (err,data) => {
    if (err) res.json({status:false,msg:err})
    else res.json({status:true,data:data})
  })
})

router.get("/:id", (req,res) => { // Find One By Id
  m.findOne({_id:req.params.id}, (err,data) => {
    if (err) res.json({status:false,msg:err})
    else res.json({status:true,data:data})
  })
})

router.post("/", (req,res) => { // Post Into Model
  m.create({
    // Body Post
  }, (err,succ)=>{
    if (err) res.json({status:false,msg:'error'})
    else res.json({status:true,msg:'success'})
  })
})

router.put("/update/:id", (req,res) => { // Update One By Id
  m.findOneAndUpdate({_id:req.params.id}, {$set:{
    // Update Body Post
  }}, (err,succ)=>{
    if (err) res.json({status:false,msg:'error'})
    else res.json({status:true,msg:'success'})
  })
})

router.delete("/delete/:id", (req,res) => { // Delete One By Id
  m.remove({_id:req.params.id}, (err,succ) => {
    if (err) res.json({status:false,msg:err})
    else res.json({status:true,msg:'success'})
  })
})

module.exports = router
