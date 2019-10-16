import express from 'express'
const router = express.Router()
import m from '../models/example'

router.get('/', (req,res)=>{ // Get All
  m.find({}, (err,data)=>{
    if (err) res.json({status:false,msg:err})
    else res.json({status:true,data:data})
  })
})

router.get('/:id', (req,res)=>{ // Find One By Id
  m.findOne({_id:req.params.id}, (err,data)=>{
    if (err) res.json({status:false,msg:err})
    else res.json({status:true,data:data})
  })
})

router.post('/', (req,res)=>{ // Get All
  m.create({
    // Body Post
  }, (err,succ)=>{
    if (err) res.json({status:false,msg:'error'})
    else res.json({status:true,msg:'success'})
  })
})

router.post('/update/:id', (req,res)=>{ // Get All
  m.findOneAndUpdate({_id:req.params.id}, {$set:{
    // Update Body Post
  }}, (err,succ)=>{
    if (err) res.json({status:false,msg:'error'})
    else res.json({status:true,msg:'success'})
  })
})

router.post('/delete', (req,res)=>{ // Delete One By Id
  m.remove({_id:req.body.id}, (err,succ)=>{
    if (err) res.json({status:false,msg:err})
    else res.json({status:true,msg:'success'})
  })
})

module.exports = router
