import '../styling/Mode.css'
import React, { useState, useEffect } from "react";
import { Table, Card } from 'react-bootstrap';
import invasionSNDImg from '../assets/invasionSND.png'
import karachiSNDImg from '../assets/karachiSND.png'
import skidrowSNDImg from '../assets/skidrowSND.png'
import highriseSNDImg from '../assets/highriseSND.png'
import terminalSNDImg from '../assets/terminalSND.png'

import FormHighriseSND from './FormHighriseSND'
import FormInvasionSND from './FormInvasionSND'
import FormKarachiSND from './FormKarachiSND'
import FormSkidrowSND from './FormSkidrowSND'
import FormTerminalSND from './FormTerminalSND'


export default function Search() {
  const [highriseSND, setHighriseSND] = useState([]);
  const [invasionSND, setInvasionSND] = useState([]);
  const [karachiSND, setKarachiSND] = useState([]);
  const [skidrowSND, setSkidrowSND] = useState([]);
  const [terminalSND, setTerminalSND] = useState([]);

  useEffect(() => {
    fetch("/api/highriseSND", {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setHighriseSND(data);
        } else if (data && data.result === 'success' && Array.isArray(data.payload)) {
          setHighriseSND(data.payload);
        } else {
          console.error("Invalid data format received from the API");
        }
      })
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    fetch("/api/invasionSND", {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setInvasionSND(data);
        } else if (data && data.result === 'success' && Array.isArray(data.payload)) {
          setInvasionSND(data.payload);
        } else {
          console.error("Invalid data format received from the API");
        }
      })
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    fetch("/api/karachiSND", {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setKarachiSND(data);
        } else if (data && data.result === 'success' && Array.isArray(data.payload)) {
          setKarachiSND(data.payload);
        } else {
          console.error("Invalid data format received from the API");
        }
      })
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    fetch("/api/skidrowSND", {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setSkidrowSND(data);
        } else if (data && data.result === 'success' && Array.isArray(data.payload)) {
          setSkidrowSND(data.payload);
        } else {
          console.error("Invalid data format received from the API");
        }
      })
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    fetch("/api/terminalSND", {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setTerminalSND(data);
        } else if (data && data.result === 'success' && Array.isArray(data.payload)) {
          setTerminalSND(data.payload);
        } else {
          console.error("Invalid data format received from the API");
        }
      })
      .catch((error) => console.log(error));
  }, []);



  // DaBears------------------------------------------
  function getDaBears5422DataAverages(data) {
    const daBearsData = data.filter(game => game.playerName === 'Da_Bears5422');

    // Calculate the averages
    if (daBearsData.length > 0) {
      const totalKills = daBearsData.reduce((sum, game) => sum + game.kills, 0);
      const totalDeaths = daBearsData.reduce((sum, game) => sum + game.deaths, 0);
      const totalPlants = daBearsData.reduce((sum, game) => sum + game.plants, 0);
      const totalDefuse = daBearsData.reduce((sum, game) => sum + game.defuse, 0);
      const averageKills = totalKills / daBearsData.length;
      const averageDeaths = totalDeaths / daBearsData.length;
      const averagePlants = totalPlants / daBearsData.length;
      const averageDefuse = totalDefuse / daBearsData.length;
      return {
        averageKills,
        averageDeaths,
        averagePlants,
        averageDefuse,
      };
    } else {
      return {
        averageKills: 0,
        averageDeaths: 0,
        averagePlants: 0,
        averageDefuse: 0,
      };
    }
  }
  const highriseAveragesDaBears5422 = getDaBears5422DataAverages(highriseSND);
  const invasionAveragesDaBears5422 = getDaBears5422DataAverages(invasionSND);
  const karachiAveragesDaBears5422 = getDaBears5422DataAverages(karachiSND);
  const skidrowAveragesDaBears5422 = getDaBears5422DataAverages(skidrowSND);
  const terminalAveragesDaBears5422 = getDaBears5422DataAverages(terminalSND);

  // Highrise
  const highriseKdRatioDaBears5422 = (highriseAveragesDaBears5422.averageKills / highriseAveragesDaBears5422.averageDeaths).toFixed(2);
  const highriseKillsDaBears5422 = (highriseAveragesDaBears5422.averageKills).toFixed(2);
  const highriseDeathsDaBears5422 = (highriseAveragesDaBears5422.averageDeaths).toFixed(2);
  const highrisePlantsDaBears5422 = (highriseAveragesDaBears5422.averagePlants).toFixed(2);
  const highriseDefuseDaBears5422 = (highriseAveragesDaBears5422.averageDefuse).toFixed(2);
  // Invasion
  const invasionKdRatioDaBears5422 = (invasionAveragesDaBears5422.averageKills / invasionAveragesDaBears5422.averageDeaths).toFixed(2);
  const invasionKillsDaBears5422 = (invasionAveragesDaBears5422.averageKills).toFixed(2);
  const invasionDeathsDaBears5422 = (invasionAveragesDaBears5422.averageDeaths).toFixed(2);
  const invasionPlantsDaBears5422 = (invasionAveragesDaBears5422.averagePlants).toFixed(2);
  const invasionDefuseDaBears5422 = (invasionAveragesDaBears5422.averageDefuse).toFixed(2);
  // Karachi
  const karachiKdRatioDaBears5422 = (karachiAveragesDaBears5422.averageKills / karachiAveragesDaBears5422.averageDeaths).toFixed(2);
  const karachiKillsDaBears5422 = (karachiAveragesDaBears5422.averageKills).toFixed(2);
  const karachiDeathsDaBears5422 = (karachiAveragesDaBears5422.averageDeaths).toFixed(2);
  const karachiPlantsDaBears5422 = (karachiAveragesDaBears5422.averagePlants).toFixed(2);
  const karachiDefuseDaBears5422 = (karachiAveragesDaBears5422.averageDefuse).toFixed(2);
  // Skidrow
  const skidrowKdRatioDaBears5422 = (skidrowAveragesDaBears5422.averageKills / skidrowAveragesDaBears5422.averageDeaths).toFixed(2);
  const skidrowKillsDaBears5422 = (skidrowAveragesDaBears5422.averageKills).toFixed(2);
  const skidrowDeathsDaBears5422 = (skidrowAveragesDaBears5422.averageDeaths).toFixed(2);
  const skidrowPlantsDaBears5422 = (skidrowAveragesDaBears5422.averagePlants).toFixed(2);
  const skidrowDefuseDaBears5422 = (skidrowAveragesDaBears5422.averageDefuse).toFixed(2);
  // Terminal
  const terminalKdRatioDaBears5422 = (terminalAveragesDaBears5422.averageKills / terminalAveragesDaBears5422.averageDeaths).toFixed(2);
  const terminalKillsDaBears5422 = (terminalAveragesDaBears5422.averageKills).toFixed(2);
  const terminalDeathsDaBears5422 = (terminalAveragesDaBears5422.averageDeaths).toFixed(2);
  const terminalPlantsDaBears5422 = (highriseAveragesDaBears5422.averagePlants).toFixed(2);
  const terminalDefuseDaBears5422 = (highriseAveragesDaBears5422.averageDefuse).toFixed(2);



  // HoneyB------------------------------------------
  function getHoneyBDataAverages(data) {
    const HoneyBData = data.filter(game => game.playerName === 'HoneyB');

    // Calculate the averages
    if (HoneyBData.length > 0) {
      const totalKills = HoneyBData.reduce((sum, game) => sum + game.kills, 0);
      const totalDeaths = HoneyBData.reduce((sum, game) => sum + game.deaths, 0);
      const totalPlants = HoneyBData.reduce((sum, game) => sum + game.plants, 0);
      const totalDefuse = HoneyBData.reduce((sum, game) => sum + game.defuse, 0);
      const averageKills = totalKills / HoneyBData.length;
      const averageDeaths = totalDeaths / HoneyBData.length;
      const averagePlants = totalPlants / HoneyBData.length;
      const averageDefuse = totalDefuse / HoneyBData.length;
      return {
        averageKills,
        averageDeaths,
        averagePlants,
        averageDefuse,
      };
    } else {
      return {
        averageKills: 0,
        averageDeaths: 0,
        averagePlants: 0,
        averageDefuse: 0,
      };
    }
  }
  const highriseAveragesHoneyB = getHoneyBDataAverages(highriseSND);
  const invasionAveragesHoneyB = getHoneyBDataAverages(invasionSND);
  const karachiAveragesHoneyB = getHoneyBDataAverages(karachiSND);
  const skidrowAveragesHoneyB = getHoneyBDataAverages(skidrowSND);
  const terminalAveragesHoneyB = getHoneyBDataAverages(terminalSND);

  // Highrise
  const highriseKdRatioHoneyB = (highriseAveragesHoneyB.averageKills / highriseAveragesHoneyB.averageDeaths).toFixed(2);
  const highriseKillsHoneyB = (highriseAveragesHoneyB.averageKills).toFixed(2);
  const highriseDeathsHoneyB = (highriseAveragesHoneyB.averageDeaths).toFixed(2);
  const highrisePlantsHoneyB = (highriseAveragesHoneyB.averagePlants).toFixed(2);
  const highriseDefuseHoneyB = (highriseAveragesHoneyB.averageDefuse).toFixed(2);
  // Invasion
  const invasionKdRatioHoneyB = (invasionAveragesHoneyB.averageKills / invasionAveragesHoneyB.averageDeaths).toFixed(2);
  const invasionKillsHoneyB = (invasionAveragesHoneyB.averageKills).toFixed(2);
  const invasionDeathsHoneyB = (invasionAveragesHoneyB.averageDeaths).toFixed(2);
  const invasionPlantsHoneyB = (invasionAveragesHoneyB.averagePlants).toFixed(2);
  const invasionDefuseHoneyB = (invasionAveragesHoneyB.averageDefuse).toFixed(2);
  // Karachi
  const karachiKdRatioHoneyB = (karachiAveragesHoneyB.averageKills / karachiAveragesHoneyB.averageDeaths).toFixed(2);
  const karachiKillsHoneyB = (karachiAveragesHoneyB.averageKills).toFixed(2);
  const karachiDeathsHoneyB = (karachiAveragesHoneyB.averageDeaths).toFixed(2);
  const karachiPlantsHoneyB = (karachiAveragesHoneyB.averagePlants).toFixed(2);
  const karachiDefuseHoneyB = (karachiAveragesHoneyB.averageDefuse).toFixed(2);
  // Skidrow
  const skidrowKdRatioHoneyB = (skidrowAveragesHoneyB.averageKills / skidrowAveragesHoneyB.averageDeaths).toFixed(2);
  const skidrowKillsHoneyB = (skidrowAveragesHoneyB.averageKills).toFixed(2);
  const skidrowDeathsHoneyB = (skidrowAveragesHoneyB.averageDeaths).toFixed(2);
  const skidrowPlantsHoneyB = (skidrowAveragesHoneyB.averagePlants).toFixed(2);
  const skidrowDefuseHoneyB = (skidrowAveragesHoneyB.averageDefuse).toFixed(2);
  // Terminal
  const terminalKdRatioHoneyB = (terminalAveragesHoneyB.averageKills / terminalAveragesHoneyB.averageDeaths).toFixed(2);
  const terminalKillsHoneyB = (terminalAveragesHoneyB.averageKills).toFixed(2);
  const terminalDeathsHoneyB = (terminalAveragesHoneyB.averageDeaths).toFixed(2);
  const terminalPlantsHoneyB = (terminalAveragesHoneyB.averagePlants).toFixed(2);
  const terminalDefuseHoneyB = (terminalAveragesHoneyB.averageDefuse).toFixed(2);



  // SD------------------------------------------
  function getSDDataAverages(data) {
    const SDData = data.filter(game => game.playerName === 'SD');

    // Calculate the averages
    if (SDData.length > 0) {
      const totalKills = SDData.reduce((sum, game) => sum + game.kills, 0);
      const totalDeaths = SDData.reduce((sum, game) => sum + game.deaths, 0);
      const totalPlants = SDData.reduce((sum, game) => sum + game.plants, 0);
      const totalDefuse = SDData.reduce((sum, game) => sum + game.defuse, 0);
      const averageKills = totalKills / SDData.length;
      const averageDeaths = totalDeaths / SDData.length;
      const averagePlants = totalPlants / SDData.length;
      const averageDefuse = totalDefuse / SDData.length;
      return {
        averageKills,
        averageDeaths,
        averagePlants,
        averageDefuse,
      };
    } else {
      return {
        averageKills: 0,
        averageDeaths: 0,
        averagePlants: 0,
        averageDefuse: 0,
      };
    }
  }
  const highriseAveragesSD = getSDDataAverages(highriseSND);
  const invasionAveragesSD = getSDDataAverages(invasionSND);
  const karachiAveragesSD = getSDDataAverages(karachiSND);
  const skidrowAveragesSD = getSDDataAverages(skidrowSND);
  const terminalAveragesSD = getSDDataAverages(terminalSND);

  // Highrise
  const highriseKdRatioSD = (highriseAveragesSD.averageKills / highriseAveragesSD.averageDeaths).toFixed(2);
  const highriseKillsSD = (highriseAveragesSD.averageKills).toFixed(2);
  const highriseDeathsSD = (highriseAveragesSD.averageDeaths).toFixed(2);
  const highrisePlantsSD = (highriseAveragesSD.averagePlants).toFixed(2);
  const highriseDefuseSD = (highriseAveragesSD.averageDefuse).toFixed(2);
  // Invasion
  const invasionKdRatioSD = (invasionAveragesSD.averageKills / invasionAveragesSD.averageDeaths).toFixed(2);
  const invasionKillsSD = (invasionAveragesSD.averageKills).toFixed(2);
  const invasionDeathsSD = (invasionAveragesSD.averageDeaths).toFixed(2);
  const invasionPlantsSD = (invasionAveragesSD.averagePlants).toFixed(2);
  const invasionDefuseSD = (invasionAveragesSD.averageDefuse).toFixed(2);
  // Karachi
  const karachiKdRatioSD = (karachiAveragesSD.averageKills / karachiAveragesSD.averageDeaths).toFixed(2);
  const karachiKillsSD = (karachiAveragesSD.averageKills).toFixed(2);
  const karachiDeathsSD = (karachiAveragesSD.averageDeaths).toFixed(2);
  const karachiPlantsSD = (karachiAveragesSD.averagePlants).toFixed(2);
  const karachiDefuseSD = (karachiAveragesSD.averageDefuse).toFixed(2);
  // Skidrow
  const skidrowKdRatioSD = (skidrowAveragesSD.averageKills / skidrowAveragesSD.averageDeaths).toFixed(2);
  const skidrowKillsSD = (skidrowAveragesSD.averageKills).toFixed(2);
  const skidrowDeathsSD = (skidrowAveragesSD.averageDeaths).toFixed(2);
  const skidrowPlantsSD = (skidrowAveragesSD.averagePlants).toFixed(2);
  const skidrowDefuseSD = (skidrowAveragesSD.averageDefuse).toFixed(2);
  // Terminal
  const terminalKdRatioSD = (terminalAveragesSD.averageKills / terminalAveragesSD.averageDeaths).toFixed(2);
  const terminalKillsSD = (terminalAveragesSD.averageKills).toFixed(2);
  const terminalDeathsSD = (terminalAveragesSD.averageDeaths).toFixed(2);
  const terminalPlantsSD = (terminalAveragesSD.averagePlants).toFixed(2);
  const terminalDefuseSD = (terminalAveragesSD.averageDefuse).toFixed(2);



  // Jimmy------------------------------------------
  function getJimmyDataAverages(data) {
    const JimmyData = data.filter(game => game.playerName === 'Jimmy');

    // Calculate the averages
    if (JimmyData.length > 0) {
      const totalKills = JimmyData.reduce((sum, game) => sum + game.kills, 0);
      const totalDeaths = JimmyData.reduce((sum, game) => sum + game.deaths, 0);
      const totalPlants = JimmyData.reduce((sum, game) => sum + game.plants, 0);
      const totalDefuse = JimmyData.reduce((sum, game) => sum + game.defuse, 0);
      const averageKills = totalKills / JimmyData.length;
      const averageDeaths = totalDeaths / JimmyData.length;
      const averagePlants = totalPlants / JimmyData.length;
      const averageDefuse = totalDefuse / JimmyData.length;
      return {
        averageKills,
        averageDeaths,
        averagePlants,
        averageDefuse,
      };
    } else {
      return {
        averageKills: 0,
        averageDeaths: 0,
        averagePlants: 0,
        averageDefuse: 0,
      };
    }
  }
  const highriseAveragesJimmy = getJimmyDataAverages(highriseSND);
  const invasionAveragesJimmy = getJimmyDataAverages(invasionSND);
  const karachiAveragesJimmy = getJimmyDataAverages(karachiSND);
  const skidrowAveragesJimmy = getJimmyDataAverages(skidrowSND);
  const terminalAveragesJimmy = getJimmyDataAverages(terminalSND);

  // Highrise
  const highriseKdRatioJimmy = (highriseAveragesJimmy.averageKills / highriseAveragesJimmy.averageDeaths).toFixed(2);
  const highriseKillsJimmy = (highriseAveragesJimmy.averageKills).toFixed(2);
  const highriseDeathsJimmy = (highriseAveragesJimmy.averageDeaths).toFixed(2);
  const highrisePlantsJimmy = (highriseAveragesJimmy.averagePlants).toFixed(2);
  const highriseDefuseJimmy = (highriseAveragesJimmy.averageDefuse).toFixed(2);
  // Invasion
  const invasionKdRatioJimmy = (invasionAveragesJimmy.averageKills / invasionAveragesJimmy.averageDeaths).toFixed(2);
  const invasionKillsJimmy = (invasionAveragesJimmy.averageKills).toFixed(2);
  const invasionDeathsJimmy = (invasionAveragesJimmy.averageDeaths).toFixed(2);
  const invasionPlantsJimmy = (invasionAveragesJimmy.averagePlants).toFixed(2);
  const invasionDefuseJimmy = (invasionAveragesJimmy.averageDefuse).toFixed(2);
  // Karachi
  const karachiKdRatioJimmy = (karachiAveragesJimmy.averageKills / karachiAveragesJimmy.averageDeaths).toFixed(2);
  const karachiKillsJimmy = (karachiAveragesJimmy.averageKills).toFixed(2);
  const karachiDeathsJimmy = (karachiAveragesJimmy.averageDeaths).toFixed(2);
  const karachiPlantsJimmy = (karachiAveragesJimmy.averagePlants).toFixed(2);
  const karachiDefuseJimmy = (karachiAveragesJimmy.averageDefuse).toFixed(2);
  // Skidrow
  const skidrowKdRatioJimmy = (skidrowAveragesJimmy.averageKills / skidrowAveragesJimmy.averageDeaths).toFixed(2);
  const skidrowKillsJimmy = (skidrowAveragesJimmy.averageKills).toFixed(2);
  const skidrowDeathsJimmy = (skidrowAveragesJimmy.averageDeaths).toFixed(2);
  const skidrowPlantsJimmy = (skidrowAveragesJimmy.averagePlants).toFixed(2);
  const skidrowDefuseJimmy = (skidrowAveragesJimmy.averageDefuse).toFixed(2);
  // Terminal
  const terminalKdRatioJimmy = (terminalAveragesJimmy.averageKills / terminalAveragesJimmy.averageDeaths).toFixed(2);
  const terminalKillsJimmy = (terminalAveragesJimmy.averageKills).toFixed(2);
  const terminalDeathsJimmy = (terminalAveragesJimmy.averageDeaths).toFixed(2);
  const terminalPlantsJimmy = (terminalAveragesJimmy.averagePlants).toFixed(2);
  const terminalDefuseJimmy = (terminalAveragesJimmy.averageDefuse).toFixed(2);



  // Function to calculate averages across all maps
  function calculateAverages(data) {
    const allData = [].concat(...data); // Flatten the data array

    const daBearsAvg = getDaBears5422DataAverages(allData);
    const honeyBAvg = getHoneyBDataAverages(allData);
    const sdAvg = getSDDataAverages(allData);
    const jimmyAvg = getJimmyDataAverages(allData);

    return {
      daBearsAvg,
      honeyBAvg,
      sdAvg,
      jimmyAvg,
    };
  }

  const allAverages = calculateAverages([highriseSND, invasionSND, karachiSND, skidrowSND, terminalSND]);
  return (
    <>
      <h1>Search & Destroy Stats:</h1>
      <div>
        <h3 className="title">Averages Across All Maps:</h3>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>Username</th>
              <th>Avg Kills</th>
              <th>Avg Deaths</th>
              <th>K/D</th>
              <th>Avg Plants</th>
              <th>Avg Defuse</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Da_Bears5422</td>
              <td>{allAverages.daBearsAvg.averageKills.toFixed(2)}</td>
              <td>{allAverages.daBearsAvg.averageDeaths.toFixed(2)}</td>
              <td>{(allAverages.daBearsAvg.averageKills / allAverages.daBearsAvg.averageDeaths).toFixed(2)}</td>
              <td>{allAverages.daBearsAvg.averagePlants.toFixed(2)}</td>
              <td>{allAverages.daBearsAvg.averageDefuse.toFixed(2)}</td>
            </tr>
            <tr>
              <td>HoneyB</td>
              <td>{allAverages.honeyBAvg.averageKills.toFixed(2)}</td>
              <td>{allAverages.honeyBAvg.averageDeaths.toFixed(2)}</td>
              <td>{(allAverages.honeyBAvg.averageKills / allAverages.honeyBAvg.averageDeaths).toFixed(2)}</td>
              <td>{allAverages.honeyBAvg.averagePlants.toFixed(2)}</td>
              <td>{allAverages.honeyBAvg.averageDefuse.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Jimmy</td>
              <td>{allAverages.jimmyAvg.averageKills.toFixed(2)}</td>
              <td>{allAverages.jimmyAvg.averageDeaths.toFixed(2)}</td>
              <td>{(allAverages.jimmyAvg.averageKills / allAverages.jimmyAvg.averageDeaths).toFixed(2)}</td>
              <td>{allAverages.jimmyAvg.averagePlants.toFixed(2)}</td>
              <td>{allAverages.jimmyAvg.averageDefuse.toFixed(2)}</td>
            </tr>
            <tr>
              <td>SD</td>
              <td>{allAverages.sdAvg.averageKills.toFixed(2)}</td>
              <td>{allAverages.sdAvg.averageDeaths.toFixed(2)}</td>
              <td>{(allAverages.sdAvg.averageKills / allAverages.sdAvg.averageDeaths).toFixed(2)}</td>
              <td>{allAverages.sdAvg.averagePlants.toFixed(2)}</td>
              <td>{allAverages.sdAvg.averageDefuse.toFixed(2)}</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div>
        <h3 className="title">Highrise Stats:</h3>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>Username</th>
              <th>Avg Kills</th>
              <th>Avg Deaths</th>
              <th>K/D</th>
              <th>Avg Plants</th>
              <th>Avg Defuse</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Da_Bears5422</td>
              <td>{highriseKillsDaBears5422}</td>
              <td>{highriseDeathsDaBears5422}</td>
              <td>{highriseKdRatioDaBears5422}</td>
              <td>{highrisePlantsDaBears5422}</td>
              <td>{highriseDefuseDaBears5422}</td>
            </tr>
            <tr>
              <td>HoneyB</td>
              <td>{highriseKillsHoneyB}</td>
              <td>{highriseDeathsHoneyB}</td>
              <td>{highriseKdRatioHoneyB}</td>
              <td>{highrisePlantsHoneyB}</td>
              <td>{highriseDefuseHoneyB}</td>
            </tr>
            <tr>
              <td>Jimmy</td>
              <td>{highriseKillsJimmy}</td>
              <td>{highriseDeathsJimmy}</td>
              <td>{highriseKdRatioJimmy}</td>
              <td>{highrisePlantsJimmy}</td>
              <td>{highriseDefuseJimmy}</td>
            </tr>
            <tr>
              <td>SD</td>
              <td>{highriseKillsSD}</td>
              <td>{highriseDeathsSD}</td>
              <td>{highriseKdRatioSD}</td>
              <td>{highrisePlantsSD}</td>
              <td>{highriseDefuseSD}</td>
            </tr>
          </tbody>
        </Table>
        <FormHighriseSND/>
      </div>
      <div>
        <h3 className="title">Invasion Stats:</h3>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>Username</th>
              <th>Avg Kills</th>
              <th>Avg Deaths</th>
              <th>K/D</th>
              <th>Avg Plants</th>
              <th>Avg Defuse</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Da_Bears5422</td>
              <td>{invasionKillsDaBears5422}</td>
              <td>{invasionDeathsDaBears5422}</td>
              <td>{invasionKdRatioDaBears5422}</td>
              <td>{invasionPlantsDaBears5422}</td>
              <td>{invasionDefuseDaBears5422}</td>
            </tr>
            <tr>
              <td>HoneyB</td>
              <td>{invasionKillsHoneyB}</td>
              <td>{invasionDeathsHoneyB}</td>
              <td>{invasionKdRatioHoneyB}</td>
              <td>{invasionPlantsHoneyB}</td>
              <td>{invasionDefuseHoneyB}</td>
            </tr>
            <tr>
              <td>Jimmy</td>
              <td>{invasionKillsJimmy}</td>
              <td>{invasionDeathsJimmy}</td>
              <td>{invasionKdRatioJimmy}</td>
              <td>{invasionPlantsJimmy}</td>
              <td>{invasionDefuseJimmy}</td>
            </tr>
            <tr>
              <td>SD</td>
              <td>{invasionKillsSD}</td>
              <td>{invasionDeathsSD}</td>
              <td>{invasionKdRatioSD}</td>
              <td>{invasionPlantsSD}</td>
              <td>{invasionDefuseSD}</td>
            </tr>
          </tbody>
        </Table>
        <FormInvasionSND />
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
              <th>Avg Plants</th>
              <th>Avg Defuse</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Da_Bears5422</td>
              <td>{karachiKillsDaBears5422}</td>
              <td>{karachiDeathsDaBears5422}</td>
              <td>{karachiKdRatioDaBears5422}</td>
              <td>{karachiPlantsDaBears5422}</td>
              <td>{karachiDefuseDaBears5422}</td>
            </tr>
            <tr>
              <td>HoneyB</td>
              <td>{karachiKillsHoneyB}</td>
              <td>{karachiDeathsHoneyB}</td>
              <td>{karachiKdRatioHoneyB}</td>
              <td>{karachiPlantsHoneyB}</td>
              <td>{karachiDefuseHoneyB}</td>
            </tr>
            <tr>
              <td>Jimmy</td>
              <td>{karachiKillsJimmy}</td>
              <td>{karachiDeathsJimmy}</td>
              <td>{karachiKdRatioJimmy}</td>
              <td>{karachiPlantsJimmy}</td>
              <td>{karachiDefuseJimmy}</td>
            </tr>
            <tr>
              <td>SD</td>
              <td>{karachiKillsSD}</td>
              <td>{karachiDeathsSD}</td>
              <td>{karachiKdRatioSD}</td>
              <td>{karachiPlantsSD}</td>
              <td>{karachiDefuseSD}</td>
            </tr>
          </tbody>
        </Table>
        <FormKarachiSND/>
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
              <th>Avg Plants</th>
              <th>Avg Defuse</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Da_Bears5422</td>
              <td>{skidrowKillsDaBears5422}</td>
              <td>{skidrowDeathsDaBears5422}</td>
              <td>{skidrowKdRatioDaBears5422}</td>
              <td>{skidrowPlantsDaBears5422}</td>
              <td>{skidrowDefuseDaBears5422}</td>
            </tr>
            <tr>
              <td>HoneyB</td>
              <td>{skidrowKillsHoneyB}</td>
              <td>{skidrowDeathsHoneyB}</td>
              <td>{skidrowKdRatioHoneyB}</td>
              <td>{skidrowPlantsHoneyB}</td>
              <td>{skidrowDefuseHoneyB}</td>
            </tr>
            <tr>
              <td>Jimmy</td>
              <td>{skidrowKillsJimmy}</td>
              <td>{skidrowDeathsJimmy}</td>
              <td>{skidrowKdRatioJimmy}</td>
              <td>{skidrowPlantsJimmy}</td>
              <td>{skidrowDefuseJimmy}</td>
            </tr>
            <tr>
              <td>SD</td>
              <td>{skidrowKillsSD}</td>
              <td>{skidrowDeathsSD}</td>
              <td>{skidrowKdRatioSD}</td>
              <td>{skidrowPlantsSD}</td>
              <td>{skidrowDefuseSD}</td>
            </tr>
          </tbody>
        </Table>
        <FormSkidrowSND />
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
              <th>Avg Plants</th>
              <th>Avg Defuse</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Da_Bears5422</td>
              <td>{terminalKillsDaBears5422}</td>
              <td>{terminalDeathsDaBears5422}</td>
              <td>{terminalKdRatioDaBears5422}</td>
              <td>{terminalPlantsDaBears5422}</td>
              <td>{terminalDefuseDaBears5422}</td>
            </tr>
            <tr>
              <td>HoneyB</td>
              <td>{terminalKillsHoneyB}</td>
              <td>{terminalDeathsHoneyB}</td>
              <td>{terminalKdRatioHoneyB}</td>
              <td>{terminalPlantsHoneyB}</td>
              <td>{terminalDefuseHoneyB}</td>
            </tr>
            <tr>
              <td>Jimmy</td>
              <td>{terminalKillsJimmy}</td>
              <td>{terminalDeathsJimmy}</td>
              <td>{terminalKdRatioJimmy}</td>
              <td>{terminalPlantsJimmy}</td>
              <td>{terminalDefuseJimmy}</td>
            </tr>
            <tr>
              <td>SD</td>
              <td>{terminalKillsSD}</td>
              <td>{terminalDeathsSD}</td>
              <td>{terminalKdRatioSD}</td>
              <td>{terminalPlantsSD}</td>
              <td>{terminalDefuseSD}</td>
            </tr>
          </tbody>
        </Table>
        <FormTerminalSND />
      </div>
      <h1 className='title'>Bomb Sites:</h1>
      <div id="cards-container">
        <Card.Img id="img2" variant="top" src={invasionSNDImg} />
        <Card.Img id="img2" variant="top" src={karachiSNDImg} />
        <Card.Img id="img2" variant="top" src={skidrowSNDImg} />
        <Card.Img id="img2" variant="top" src={highriseSNDImg} />
        <Card.Img id="img2" variant="top" src={terminalSNDImg} />
      </div>
    </>
  )
}
