import React, { useState } from 'react';

export default function StatForm() {
  const initialPlayerState = {
    name: '',
    kills: '',
    deaths: '',
    timeInPoint: '',
    numOfPlants: ''
  };

  const [formData, setFormData] = useState({
    mapName: '',
    players: [
      { ...initialPlayerState },
      { ...initialPlayerState },
      { ...initialPlayerState },
      { ...initialPlayerState }
    ]
  });

  const handleInputChange = (index, field, value) => {
    const newPlayers = [...formData.players];
    newPlayers[index][field] = value;
    setFormData((prevData) => ({
      ...prevData,
      players: newPlayers
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5173/api/playerSchema', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log('Game data submitted:', data);
      // Reset form after submission if needed
      setFormData({
        mapName: '',
        players: [
          { ...initialPlayerState },
          { ...initialPlayerState },
          { ...initialPlayerState },
          { ...initialPlayerState }
        ]
      });
    } catch (error) {
      console.error('Error submitting game data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Map Name:
        <input
          type="text"
          name="mapName"
          value={formData.mapName}
          onChange={(e) => setFormData({ ...formData, mapName: e.target.value })}
        />
      </label>
      <br />
      <fieldset>
        <legend>Players</legend>
        {formData.players.map((player, index) => (
          <div key={index}>
            <label>
              Name:
              <select
                name={`name-${index}`}
                value={player.name}
                onChange={(e) => handleInputChange(index, 'name', e.target.value)}
              >
                <option value="">Select Name</option>
                <option value="Da_Bears5422">Da_Bears5422</option>
                <option value="HoneyB">HoneyB</option>
                <option value="Jimmy">Jimmy</option>
                <option value="SD">SD</option>
              </select>
            </label>
            <br />
            <label>
              Kills:
              <input
                type="number"
                name={`kills-${index}`}
                value={player.kills}
                onChange={(e) => handleInputChange(index, 'kills', e.target.value)}
              />
            </label>
            <br />
            <label>
              Deaths:
              <input
                type="number"
                name={`deaths-${index}`}
                value={player.deaths}
                onChange={(e) => handleInputChange(index, 'deaths', e.target.value)}
              />
            </label>
            <br />
            <label>
              Time in Point:
              <input
                type="number"
                name={`timeInPoint-${index}`}
                value={player.timeInPoint}
                onChange={(e) => handleInputChange(index, 'timeInPoint', e.target.value)}
              />
            </label>
            <br />
            <label>
              Number of Plants:
              <input
                type="number"
                name={`numOfPlants-${index}`}
                value={player.numOfPlants}
                onChange={(e) => handleInputChange(index, 'numOfPlants', e.target.value)}
              />
            </label>
            <br />
          </div>
        ))}
      </fieldset>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}