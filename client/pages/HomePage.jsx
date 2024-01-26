import '../styling/HomePage.css'
import hardpointImage from '../assets/hardpoint.webp'
import searchImage from '../assets/search.webp'
import controlImage from '../assets/control.webp'
import { Card, Button, Table, Form } from 'react-bootstrap';
import React, { useState, useEffect } from "react";



export default function HomePage() {
  const [invasionHp, setInvasionHp] = useState([]);
  const [karachiHp, setKarachiHp] = useState([]);
  const [skidrowHp, setSkidrowHp] = useState([]);
  const [subBaseHp, setSubBaseHp] = useState([]);
  const [terminalHp, setTerminalHp] = useState([]);
  const [highriseSND, setHighriseSND] = useState([]);
  const [invasionSND, setInvasionSND] = useState([]);
  const [karachiSND, setKarachiSND] = useState([]);
  const [skidrowSND, setSkidrowSND] = useState([]);
  const [terminalSND, setTerminalSND] = useState([]);
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
      };
    }
  }
  // HoneyB------------------------------------------
  function getHoneyBDataAverages(data) {
    const HoneyBData = data.filter(game => game.playerName === 'HoneyB');

    // Calculate the averages
    if (HoneyBData.length > 0) {
      const totalKills = HoneyBData.reduce((sum, game) => sum + game.kills, 0);
      const totalDeaths = HoneyBData.reduce((sum, game) => sum + game.deaths, 0);
      const averageKills = totalKills / HoneyBData.length;
      const averageDeaths = totalDeaths / HoneyBData.length;
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
  // SD------------------------------------------
  function getSDDataAverages(data) {
    const SDData = data.filter(game => game.playerName === 'SD');

    // Calculate the averages
    if (SDData.length > 0) {
      const totalKills = SDData.reduce((sum, game) => sum + game.kills, 0);
      const totalDeaths = SDData.reduce((sum, game) => sum + game.deaths, 0);
      const averageKills = totalKills / SDData.length;
      const averageDeaths = totalDeaths / SDData.length;
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
  // Jimmy------------------------------------------
  function getJimmyDataAverages(data) {
    const JimmyData = data.filter(game => game.playerName === 'Jimmy');

    // Calculate the averages
    if (JimmyData.length > 0) {
      const totalKills = JimmyData.reduce((sum, game) => sum + game.kills, 0);
      const totalDeaths = JimmyData.reduce((sum, game) => sum + game.deaths, 0);
      const averageKills = totalKills / JimmyData.length;
      const averageDeaths = totalDeaths / JimmyData.length;
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

  const allAverages = calculateAverages([highriseCNT, invasionCNT, karachiCNT, highriseSND, invasionSND, karachiSND, skidrowSND, terminalSND, skidrowHp, invasionHp, karachiHp, terminalHp, subBaseHp]);
  return (
    <>
      <h1>Game Modes:</h1>
      <div id="cards-container">
        <Card id="card " style={{ width: '19rem', height: '27rem', border: '2px solid white' }}>
          <Card.Img id="img" variant="top" src={hardpointImage} />
          <Card.Body>
            <Card.Title id="modeName">Hardpoint</Card.Title>
            <Button id="btn" href="/hardpoint">See Stats</Button>
          </Card.Body>
        </Card>
        <Card id="card " style={{ width: '19rem', height: '27rem', border: '2px solid white' }}>
          <Card.Img id="img" variant="top" src={searchImage} />
          <Card.Body>
            <Card.Title id="modeName">Search & Destroy</Card.Title>
            <Button id="btn" href="/search">See Stats</Button>
          </Card.Body>
        </Card>
        <Card id="card " style={{ width: '19rem', height: '27rem', border: '2px solid white' }}>
          <Card.Img id="img" variant="top" src={controlImage} />
          <Card.Body>
            <Card.Title id="modeName">Control</Card.Title>
            <Button id="btn" href="/control">See Stats</Button>
          </Card.Body>
        </Card>
      </div>

      <h1 className="title">Overall Stats:</h1>
      <div>
        <h3 className="title">Averages Across All Maps:</h3>
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
              <td>{allAverages.daBearsAvg.averageKills.toFixed(2)}</td>
              <td>{allAverages.daBearsAvg.averageDeaths.toFixed(2)}</td>
              <td>{(allAverages.daBearsAvg.averageKills / allAverages.daBearsAvg.averageDeaths).toFixed(2)}</td>
            </tr>
            <tr>
              <td>HoneyB</td>
              <td>{allAverages.honeyBAvg.averageKills.toFixed(2)}</td>
              <td>{allAverages.honeyBAvg.averageDeaths.toFixed(2)}</td>
              <td>{(allAverages.honeyBAvg.averageKills / allAverages.honeyBAvg.averageDeaths).toFixed(2)}</td>
            </tr>
            <tr>
              <td>Jimmy</td>
              <td>{allAverages.jimmyAvg.averageKills.toFixed(2)}</td>
              <td>{allAverages.jimmyAvg.averageDeaths.toFixed(2)}</td>
              <td>{(allAverages.jimmyAvg.averageKills / allAverages.jimmyAvg.averageDeaths).toFixed(2)}</td>
            </tr>
            <tr>
              <td>SD</td>
              <td>{allAverages.sdAvg.averageKills.toFixed(2)}</td>
              <td>{allAverages.sdAvg.averageDeaths.toFixed(2)}</td>
              <td>{(allAverages.sdAvg.averageKills / allAverages.sdAvg.averageDeaths).toFixed(2)}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  )
}