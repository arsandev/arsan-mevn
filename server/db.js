import mongoose from 'mongoose'

// const urlConfig = 'mongodb://localhost:27017/' Your Database Configuration URL
mongoose.connect(urlConfig, {useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false,useCreateIndex:true}, (err,conn)=>{
  if (err) console.log(err)
  else console.log('db connected')
})

module.exports = mongoose
