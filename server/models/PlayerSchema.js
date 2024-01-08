const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    enum: ['Da_Bears5422', 'HoneyB', 'Jimmy', 'SD'] // Predefined player names
  },
  kills: Number,
  deaths: Number,
  timeInPoint: { type: Number, default: 0 }, // Only for Hardpoint mode
  numOfPlants: { type: Number, default: 0 } // Only for Search and Destroy mode
});

const gameSchema = new mongoose.Schema({
  players: [playerSchema]
});

gameSchema.pre('save', function (next) {
  const game = this;
  // Check if the gameId exists, if not, generate a new one
  if (!game.gameId) {
    mongoose.model('Game').countDocuments({}, function (err, count) {
      if (err) {
        return next(err);
      }
      // Increment count to get the next gameId
      game.gameId = count + 1;
      next();
    });
  } else {
    // If gameId exists, move to the next middleware
    next();
  }
});

const mapSchema = new mongoose.Schema({
  mapName: String,
  games: [gameSchema]
});

const Map = mongoose.model('Map', mapSchema);

module.exports = Map;