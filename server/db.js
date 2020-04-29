import mongoose from 'mongoose'

const urlConfig = process.env.DB_URL
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
  autoIndex: false, // Don't build indexes
  poolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4 // Use IPv4, skip trying IPv6
}
/*
  ======================
  * CONNECT TO MONGODB *
  ======================
*/
mongoose.connect(urlConfig, options, (err, connected) => {
  if (err) console.log(err)
  else console.log("DB Connected")
})

export default mongoose
