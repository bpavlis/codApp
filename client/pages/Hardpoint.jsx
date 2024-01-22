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
  const [karachiHp, setKarachiHp] = useState([]);


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

  useEffect(() => {
    fetch("/api/karachiHp", {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setKarachiHp(data);
        } else if (data && data.result === 'success' && Array.isArray(data.payload)) {
          setKarachiHp(data.payload);
        } else {
          console.error("Invalid data format received from the API");
        }
      })
      .catch((error) => console.log(error));
  }, []);



  // DaBears------------------------------------------
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
  const invasionAveragesDaBears5422 = getDaBears5422DataAverages(invasionHp);
  const karachiAveragesDaBears5422 = getDaBears5422DataAverages(karachiHp);
  // Invasion
  const invasionKdRatioDaBears5422 = (invasionAveragesDaBears5422.averageKills / invasionAveragesDaBears5422.averageDeaths).toFixed(2);
  const invasionKillsDaBears5422 = (invasionAveragesDaBears5422.averageKills).toFixed(2);
  const invasionDeathsDaBears5422 = (invasionAveragesDaBears5422.averageDeaths).toFixed(2);
  const invasionTimeDaBears5422 = (invasionAveragesDaBears5422.averageTimeInMatch).toFixed(2);
  // Karachi
  const karachiKdRatioDaBears5422 = (karachiAveragesDaBears5422.averageKills / karachiAveragesDaBears5422.averageDeaths).toFixed(2);
  const karachiKillsDaBears5422 = (karachiAveragesDaBears5422.averageKills).toFixed(2);
  const karachiDeathsDaBears5422 = (karachiAveragesDaBears5422.averageDeaths).toFixed(2);
  const karachiTimeDaBears5422 = (karachiAveragesDaBears5422.averageTimeInMatch).toFixed(2);



  // HoneyB------------------------------------------
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
      };
    }
  }
  const invasionAveragesHoneyB = getHoneyBDataAverages(invasionHp);
  const karachiAveragesHoneyB = getHoneyBDataAverages(karachiHp);
  // Invasion
  const invasionKdRatioHoneyB = (invasionAveragesHoneyB.averageKills / invasionAveragesHoneyB.averageDeaths).toFixed(2);
  const invasionKillsHoneyB = (invasionAveragesHoneyB.averageKills).toFixed(2);
  const invasionDeathsHoneyB = (invasionAveragesHoneyB.averageDeaths).toFixed(2);
  const invasionTimeHoneyB = (invasionAveragesHoneyB.averageTimeInMatch).toFixed(2);
  // Karachi
  const karachiKdRatioHoneyB = (karachiAveragesHoneyB.averageKills / karachiAveragesHoneyB.averageDeaths).toFixed(2);
  const karachiKillsHoneyB = (karachiAveragesHoneyB.averageKills).toFixed(2);
  const karachiDeathsHoneyB = (karachiAveragesHoneyB.averageDeaths).toFixed(2);
  const karachiTimeHoneyB = (karachiAveragesHoneyB.averageTimeInMatch).toFixed(2);



  // SD------------------------------------------
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
      };
    }
  }
  const invasionAveragesSD = getSDDataAverages(invasionHp);
  const karachiAveragesSD = getSDDataAverages(karachiHp);
  // Invasion
  const invasionKdRatioSD = (invasionAveragesSD.averageKills / invasionAveragesSD.averageDeaths).toFixed(2);
  const invasionKillsSD = (invasionAveragesSD.averageKills).toFixed(2);
  const invasionDeathsSD = (invasionAveragesSD.averageDeaths).toFixed(2);
  const invasionTimeSD = (invasionAveragesSD.averageTimeInMatch).toFixed(2);
  // Karachi
  const karachiKdRatioSD = (karachiAveragesSD.averageKills / karachiAveragesSD.averageDeaths).toFixed(2);
  const karachiKillsSD = (karachiAveragesSD.averageKills).toFixed(2);
  const karachiDeathsSD = (karachiAveragesSD.averageDeaths).toFixed(2);
  const karachiTimeSD = (karachiAveragesSD.averageTimeInMatch).toFixed(2);



  // Jimmy------------------------------------------
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
      };
    }
  }
  const invasionAveragesJimmy = getJimmyDataAverages(invasionHp);
  const karachiAveragesJimmy = getJimmyDataAverages(karachiHp);
  // Invasion
  const invasionKdRatioJimmy = (invasionAveragesJimmy.averageKills / invasionAveragesJimmy.averageDeaths).toFixed(2);
  const invasionKillsJimmy = (invasionAveragesJimmy.averageKills).toFixed(2);
  const invasionDeathsJimmy = (invasionAveragesJimmy.averageDeaths).toFixed(2);
  const invasionTimeJimmy = (invasionAveragesJimmy.averageTimeInMatch).toFixed(2);
  // Karachi
  const karachiKdRatioJimmy = (karachiAveragesJimmy.averageKills / karachiAveragesJimmy.averageDeaths).toFixed(2);
  const karachiKillsJimmy = (karachiAveragesJimmy.averageKills).toFixed(2);
  const karachiDeathsJimmy = (karachiAveragesJimmy.averageDeaths).toFixed(2);
  const karachiTimeJimmy = (karachiAveragesJimmy.averageTimeInMatch).toFixed(2);

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
              <td>{invasionKillsDaBears5422}</td>
              <td>{invasionDeathsDaBears5422}</td>
              <td>{invasionKdRatioDaBears5422}</td>
              <td>{invasionTimeDaBears5422}</td>
            </tr>
            <tr>
              <td>HoneyB</td>
              <td>{invasionKillsHoneyB}</td>
              <td>{invasionDeathsHoneyB}</td>
              <td>{invasionKdRatioHoneyB}</td>
              <td>{invasionTimeHoneyB}</td>
            </tr>
            <tr>
              <td>Jimmy</td>
              <td>{invasionKillsJimmy}</td>
              <td>{invasionDeathsJimmy}</td>
              <td>{invasionKdRatioJimmy}</td>
              <td>{invasionTimeJimmy}</td>
            </tr>
            <tr>
              <td>SD</td>
              <td>{invasionKillsSD}</td>
              <td>{invasionDeathsSD}</td>
              <td>{invasionKdRatioSD}</td>
              <td>{invasionTimeSD}</td>
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
              <td>{karachiKillsDaBears5422}</td>
              <td>{karachiDeathsDaBears5422}</td>
              <td>{karachiKdRatioDaBears5422}</td>
              <td>{karachiTimeDaBears5422}</td>
            </tr>
            <tr>
              <td>HoneyB</td>
              <td>{karachiKillsHoneyB}</td>
              <td>{karachiDeathsHoneyB}</td>
              <td>{karachiKdRatioHoneyB}</td>
              <td>{karachiTimeHoneyB}</td>
            </tr>
            <tr>
              <td>Jimmy</td>
              <td>{karachiKillsJimmy}</td>
              <td>{karachiDeathsJimmy}</td>
              <td>{karachiKdRatioJimmy}</td>
              <td>{karachiTimeJimmy}</td>
            </tr>
            <tr>
              <td>SD</td>
              <td>{karachiKillsSD}</td>
              <td>{karachiDeathsSD}</td>
              <td>{karachiKdRatioSD}</td>
              <td>{karachiTimeSD}</td>
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
      {/* <div id="wrapper">
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
      </div> */}
    </>
  )
}
