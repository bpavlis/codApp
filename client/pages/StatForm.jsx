// import React, { useState } from 'react';

// export default function StatForm() {
//   const [formData, setFormData] = useState({
//     mapName: '',
//     players: [
//       { name: '', kills: '', deaths: '', timeInPoint: '', numOfPlants: '' },
//       { name: '', kills: '', deaths: '', timeInPoint: '', numOfPlants: '' },
//       { name: '', kills: '', deaths: '', timeInPoint: '', numOfPlants: '' },
//       { name: '', kills: '', deaths: '', timeInPoint: '', numOfPlants: '' }
//     ]
//   });

//   const handleInputChange = (index, event) => {
//     const { name, value } = event.target;
//     const newPlayers = [...formData.players];
//     newPlayers[index][name] = value;
//     setFormData({ ...formData, players: newPlayers });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await fetch('http://localhost:5173/api/playerSchema', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });
//       const data = await response.json();
//       console.log('Game data submitted:', data);
//       // Reset form after submission if needed
//       setFormData({
//         mapName: '',
//         players: [
//           { name: '', kills: '', deaths: '', timeInPoint: '', numOfPlants: '' },
//           { name: '', kills: '', deaths: '', timeInPoint: '', numOfPlants: '' },
//           { name: '', kills: '', deaths: '', timeInPoint: '', numOfPlants: '' },
//           { name: '', kills: '', deaths: '', timeInPoint: '', numOfPlants: '' }
//         ]
//       });
//     } catch (error) {
//       console.error('Error submitting game data:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Map Name:
//         <input
//           type="text"
//           name="mapName"
//           value={formData.mapName}
//           onChange={(e) => setFormData({ ...formData, mapName: e.target.value })}
//         />
//       </label>
//       <br />
//       <fieldset>
//         <legend>Players</legend>
//         {formData.players.map((player, index) => (
//           <div key={index}>
//             <label>
//               Name:
//               <select
//                 name="name"
//                 value={player.name}
//                 onChange={(e) => handleInputChange(index, e)}
//               >
//                 <option value="">Select Name</option>
//                 <option value="Da_Bears5422">Da_Bears5422</option>
//                 <option value="HoneyB">HoneyB</option>
//                 <option value="Jimmy">Jimmy</option>
//                 <option value="SD">SD</option>
//               </select>
//             </label>
//             <br />
//             <label>
//               Kills:
//               <input
//                 type="number"
//                 name="kills"
//                 value={player.kills}
//                 onChange={(e) => handleInputChange(index, e)}
//               />
//             </label>
//             <br />
//             {/* Add other input fields for deaths, timeInPoint, and numOfPlants similarly */}
//           </div>
//         ))}
//       </fieldset>
//       <br />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

import React, { useState } from 'react';

const PlayerForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    kills: 0,
    deaths: 0,
    timeInPoint: 0,
    numOfPlants: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    // You can reset the form state here if needed
    setFormData({
      name: '',
      kills: 0,
      deaths: 0,
      timeInPoint: 0,
      numOfPlants: 0
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <select name="name" value={formData.name} onChange={handleChange}>
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
          name="kills"
          value={formData.kills}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Deaths:
        <input
          type="number"
          name="deaths"
          value={formData.deaths}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Time in Point:
        <input
          type="number"
          name="timeInPoint"
          value={formData.timeInPoint}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Number of Plants:
        <input
          type="number"
          name="numOfPlants"
          value={formData.numOfPlants}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PlayerForm;
