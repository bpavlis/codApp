import React, { useState, useEffect } from "react";
import { Table, Card } from 'react-bootstrap';

import '../styling/Mode.css';
import invasionHP from '../assets/invasionHP.png';
import karachiHP from '../assets/karachiHP.png';
import skidrowHP from '../assets/skidrowHP.png';
import subBaseHP from '../assets/subBaseHP.png';
import terminalHP from '../assets/terminalHP.png';

export default function Hardpoint() {
  const [invasionHp, setInvasionHp] = useState([]);

  useEffect(() => {
    fetch("/api/invasionHp", {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setInvasionHp(data);
        } else if (data && data.result === 'success' && Array.isArray(data.payload)) {
          setInvasionHp(data.payload);
        } else {
          console.error("Invalid data format received from the API");
        }
      })
      .catch((error) => console.log(error));
  }, []);

  function getDaBears5422DataAverages(data) {
    // Filter the data for Da_Bears5422
    const daBearsData = data.filter(game => game.playerName === 'Da_Bears5422');

    // Calculate the averages
    if (daBearsData.length > 0) {
      const totalKills = daBearsData.reduce((sum, game) => sum + game.kills, 0);
      const totalDeaths = daBearsData.reduce((sum, game) => sum + game.deaths, 0);
      const totalTimeInMatch = daBearsData.reduce((sum, game) => sum + game.timeInMatch, 0);
      const averageKills = totalKills / daBearsData.length;
      const averageDeaths = totalDeaths / daBearsData.length;
      const averageTimeInMatch = totalTimeInMatch / daBearsData.length;
      return {
        averageKills,
        averageDeaths,
        averageTimeInMatch,
      };
    } else {
      return {
        averageKills: 0,
        averageDeaths: 0,
        averageTimeInMatch: 0,
      }; // If no data found for Da_Bears5422
    }
  }
  const averagesDaBears5422 = getDaBears5422DataAverages(invasionHp);
  // Calculate K/D ratio rounded to two decimal places
  const kdRatioDaBears5422 = (averagesDaBears5422.averageKills / averagesDaBears5422.averageDeaths).toFixed(2);
  const killsDaBears5422 = (averagesDaBears5422.averageKills).toFixed(2);
  const deathsDaBears5422 = (averagesDaBears5422.averageDeaths).toFixed(2);
  const timeDaBears5422 = (averagesDaBears5422.averageTimeInMatch).toFixed(2);

  function getHoneyBDataAverages(data) {
    // Filter the data for Da_Bears5422
    const honeyBData = data.filter(game => game.playerName === 'HoneyB');

    // Calculate the averages
    if (honeyBData.length > 0) {
      const totalKills = honeyBData.reduce((sum, game) => sum + game.kills, 0);
      const totalDeaths = honeyBData.reduce((sum, game) => sum + game.deaths, 0);
      const totalTimeInMatch = honeyBData.reduce((sum, game) => sum + game.timeInMatch, 0);
      const averageKills = totalKills / honeyBData.length;
      const averageDeaths = totalDeaths / honeyBData.length;
      const averageTimeInMatch = totalTimeInMatch / honeyBData.length;
      return {
        averageKills,
        averageDeaths,
        averageTimeInMatch,
      };
    } else {
      return {
        averageKills: 0,
        averageDeaths: 0,
        averageTimeInMatch: 0,
      }; // If no data found for Da_Bears5422
    }
  }
  const averagesHoneyB = getHoneyBDataAverages(invasionHp);
  // Calculate K/D ratio rounded to two decimal places
  const kdRatioHoneyB = (averagesHoneyB.averageKills / averagesHoneyB.averageDeaths).toFixed(2);
  const killsHoneyB = (averagesHoneyB.averageKills).toFixed(2);
  const deathsHoneyB = (averagesHoneyB.averageDeaths).toFixed(2);
  const timeHoneyB = (averagesHoneyB.averageTimeInMatch).toFixed(2);

  function getSDDataAverages(data) {
    // Filter the data for Da_Bears5422
    const SDData = data.filter(game => game.playerName === 'SD');

    // Calculate the averages
    if (SDData.length > 0) {
      const totalKills = SDData.reduce((sum, game) => sum + game.kills, 0);
      const totalDeaths = SDData.reduce((sum, game) => sum + game.deaths, 0);
      const totalTimeInMatch = SDData.reduce((sum, game) => sum + game.timeInMatch, 0);
      const averageKills = totalKills / SDData.length;
      const averageDeaths = totalDeaths / SDData.length;
      const averageTimeInMatch = totalTimeInMatch / SDData.length;
      return {
        averageKills,
        averageDeaths,
        averageTimeInMatch,
      };
    } else {
      return {
        averageKills: 0,
        averageDeaths: 0,
        averageTimeInMatch: 0,
      }; // If no data found for Da_Bears5422
    }
  }
  const averagesSD = getSDDataAverages(invasionHp);
  // Calculate K/D ratio rounded to two decimal places
  const kdRatioSD = (averagesSD.averageKills / averagesSD.averageDeaths).toFixed(2);
  const killsSD = (averagesSD.averageKills).toFixed(2);
  const deathsSD = (averagesSD.averageDeaths).toFixed(2);
  const timeSD = (averagesSD.averageTimeInMatch).toFixed(2);

  function getJimmyDataAverages(data) {
    // Filter the data for Da_Bears5422
    const JimmyData = data.filter(game => game.playerName === 'Jimmy');

    // Calculate the averages
    if (JimmyData.length > 0) {
      const totalKills = JimmyData.reduce((sum, game) => sum + game.kills, 0);
      const totalDeaths = JimmyData.reduce((sum, game) => sum + game.deaths, 0);
      const totalTimeInMatch = JimmyData.reduce((sum, game) => sum + game.timeInMatch, 0);
      const averageKills = totalKills / JimmyData.length;
      const averageDeaths = totalDeaths / JimmyData.length;
      const averageTimeInMatch = totalTimeInMatch / JimmyData.length;
      return {
        averageKills,
        averageDeaths,
        averageTimeInMatch,
      };
    } else {
      return {
        averageKills: 0,
        averageDeaths: 0,
        averageTimeInMatch: 0,
      }; // If no data found for Da_Bears5422
    }
  }
  const averagesJimmy = getJimmyDataAverages(invasionHp);
  // Calculate K/D ratio rounded to two decimal places
  const kdRatioJimmy = (averagesJimmy.averageKills / averagesJimmy.averageDeaths).toFixed(2);
  const killsJimmy = (averagesJimmy.averageKills).toFixed(2);
  const deathsJimmy = (averagesJimmy.averageDeaths).toFixed(2);
  const timeJimmy = (averagesJimmy.averageTimeInMatch).toFixed(2);

  return (
    <>
      <h1>Hardpoint Stats:</h1>
      <div>
        <h3 className="title">Invasion Stats:</h3>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>Username</th>
              <th>Avg Kills</th>
              <th>Avg Deaths</th>
              <th>K/D</th>
              <th>Avg Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Da_Bears5422</td>
              <td>{killsDaBears5422}</td>
              <td>{deathsDaBears5422}</td>
              <td>{kdRatioDaBears5422}</td>
              <td>{timeDaBears5422}</td>
            </tr>
            <tr>
              <td>HoneyB</td>
              <td>{killsHoneyB}</td>
              <td>{deathsHoneyB}</td>
              <td>{kdRatioHoneyB}</td>
              <td>{timeHoneyB}</td>
            </tr>
            <tr>
              <td>Jimmy</td>
              <td>{killsJimmy}</td>
              <td>{deathsJimmy}</td>
              <td>{kdRatioJimmy}</td>
              <td>{timeJimmy}</td>
            </tr>
            <tr>
              <td>SD</td>
              <td>{killsSD}</td>
              <td>{deathsSD}</td>
              <td>{kdRatioSD}</td>
              <td>{timeSD}</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div>
        <h3 className="title">Karachi Stats:</h3>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>Username</th>
              <th>Avg Kills</th>
              <th>Avg Deaths</th>
              <th>K/D</th>
              <th>Avg Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Da_Bears5422</td>
              <td>#</td>
              <td>#</td>
              <td>#</td>
              <td>#</td>
            </tr>
            <tr>
              <td>HoneyB</td>
              <td>#</td>
              <td>#</td>
              <td>#</td>
              <td>#</td>
            </tr>
            <tr>
              <td>Jimmy</td>
              <td>#</td>
              <td>#</td>
              <td>#</td>
              <td>#</td>
            </tr>
            <tr>
              <td>SD</td>
              <td>#</td>
              <td>#</td>
              <td>#</td>
              <td>#</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div>
        <h3 className="title">Skidrow Stats:</h3>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>Username</th>
              <th>Avg Kills</th>
              <th>Avg Deaths</th>
              <th>K/D</th>
              <th>Avg Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Da_Bears5422</td>
              <td>#</td>
              <td>#</td>
              <td>#</td>
              <td>#</td>
            </tr>
            <tr>
              <td>HoneyB</td>
              <td>#</td>
              <td>#</td>
              <td>#</td>
              <td>#</td>
            </tr>
            <tr>
              <td>Jimmy</td>
              <td>#</td>
              <td>#</td>
              <td>#</td>
              <td>#</td>
            </tr>
            <tr>
              <td>SD</td>
              <td>#</td>
              <td>#</td>
              <td>#</td>
              <td>#</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div>
        <h3 className="title">Sub Base Stats:</h3>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>Username</th>
              <th>Avg Kills</th>
              <th>Avg Deaths</th>
              <th>K/D</th>
              <th>Avg Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Da_Bears5422</td>
              <td>#</td>
              <td>#</td>
              <td>#</td>
              <td>#</td>
            </tr>
            <tr>
              <td>HoneyB</td>
              <td>#</td>
              <td>#</td>
              <td>#</td>
              <td>#</td>
            </tr>
            <tr>
              <td>Jimmy</td>
              <td>#</td>
              <td>#</td>
              <td>#</td>
              <td>#</td>
            </tr>
            <tr>
              <td>SD</td>
              <td>#</td>
              <td>#</td>
              <td>#</td>
              <td>#</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div>
        <h3 className="title">Terminal Stats:</h3>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>Username</th>
              <th>Avg Kills</th>
              <th>Avg Deaths</th>
              <th>K/D</th>
              <th>Avg Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Da_Bears5422</td>
              <td>#</td>
              <td>#</td>
              <td>#</td>
              <td>#</td>
            </tr>
            <tr>
              <td>HoneyB</td>
              <td>#</td>
              <td>#</td>
              <td>#</td>
              <td>#</td>
            </tr>
            <tr>
              <td>Jimmy</td>
              <td>#</td>
              <td>#</td>
              <td>#</td>
              <td>#</td>
            </tr>
            <tr>
              <td>SD</td>
              <td>#</td>
              <td>#</td>
              <td>#</td>
              <td>#</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <h1 className='title'>Rotations:</h1>
      <div id="cards-container">
        <Card.Img id="img2" variant="top" src={invasionHP} />
        <Card.Img id="img2" variant="top" src={karachiHP} />
        <Card.Img id="img2" variant="top" src={skidrowHP} />
        <Card.Img id="img2" variant="top" src={subBaseHP} />
        <Card.Img id="img2" variant="top" src={terminalHP} />
      </div>
      <div id="wrapper">
        <div className="box">
          {invasionHp.map((game, index) => (
            <Card key={game._id || index} >
              <Card.Body>
                <Card.Title>{game.playerName}</Card.Title><br />
                <Card.Text>
                  Kills: {game.kills}<br />
                  Deaths: {game.deaths}<br />
                  Avg Time: {game.timeInMatch}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </>
  )
}
