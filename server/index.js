import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import fs from 'fs'
import path from 'path'
import 'dotenv/config'

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(helmet())

fs.readdirSync(path.join(__dirname, 'routers')).forEach(file => {
  let router = file.split('Router.js')
  app.use('/api/'+router[0], require('./routers/'+file))
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname+'/vue'))
  app.get(/.*/, (req,res)=>{ res.sendFile(__dirname+'/vue/index.html') })
}

const port = process.env.PORT || 3000
app.listen(port,()=>{
  console.log('listened on '+port)
})
