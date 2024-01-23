const { Schema, model } = require('mongoose');

const allowedPlayerNames = ['Da_Bears5422', 'Jimmy', 'SD', 'HoneyB'];

const highriseSNDSchema = new Schema({
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
  },
  plants: {
    type: Number,
    required: true,
  }
});

const HighriseSND = model('HighriseSND', highriseSNDSchema);
module.exports = HighriseSND;