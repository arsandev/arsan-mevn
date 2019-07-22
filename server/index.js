const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')

fs.readdirSync(path.join(__dirname,'routers')).forEach(file=>{
  let split = file.split('Router')
  const model = split[0].toLowerCase()
  app.use('/'+model, require(path.join(__dirname,'routers',file)))
})

const port = 5000
app.listen(port, ()=>{
  console.log('listened on port '+port)
})
