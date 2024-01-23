const { Schema, model } = require('mongoose');

const allowedPlayerNames = ['Da_Bears5422', 'Jimmy', 'SD', 'HoneyB'];

const karachiCNTSchema = new Schema({
  playerName: {
    type: String,
    required: true,
    enum: allowedPlayerNames,
  },
  kills: {
    type: Number,
    required: true,
  },
  deaths: {
    type: Number,
    required: true,
  }
});

const KarachiCNT = model('KarachiCNT', karachiCNTSchema);
module.exports = KarachiCNT;