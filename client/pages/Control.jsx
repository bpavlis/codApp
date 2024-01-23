import '../styling/Mode.css'
import React, { useState, useEffect } from "react";
import { Table, Card } from 'react-bootstrap';
import invasionCNTImg from '../assets/invasionCNT.png'
import highriseCNTImg from '../assets/highriseCNT.png'
import karachiCNTImg from '../assets/karachiCNT.png'
import FormHighriseCNT from './FormHighriseCNT'
import FormInvasionCNT from './FormInvasionCNT'
import FormKarachiCNT from './FormKarachiCNT'



export default function Control() {
  const [highriseCNT, setHighriseCNT] = useState([]);
  const [invasionCNT, setInvasionCNT] = useState([]);
  const [karachiCNT, setKarachiCNT] = useState([]);


  useEffect(() => {
    fetch("/api/highriseCNT", {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setHighriseCNT(data);
        } else if (data && data.result === 'success' && Array.isArray(data.payload)) {
          setHighriseCNT(data.payload);
        } else {
          console.error("Invalid data format received from the API");
        }
      })
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    fetch("/api/invasionCNT", {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setInvasionCNT(data);
        } else if (data && data.result === 'success' && Array.isArray(data.payload)) {
          setInvasionCNT(data.payload);
        } else {
          console.error("Invalid data format received from the API");
        }
      })
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    fetch("/api/karachiCNT", {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setKarachiCNT(data);
        } else if (data && data.result === 'success' && Array.isArray(data.payload)) {
          setKarachiCNT(data.payload);
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
      const averageKills = totalKills / daBearsData.length;
      const averageDeaths = totalDeaths / daBearsData.length;
      return {
        averageKills,
        averageDeaths,
      };
    } else {
      return {
        averageKills: 0,
        averageDeaths: 0,
      }; // If no data found for Da_Bears5422
    }
  }
  const highriseAveragesDaBears5422 = getDaBears5422DataAverages(highriseCNT);
  const invasionAveragesDaBears5422 = getDaBears5422DataAverages(invasionCNT);
  const karachiAveragesDaBears5422 = getDaBears5422DataAverages(karachiCNT);

  // Highrise
  const highriseKdRatioDaBears5422 = (highriseAveragesDaBears5422.averageKills / highriseAveragesDaBears5422.averageDeaths).toFixed(2);
  const highriseKillsDaBears5422 = (highriseAveragesDaBears5422.averageKills).toFixed(2);
  const highriseDeathsDaBears5422 = (highriseAveragesDaBears5422.averageDeaths).toFixed(2);
  // Invasion
  const invasionKdRatioDaBears5422 = (invasionAveragesDaBears5422.averageKills / invasionAveragesDaBears5422.averageDeaths).toFixed(2);
  const invasionKillsDaBears5422 = (invasionAveragesDaBears5422.averageKills).toFixed(2);
  const invasionDeathsDaBears5422 = (invasionAveragesDaBears5422.averageDeaths).toFixed(2);
  // Karachi
  const karachiKdRatioDaBears5422 = (karachiAveragesDaBears5422.averageKills / karachiAveragesDaBears5422.averageDeaths).toFixed(2);
  const karachiKillsDaBears5422 = (karachiAveragesDaBears5422.averageKills).toFixed(2);
  const karachiDeathsDaBears5422 = (karachiAveragesDaBears5422.averageDeaths).toFixed(2);



  // HoneyB------------------------------------------
  function getHoneyBDataAverages(data) {
    const daBearsData = data.filter(game => game.playerName === 'HoneyB');

    // Calculate the averages
    if (daBearsData.length > 0) {
      const totalKills = daBearsData.reduce((sum, game) => sum + game.kills, 0);
      const totalDeaths = daBearsData.reduce((sum, game) => sum + game.deaths, 0);
      const averageKills = totalKills / daBearsData.length;
      const averageDeaths = totalDeaths / daBearsData.length;
      return {
        averageKills,
        averageDeaths,
      };
    } else {
      return {
        averageKills: 0,
        averageDeaths: 0,
      };
    }
  }
  const highriseAveragesHoneyB = getHoneyBDataAverages(highriseCNT);
  const invasionAveragesHoneyB = getHoneyBDataAverages(invasionCNT);
  const karachiAveragesHoneyB = getHoneyBDataAverages(karachiCNT);

  // Highrise
  const highriseKdRatioHoneyB = (highriseAveragesHoneyB.averageKills / highriseAveragesHoneyB.averageDeaths).toFixed(2);
  const highriseKillsHoneyB = (highriseAveragesHoneyB.averageKills).toFixed(2);
  const highriseDeathsHoneyB = (highriseAveragesHoneyB.averageDeaths).toFixed(2);
  // Invasion
  const invasionKdRatioHoneyB = (invasionAveragesHoneyB.averageKills / invasionAveragesHoneyB.averageDeaths).toFixed(2);
  const invasionKillsHoneyB = (invasionAveragesHoneyB.averageKills).toFixed(2);
  const invasionDeathsHoneyB = (invasionAveragesHoneyB.averageDeaths).toFixed(2);
  // Karachi
  const karachiKdRatioHoneyB = (karachiAveragesHoneyB.averageKills / karachiAveragesHoneyB.averageDeaths).toFixed(2);
  const karachiKillsHoneyB = (karachiAveragesHoneyB.averageKills).toFixed(2);
  const karachiDeathsHoneyB = (karachiAveragesHoneyB.averageDeaths).toFixed(2);



  // SD------------------------------------------
  function getSDDataAverages(data) {
    const daBearsData = data.filter(game => game.playerName === 'SD');

    // Calculate the averages
    if (daBearsData.length > 0) {
      const totalKills = daBearsData.reduce((sum, game) => sum + game.kills, 0);
      const totalDeaths = daBearsData.reduce((sum, game) => sum + game.deaths, 0);
      const averageKills = totalKills / daBearsData.length;
      const averageDeaths = totalDeaths / daBearsData.length;
      return {
        averageKills,
        averageDeaths,
      };
    } else {
      return {
        averageKills: 0,
        averageDeaths: 0,
      };
    }
  }
  const highriseAveragesSD = getSDDataAverages(highriseCNT);
  const invasionAveragesSD = getSDDataAverages(invasionCNT);
  const karachiAveragesSD = getSDDataAverages(karachiCNT);

  // Highrise
  const highriseKdRatioSD = (highriseAveragesSD.averageKills / highriseAveragesSD.averageDeaths).toFixed(2);
  const highriseKillsSD = (highriseAveragesSD.averageKills).toFixed(2);
  const highriseDeathsSD = (highriseAveragesSD.averageDeaths).toFixed(2);
  // Invasion
  const invasionKdRatioSD = (invasionAveragesSD.averageKills / invasionAveragesSD.averageDeaths).toFixed(2);
  const invasionKillsSD = (invasionAveragesSD.averageKills).toFixed(2);
  const invasionDeathsSD = (invasionAveragesSD.averageDeaths).toFixed(2);
  // Karachi
  const karachiKdRatioSD = (karachiAveragesSD.averageKills / karachiAveragesSD.averageDeaths).toFixed(2);
  const karachiKillsSD = (karachiAveragesSD.averageKills).toFixed(2);
  const karachiDeathsSD = (karachiAveragesSD.averageDeaths).toFixed(2);



  // Jimmy------------------------------------------
  function getJimmyDataAverages(data) {
    const daBearsData = data.filter(game => game.playerName === 'Jimmy');

    // Calculate the averages
    if (daBearsData.length > 0) {
      const totalKills = daBearsData.reduce((sum, game) => sum + game.kills, 0);
      const totalDeaths = daBearsData.reduce((sum, game) => sum + game.deaths, 0);
      const averageKills = totalKills / daBearsData.length;
      const averageDeaths = totalDeaths / daBearsData.length;
      return {
        averageKills,
        averageDeaths,
      };
    } else {
      return {
        averageKills: 0,
        averageDeaths: 0,
      };
    }
  }
  const highriseAveragesJimmy = getJimmyDataAverages(highriseCNT);
  const invasionAveragesJimmy = getJimmyDataAverages(invasionCNT);
  const karachiAveragesJimmy = getJimmyDataAverages(karachiCNT);

  // Highrise
  const highriseKdRatioJimmy = (highriseAveragesJimmy.averageKills / highriseAveragesJimmy.averageDeaths).toFixed(2);
  const highriseKillsJimmy = (highriseAveragesJimmy.averageKills).toFixed(2);
  const highriseDeathsJimmy = (highriseAveragesJimmy.averageDeaths).toFixed(2);
  // Invasion
  const invasionKdRatioJimmy = (invasionAveragesJimmy.averageKills / invasionAveragesJimmy.averageDeaths).toFixed(2);
  const invasionKillsJimmy = (invasionAveragesJimmy.averageKills).toFixed(2);
  const invasionDeathsJimmy = (invasionAveragesJimmy.averageDeaths).toFixed(2);
  // Karachi
  const karachiKdRatioJimmy = (karachiAveragesJimmy.averageKills / karachiAveragesJimmy.averageDeaths).toFixed(2);
  const karachiKillsJimmy = (karachiAveragesJimmy.averageKills).toFixed(2);
  const karachiDeathsJimmy = (karachiAveragesJimmy.averageDeaths).toFixed(2);


  return (
    <>
      <h1>Control Stats:</h1>
      <div>
        <h3 className="title">Highrise Stats:</h3>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>Username</th>
              <th>Avg Kills</th>
              <th>Avg Deaths</th>
              <th>K/D</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Da_Bears5422</td>
              <td>{highriseKillsDaBears5422}</td>
              <td>{highriseDeathsDaBears5422}</td>
              <td>{highriseKdRatioDaBears5422}</td>
            </tr>
            <tr>
              <td>HoneyB</td>
              <td>{highriseKillsHoneyB}</td>
              <td>{highriseDeathsHoneyB}</td>
              <td>{highriseKdRatioHoneyB}</td>
            </tr>
            <tr>
              <td>Jimmy</td>
              <td>{highriseKillsJimmy}</td>
              <td>{highriseDeathsJimmy}</td>
              <td>{highriseKdRatioJimmy}</td>
            </tr>
            <tr>
              <td>SD</td>
              <td>{highriseKillsSD}</td>
              <td>{highriseDeathsSD}</td>
              <td>{highriseKdRatioSD}</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <FormHighriseCNT />
      <div>
        <h3 className="title">Invasion Stats:</h3>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>Username</th>
              <th>Avg Kills</th>
              <th>Avg Deaths</th>
              <th>K/D</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Da_Bears5422</td>
              <td>{invasionKillsDaBears5422}</td>
              <td>{invasionDeathsDaBears5422}</td>
              <td>{invasionKdRatioDaBears5422}</td>
            </tr>
            <tr>
              <td>HoneyB</td>
              <td>{invasionKillsHoneyB}</td>
              <td>{invasionDeathsHoneyB}</td>
              <td>{invasionKdRatioHoneyB}</td>
            </tr>
            <tr>
              <td>Jimmy</td>
              <td>{invasionKillsJimmy}</td>
              <td>{invasionDeathsJimmy}</td>
              <td>{invasionKdRatioJimmy}</td>
            </tr>
            <tr>
              <td>SD</td>
              <td>{invasionKillsSD}</td>
              <td>{invasionDeathsSD}</td>
              <td>{invasionKdRatioSD}</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <FormInvasionCNT />
      <div>
        <h3 className="title">Karachi Stats:</h3>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>Username</th>
              <th>Avg Kills</th>
              <th>Avg Deaths</th>
              <th>K/D</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Da_Bears5422</td>
              <td>{karachiKillsDaBears5422}</td>
              <td>{karachiDeathsDaBears5422}</td>
              <td>{karachiKdRatioDaBears5422}</td>
            </tr>
            <tr>
              <td>HoneyB</td>
              <td>{karachiKillsHoneyB}</td>
              <td>{karachiDeathsHoneyB}</td>
              <td>{karachiKdRatioHoneyB}</td>
            </tr>
            <tr>
              <td>Jimmy</td>
              <td>{karachiKillsJimmy}</td>
              <td>{karachiDeathsJimmy}</td>
              <td>{karachiKdRatioJimmy}</td>
            </tr>
            <tr>
              <td>SD</td>
              <td>{karachiKillsSD}</td>
              <td>{karachiDeathsSD}</td>
              <td>{karachiKdRatioSD}</td>
            </tr>
          </tbody>
        </Table>
        <FormKarachiCNT />
      </div>
      <h1 className='title'>Control Sites:</h1>
      <div id="cards-container">
        <Card.Img id="img2" variant="top" src={invasionCNTImg} />
        <Card.Img id="img2" variant="top" src={karachiCNTImg} />
        <Card.Img id="img2" variant="top" src={highriseCNTImg} />
      </div>
    </>
  )
}
