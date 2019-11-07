import mongoose from 'mongoose'

const urlConfig = process.env.DB_URL
mongoose.connect(urlConfig, {useNewUrlParser:process.env.useNewUrlParser,useUnifiedTopology:process.env.useUnifiedTopology,useFindAndModify:process.env.useFindAndModify,useCreateIndex:process.env.useCreateIndex}, (err,conn)=>{
  if (err) console.log(err)
  else console.log('db connected')
})

module.exports = mongoose
