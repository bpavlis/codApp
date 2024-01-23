const { Schema, model } = require('mongoose');

const allowedPlayerNames = ['Da_Bears5422', 'Jimmy', 'SD', 'HoneyB'];

const highriseCNTSchema = new Schema({
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

const HighriseCNT = model('HighriseCNT', highriseCNTSchema);
module.exports = HighriseCNT;