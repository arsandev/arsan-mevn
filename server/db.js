const mongoose = require('mongoose')
const db = 'latihan'
mongoose.connect('mongodb://localhost:27017/'+db, {useNewUrlParser:true}, (err,conn)=>{
  if (err) console.log(err)
  else console.log('db '+db+' connected')
})

module.exports = mongoose
