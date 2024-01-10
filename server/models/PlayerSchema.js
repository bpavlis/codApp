const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    enum: ['Da_Bears5422', 'HoneyB', 'Jimmy', 'SD'] // Predefined player names
  },
  kills: Number,
  deaths: Number,
  // For Hardpoint mode
  timeInPoint: { type: Number, default: 0 },
  // For Search and Destroy mode
  numOfPlants: { type: Number, default: 0 }
  // You can add other properties for different game modes here
});

const gameSchema = new mongoose.Schema({
  players: [playerSchema]
});

gameSchema.pre('save', async function (next) {
  const game = this;
  if (!game.gameId) {
    try {
      const MapModel = mongoose.model('Map'); // Retrieve the model associated with gameSchema
      const count = await MapModel.countDocuments({});
      game.gameId = count + 1;
      next();
    } catch (err) {
      next(err);
    }
  } else {
    next();
  }
});

const mapSchema = new mongoose.Schema({
  mapName: {
    type: String,
    enum: ['Invasion', 'Karachi', 'Skidrow', 'subBase', 'Terminal', 'Highrise'] // Specific map names
  },
  gameMode: {
    type: String,
    enum: ['Hardpoint', 'Control', 'SND'] // Game mode types
  },
  games: [gameSchema]
});

const Map = mongoose.model('Map', mapSchema);

module.exports = Map;
