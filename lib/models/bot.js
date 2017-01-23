const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//= ===============================
// Bot Schema
//= ===============================
const BotSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  botAccessToken: {
    type: String,
    required: true
  },
  teamId: {
    type: String,
    required: true
 }
},
  {
    timestamps: true
  });

//= ===============================
// Bot ORM Methods
//= ===============================

module.exports = mongoose.model('Bot', BotSchema);