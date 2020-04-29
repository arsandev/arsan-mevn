import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import fs from 'fs'
import path from 'path'
import 'dotenv/config'

const app = express()
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())
app.use(helmet())

fs.readdirSync(path.join(__dirname, 'routers')).forEach(file => {
  let router = file.split('Router.js')
  app.use(`/api/${router[0]}`, require(`./routers/${file}`))
})

if (process.env.PROD == true) {
  app.use(express.static(`${__dirname}/vue`))
  app.get(/.*/, (req,res)=>{ res.sendFile(`${__dirname}/vue/index.html`) })
}

app.use((err, req, res, next) => {
 res.status(500).json({
   status: false,
   name: err.name,
   message: err.message
 })
})

const port = process.env.WEB_PORT
app.listen(port,()=>{
  console.log(`Listened on ${port}`)
})
