const db = require('../db')

const model = db.model('Example', db.Schema({
  // model's schema
}))

module.exports = model
