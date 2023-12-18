import '../styling/Mode.css'
import { Table, Card } from 'react-bootstrap';
import invasionSND from '../assets/invasionSND.png'
import karachiSND from '../assets/karachiSND.png'
import skidrowSND from '../assets/skidrowSND.png'
import highriseSND from '../assets/highriseSND.png'
import terminalSND from '../assets/terminalSND.png'

export default function Search() {

  return (
    <>
      <h1>Search & Destroy Stats:</h1>
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
      <h1 className='title'>Bomb Sites:</h1>
      <div id="cards-container">
        <Card.Img id="img2" variant="top" src={invasionSND} />
        <Card.Img id="img2" variant="top" src={karachiSND} />
        <Card.Img id="img2" variant="top" src={skidrowSND} />
        <Card.Img id="img2" variant="top" src={highriseSND} />
        <Card.Img id="img2" variant="top" src={terminalSND} />
      </div>
    </>
  )
}
