const m = require('../models/Example')
const router = require('express').Router()

router.get('/', (req,res)=>{
  res.send('Example ok')
})

module.exports = router
