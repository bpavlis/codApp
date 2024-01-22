const { Schema, model } = require('mongoose');

const allowedPlayerNames = ['Da_Bears5422', 'Jimmy', 'SD', 'HoneyB'];

const subBaseHpSchema = new Schema({
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
  timeInMatch: {
    type: Number,
    required: true,
  }
});

const SubBaseHp = model('SubBaseHp', subBaseHpSchema);
module.exports = SubBaseHp;
