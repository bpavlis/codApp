const mongoose = require('mongoose');

// Define schema for Player stats
const playerStatsSchema = new mongoose.Schema({
    kills: Number,
    deaths: Number,
    time: Number,
    plants: Number // Only for SND mode
});

// Define schema for each game mode
const gameModeSchema = new mongoose.Schema({
    map: {
        type: String,
        required: true
    },
    player: [playerStatsSchema] // Array of player stats for each map
});

// Define schema for overall structure
const mongooseModelSchema = new mongoose.Schema({
    Hardpoint: [gameModeSchema], // Array of game mode schema for Hardpoint
    SND: [gameModeSchema], // Array of game mode schema for SND
    Control: [gameModeSchema] // Array of game mode schema for Control
});

const GameStats = mongoose.model('GameStats', mongooseModelSchema);
module.exports = GameStats;
