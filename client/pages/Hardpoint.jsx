import React, { useState, useEffect } from "react";
import { Table, Card } from 'react-bootstrap';

import '../styling/Mode.css';
import invasionHPImg from '../assets/invasionHP.png';
import karachiHPImg from '../assets/karachiHP.png';
import skidrowHPImg from '../assets/skidrowHP.png';
import subBaseHPImg from '../assets/subBaseHP.png';
import terminalHPImg from '../assets/terminalHP.png';

import FormInvasionHp from './FormInvasionHp'
import FormKarachiHp from './FormKarachiHp'
import FormSkidrowHp from './FormSkidrowHp'
import FormSubBaseHp from './FormSubBaseHp'
import FormTerminalHp from './FormTerminalHp'

export default function Hardpoint() {
  const [invasionHp, setInvasionHp] = useState([]);
  const [karachiHp, setKarachiHp] = useState([]);
  const [skidrowHp, setSkidrowHp] = useState([]);
  const [subBaseHp, setSubBaseHp] = useState([]);
  const [terminalHp, setTerminalHp] = useState([]);



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
  useEffect(() => {
    fetch("/api/skidrowHp", {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setSkidrowHp(data);
        } else if (data && data.result === 'success' && Array.isArray(data.payload)) {
          setSkidrowHp(data.payload);
        } else {
          console.error("Invalid data format received from the API");
        }
      })
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    fetch("/api/subBaseHp", {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setSubBaseHp(data);
        } else if (data && data.result === 'success' && Array.isArray(data.payload)) {
          setSubBaseHp(data.payload);
        } else {
          console.error("Invalid data format received from the API");
        }
      })
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    fetch("/api/terminalHp", {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setTerminalHp(data);
        } else if (data && data.result === 'success' && Array.isArray(data.payload)) {
          setTerminalHp(data.payload);
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
  const skidrowAveragesDaBears5422 = getDaBears5422DataAverages(skidrowHp);
  const subBaseAveragesDaBears5422 = getDaBears5422DataAverages(subBaseHp);
  const terminalAveragesDaBears5422 = getDaBears5422DataAverages(terminalHp);

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
  // Skidrow
  const skidrowKdRatioDaBears5422 = (skidrowAveragesDaBears5422.averageKills / skidrowAveragesDaBears5422.averageDeaths).toFixed(2);
  const skidrowKillsDaBears5422 = (skidrowAveragesDaBears5422.averageKills).toFixed(2);
  const skidrowDeathsDaBears5422 = (skidrowAveragesDaBears5422.averageDeaths).toFixed(2);
  const skidrowTimeDaBears5422 = (skidrowAveragesDaBears5422.averageTimeInMatch).toFixed(2);
  // SubBase
  const subBaseKdRatioDaBears5422 = (subBaseAveragesDaBears5422.averageKills / subBaseAveragesDaBears5422.averageDeaths).toFixed(2);
  const subBaseKillsDaBears5422 = (subBaseAveragesDaBears5422.averageKills).toFixed(2);
  const subBaseDeathsDaBears5422 = (subBaseAveragesDaBears5422.averageDeaths).toFixed(2);
  const subBaseTimeDaBears5422 = (subBaseAveragesDaBears5422.averageTimeInMatch).toFixed(2);
  // Terminal
  const terminalKdRatioDaBears5422 = (terminalAveragesDaBears5422.averageKills / terminalAveragesDaBears5422.averageDeaths).toFixed(2);
  const terminalKillsDaBears5422 = (terminalAveragesDaBears5422.averageKills).toFixed(2);
  const terminalDeathsDaBears5422 = (terminalAveragesDaBears5422.averageDeaths).toFixed(2);
  const terminalTimeDaBears5422 = (terminalAveragesDaBears5422.averageTimeInMatch).toFixed(2);


  // HoneyB------------------------------------------
  function getHoneyBDataAverages(data) {
    // Filter the data for Da_Bears5422
    const HoneyBData = data.filter(game => game.playerName === 'HoneyB');

    // Calculate the averages
    if (HoneyBData.length > 0) {
      const totalKills = HoneyBData.reduce((sum, game) => sum + game.kills, 0);
      const totalDeaths = HoneyBData.reduce((sum, game) => sum + game.deaths, 0);
      const totalTimeInMatch = HoneyBData.reduce((sum, game) => sum + game.timeInMatch, 0);
      const averageKills = totalKills / HoneyBData.length;
      const averageDeaths = totalDeaths / HoneyBData.length;
      const averageTimeInMatch = totalTimeInMatch / HoneyBData.length;
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
  const skidrowAveragesHoneyB = getHoneyBDataAverages(skidrowHp);
  const subBaseAveragesHoneyB = getHoneyBDataAverages(subBaseHp);
  const terminalAveragesHoneyB = getHoneyBDataAverages(terminalHp);

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
  // Skidrow
  const skidrowKdRatioHoneyB = (skidrowAveragesHoneyB.averageKills / skidrowAveragesHoneyB.averageDeaths).toFixed(2);
  const skidrowKillsHoneyB = (skidrowAveragesHoneyB.averageKills).toFixed(2);
  const skidrowDeathsHoneyB = (skidrowAveragesHoneyB.averageDeaths).toFixed(2);
  const skidrowTimeHoneyB = (skidrowAveragesHoneyB.averageTimeInMatch).toFixed(2);
  // SubBase
  const subBaseKdRatioHoneyB = (subBaseAveragesHoneyB.averageKills / subBaseAveragesHoneyB.averageDeaths).toFixed(2);
  const subBaseKillsHoneyB = (subBaseAveragesHoneyB.averageKills).toFixed(2);
  const subBaseDeathsHoneyB = (subBaseAveragesHoneyB.averageDeaths).toFixed(2);
  const subBaseTimeHoneyB = (subBaseAveragesHoneyB.averageTimeInMatch).toFixed(2);
  // Terminal
  const terminalKdRatioHoneyB = (terminalAveragesHoneyB.averageKills / terminalAveragesHoneyB.averageDeaths).toFixed(2);
  const terminalKillsHoneyB = (terminalAveragesHoneyB.averageKills).toFixed(2);
  const terminalDeathsHoneyB = (terminalAveragesHoneyB.averageDeaths).toFixed(2);
  const terminalTimeHoneyB = (terminalAveragesHoneyB.averageTimeInMatch).toFixed(2);



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
  const skidrowAveragesSD = getSDDataAverages(skidrowHp);
  const subBaseAveragesSD = getSDDataAverages(subBaseHp);
  const terminalAveragesSD = getSDDataAverages(terminalHp);

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
  // Skidrow
  const skidrowKdRatioSD = (skidrowAveragesSD.averageKills / skidrowAveragesSD.averageDeaths).toFixed(2);
  const skidrowKillsSD = (skidrowAveragesSD.averageKills).toFixed(2);
  const skidrowDeathsSD = (skidrowAveragesSD.averageDeaths).toFixed(2);
  const skidrowTimeSD = (skidrowAveragesSD.averageTimeInMatch).toFixed(2);
  // SubBase
  const subBaseKdRatioSD = (subBaseAveragesSD.averageKills / subBaseAveragesSD.averageDeaths).toFixed(2);
  const subBaseKillsSD = (subBaseAveragesSD.averageKills).toFixed(2);
  const subBaseDeathsSD = (subBaseAveragesSD.averageDeaths).toFixed(2);
  const subBaseTimeSD = (subBaseAveragesSD.averageTimeInMatch).toFixed(2);
  // Terminal
  const terminalKdRatioSD = (terminalAveragesSD.averageKills / terminalAveragesSD.averageDeaths).toFixed(2);
  const terminalKillsSD = (terminalAveragesSD.averageKills).toFixed(2);
  const terminalDeathsSD = (terminalAveragesSD.averageDeaths).toFixed(2);
  const terminalTimeSD = (terminalAveragesSD.averageTimeInMatch).toFixed(2);



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
  const skidrowAveragesJimmy = getJimmyDataAverages(skidrowHp);
  const subBaseAveragesJimmy = getJimmyDataAverages(subBaseHp);
  const terminalAveragesJimmy = getJimmyDataAverages(terminalHp);

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
  // Skidrow
  const skidrowKdRatioJimmy = (skidrowAveragesJimmy.averageKills / skidrowAveragesJimmy.averageDeaths).toFixed(2);
  const skidrowKillsJimmy = (skidrowAveragesJimmy.averageKills).toFixed(2);
  const skidrowDeathsJimmy = (skidrowAveragesJimmy.averageDeaths).toFixed(2);
  const skidrowTimeJimmy = (skidrowAveragesJimmy.averageTimeInMatch).toFixed(2);
  // SubBase
  const subBaseKdRatioJimmy = (subBaseAveragesJimmy.averageKills / subBaseAveragesJimmy.averageDeaths).toFixed(2);
  const subBaseKillsJimmy = (subBaseAveragesJimmy.averageKills).toFixed(2);
  const subBaseDeathsJimmy = (subBaseAveragesJimmy.averageDeaths).toFixed(2);
  const subBaseTimeJimmy = (subBaseAveragesJimmy.averageTimeInMatch).toFixed(2);
  // Terminal
  const terminalKdRatioJimmy = (terminalAveragesJimmy.averageKills / terminalAveragesJimmy.averageDeaths).toFixed(2);
  const terminalKillsJimmy = (terminalAveragesJimmy.averageKills).toFixed(2);
  const terminalDeathsJimmy = (terminalAveragesJimmy.averageDeaths).toFixed(2);
  const terminalTimeJimmy = (terminalAveragesJimmy.averageTimeInMatch).toFixed(2);

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
        <FormInvasionHp />
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
        <FormKarachiHp />
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
              <td>{skidrowKillsDaBears5422}</td>
              <td>{skidrowDeathsDaBears5422}</td>
              <td>{skidrowKdRatioDaBears5422}</td>
              <td>{skidrowTimeDaBears5422}</td>
            </tr>
            <tr>
              <td>HoneyB</td>
              <td>{skidrowKillsHoneyB}</td>
              <td>{skidrowDeathsHoneyB}</td>
              <td>{skidrowKdRatioHoneyB}</td>
              <td>{skidrowTimeHoneyB}</td>
            </tr>
            <tr>
              <td>Jimmy</td>
              <td>{skidrowKillsJimmy}</td>
              <td>{skidrowDeathsJimmy}</td>
              <td>{skidrowKdRatioJimmy}</td>
              <td>{skidrowTimeJimmy}</td>
            </tr>
            <tr>
              <td>SD</td>
              <td>{skidrowKillsSD}</td>
              <td>{skidrowDeathsSD}</td>
              <td>{skidrowKdRatioSD}</td>
              <td>{skidrowTimeSD}</td>
            </tr>
          </tbody>
        </Table>
        <FormSkidrowHp />
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
              <td>{subBaseKillsDaBears5422}</td>
              <td>{subBaseDeathsDaBears5422}</td>
              <td>{subBaseKdRatioDaBears5422}</td>
              <td>{subBaseTimeDaBears5422}</td>
            </tr>
            <tr>
              <td>HoneyB</td>
              <td>{subBaseKillsHoneyB}</td>
              <td>{subBaseDeathsHoneyB}</td>
              <td>{subBaseKdRatioHoneyB}</td>
              <td>{subBaseTimeHoneyB}</td>
            </tr>
            <tr>
              <td>Jimmy</td>
              <td>{subBaseKillsJimmy}</td>
              <td>{subBaseDeathsJimmy}</td>
              <td>{subBaseKdRatioJimmy}</td>
              <td>{subBaseTimeJimmy}</td>
            </tr>
            <tr>
              <td>SD</td>
              <td>{subBaseKillsSD}</td>
              <td>{subBaseDeathsSD}</td>
              <td>{subBaseKdRatioSD}</td>
              <td>{subBaseTimeSD}</td>
            </tr>
          </tbody>
        </Table>
        <FormSubBaseHp />
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
              <td>{terminalKillsDaBears5422}</td>
              <td>{terminalDeathsDaBears5422}</td>
              <td>{terminalKdRatioDaBears5422}</td>
              <td>{terminalTimeDaBears5422}</td>
            </tr>
            <tr>
              <td>HoneyB</td>
              <td>{terminalKillsHoneyB}</td>
              <td>{terminalDeathsHoneyB}</td>
              <td>{terminalKdRatioHoneyB}</td>
              <td>{terminalTimeHoneyB}</td>
            </tr>
            <tr>
              <td>Jimmy</td>
              <td>{terminalKillsJimmy}</td>
              <td>{terminalDeathsJimmy}</td>
              <td>{terminalKdRatioJimmy}</td>
              <td>{terminalTimeJimmy}</td>
            </tr>
            <tr>
              <td>SD</td>
              <td>{terminalKillsSD}</td>
              <td>{terminalDeathsSD}</td>
              <td>{terminalKdRatioSD}</td>
              <td>{terminalTimeSD}</td>
            </tr>
          </tbody>
        </Table>
        <FormTerminalHp />
      </div>
      <h1 className='title'>Rotations:</h1>
      <div id="cards-container">
        <Card.Img id="img2" variant="top" src={invasionHPImg} />
        <Card.Img id="img2" variant="top" src={karachiHPImg} />
        <Card.Img id="img2" variant="top" src={skidrowHPImg} />
        <Card.Img id="img2" variant="top" src={subBaseHPImg} />
        <Card.Img id="img2" variant="top" src={terminalHPImg} />
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
