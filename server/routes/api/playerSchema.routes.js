const router = require('express').Router();

// Import any controllers needed here
const { getAllPlayerSchemas, getPlayerSchemaById, createPlayerSchema, updatePlayerSchemaById, deletePlayerSchemaById } = require('../../controllers/playerSchema.controller');

// Declare the routes that point to the controllers above
router.get("/", async (req, res) => {
  try {
    const payload = await getAllPlayerSchemas()
    res.status(200).json({ result: "success", payload })
  } catch (err) {
    res.status(500).json({ result: "error", payload: err.message })
  }
})

router.get("/:id", async (req, res) => {
  try {
    const payload = await getPlayerSchemaById(req.params.id)
    res.status(200).json({ result: "success", payload })
  } catch (err) {
    res.status(500).json({ result: "error", payload: err.message })
  }
})

router.post("/", async (req, res) => {
  try {
    const payload = await createPlayerSchema(req.body)
    res.status(200).json({ result: "success", payload })
  } catch (err) {
    res.status(500).json({ result: "error", payload: err.message })
  }
})

router.put("/:id", async (req, res) => {
  try {
    const payload = await updatePlayerSchemaById(req.params.id, req.body)
    res.status(200).json({ result: "success", payload })
  } catch (err) {
    res.status(500).json({ result: "error", payload: err.message })
  }
})

router.delete("/:id", async (req, res) => {
  try {
    const payload = await deletePlayerSchemaById(req.params.id)
    res.status(200).json({ result: "success", payload })
  } catch (err) {
    res.status(500).json({ result: "error", payload: err.message })
  }
})

module.exports = router;
/*
CHATGPT OUTPUT
const express = require('express');
const mongoose = require('mongoose');
const Map = require('./models/map'); // Import your Map model

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/codStats', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Endpoint to handle adding game data
app.post('/addGame', async (req, res) => {
  try {
    const { mapName, players } = req.body;

    // Check if the map exists, if not, create a new map entry
    let map = await Map.findOne({ mapName });
    if (!map) {
      map = new Map({ mapName, games: [] });
    }

    const newGame = {
      players: players.map((player) => ({
        name: player.name,
        kills: player.kills,
        deaths: player.deaths,
        timeInPoint: player.timeInPoint || 0,
        numOfPlants: player.numOfPlants || 0,
      })),
    };

    // Add the new game to the map
    map.games.push(newGame);
    await map.save();

    res.status(201).json({ message: 'Game data added successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

*/