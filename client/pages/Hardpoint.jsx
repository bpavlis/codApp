import '../styling/Mode.css'
import { Table, Card } from 'react-bootstrap';
import invasionHP from '../assets/invasionHP.png'
import karachiHP from '../assets/karachiHP.png'
import skidrowHP from '../assets/skidrowHP.png'
import subBaseHP from '../assets/subBaseHP.png'
import terminalHP from '../assets/terminalHP.png'

export default function Hardpoint() {

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
    </>
  )
}
