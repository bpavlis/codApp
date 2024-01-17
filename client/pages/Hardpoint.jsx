import '../styling/Mode.css'
import { Table, Card } from 'react-bootstrap';
import invasionHP from '../assets/invasionHP.png'
import karachiHP from '../assets/karachiHP.png'
import skidrowHP from '../assets/skidrowHP.png'
import subBaseHP from '../assets/subBaseHP.png'
import terminalHP from '../assets/terminalHP.png'

import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';

export default function Hardpoint() {
  const [invasionHp, setInvasionHp] = useState([]);

  useEffect(() => {
    fetch("/api/invasionHp", {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        // Check if data is an array
        if (Array.isArray(data)) {
          setInvasionHp(data);
        } else if (typeof data === 'object' && data !== null) {
          // Handle object format, extract properties and update state
          const { playerName, kills, deaths, kd, avgTime } = data;
          setInvasionHp([{ playerName, kills, deaths, kd, avgTime }]);
        } else {
          console.error("Invalid data format received from the API");
        }
      })
      .catch((error) => console.log(error));
  }, []);


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
      <div className="box" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', backgroundColor: "#2d1064", width: '100%' }}>
        {invasionHp.map((player) => (
          <Card key={player._id} style={{ width: '50rem', height: '45rem', margin: '.5rem' }}>
            <Card.Body>
              <Card.Title>{player.playerName}</Card.Title><br />
              <Card.Text>
                Kills: {player.kills}<br />
                Deaths: {player.deaths}<br />
                Avg Time: {player.timeInMatch}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  </>
)
}
