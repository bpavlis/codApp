import React, { useState } from 'react';

const allowedPlayerNames = ['Da_Bears5422', 'Jimmy', 'SD', 'HoneyB'];

const YourFormComponent = () => {
  const [formData, setFormData] = useState({
    playerName: '',
    kills: 0,
    deaths: 0,
    timeInMatch: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendDataToServer = async () => {
    try {
      const response = await fetch('http://localhost:5173/api/highriseCNT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form Data Submitted Successfully');
        // Reset the form after successful submission
        setFormData({
          playerName: '',
          kills: 0,
          deaths: 0,
          timeInMatch: 0,
        });
      } else {
        console.error('Failed to submit form data');
      }
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendDataToServer();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className='formInput'>
        Player Name:
        <select name="playerName" value={formData.playerName} onChange={handleChange} className='formInput'>
          <option value="">Select Player Name</option>
          {allowedPlayerNames.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </label>

      <label>
        Kills:
        <input type="number" name="kills" value={formData.kills} onChange={handleChange} className='formInput' />
      </label>

      <label>
        Deaths:
        <input type="number" name="deaths" value={formData.deaths} onChange={handleChange} className='formInput' />
      </label>

      <label>
        Time in Point:
        <input type="number" name="timeInMatch" value={formData.timeInMatch} onChange={handleChange} className='formInput' />
      </label>
      <br />
      <button type="submit" className='formInputButton'>Submit</button>
    </form>

  );
};

export default YourFormComponent;
