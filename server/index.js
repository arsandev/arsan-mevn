import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import fs from 'fs'
import path from 'path'

const app = express()
app.use(bodyParser.json())
app.use(cors({
  origin:'http://localhost:8080'
}))
app.use(helmet())

fs.readdirSync(path.join(__dirname, 'routers')).forEach(file => {
  let router = file.split('Router.js')
  app.use('/'+router[0], require('./routers/'+file))
})

const port = 3000
app.listen(port,()=>{
  console.log('listened on '+port)
})
