const { Schema, model } = require('mongoose');

const allowedPlayerNames = ['Da_Bears5422', 'Jimmy', 'SD', 'HoneyB'];

const terminalSNDSchema = new Schema({
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
  },
  defuse: {
    type: Number,
    required: true,
  }
});

const TerminalSND = model('TerminalSND', terminalSNDSchema);
module.exports = TerminalSND;