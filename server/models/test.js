import db from '../db'

const model = db.model('test', db.Schema({
  name:String
}))

module.exports = model
