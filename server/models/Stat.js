const mongoose = require('mongoose');

// Define schema for Player stats
const playerStatsSchema = new mongoose.Schema({
    name: String, // Player name
    kills: Number,
    deaths: Number,
    time: Number,
    plants: Number // Only for SND mode
});

// Define schema for each map
const mapSchema = new mongoose.Schema({
    mapName: {
        type: String,
        required: true
    },
    players: [playerStatsSchema] // Array of player stats for each map
});

// Define schema for each mode
const modeSchema = new mongoose.Schema({
    modeName: {
        type: String,
        required: true
    },
    maps: [mapSchema] // Array of maps for each mode
});

const GameStats = mongoose.model('GameStats', modeSchema);
module.exports = GameStats;



/*
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
  gameId: { type: Number, unique: true },
  players: [playerSchema]
});

const mapSchema = new mongoose.Schema({
  mapName: String,
  games: [gameSchema]
});

const Map = mongoose.model('Map', mapSchema);

module.exports = Map;
----------------------------------------------
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

gameSchema.pre('save', function(next) {
  const game = this;
  // Check if the gameId exists, if not, generate a new one
  if (!game.gameId) {
    mongoose.model('Game').countDocuments({}, function(err, count) {
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

*/