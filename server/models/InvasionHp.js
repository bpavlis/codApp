const { Schema, model } = require('mongoose');

const allowedPlayerNames = ['Da_Bears5422', 'Jimmy', 'SD', 'HoneyB'];

const invasionHpSchema = new Schema({
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

const InvasionHp = model('InvasionHp', invasionHpSchema);
module.exports = InvasionHp;
