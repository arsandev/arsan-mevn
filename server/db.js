import mongoose from 'mongoose'

const urlConfig = process.env.DB_URL
mongoose.connect(urlConfig, {useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false,useCreateIndex:true}, (err,conn)=>{
  if (err) console.log(err)
  else console.log('db connected')
})

module.exports = mongoose
