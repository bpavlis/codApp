import '../styling/HomePage.css'
import hardpointImage from '../assets/hardpoint.webp'
import searchImage from '../assets/search.webp'
import controlImage from '../assets/control.webp'
import { Card, Button, Table, Form } from 'react-bootstrap';
import StatForm from './StatForm';
import FormInvasionHp from './FormInvasionHp'
import FormKarachiHp from './FormKarachiHp'
import FormSkidrowHp from './FormSkidrowHp'
import FormSubBaseHp from './FormSubBaseHp'
import FormTerminalHp from './FormTerminalHp'




export default function HomePage() {
  const handleInputChange = ({ target: { name, value } }) => {
    setUserData({ ...userData, [name]: value });
  }

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
      <Table responsive="sm">
        <thead>
          <tr>
            <th>Username</th>
            <th>Avg Kills</th>
            <th>Avg Deaths</th>
            <th>K/D</th>
            <th>Avg Time</th>
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
            <td>#</td>
          </tr>
          <tr>
            <td>HoneyB</td>
            <td>#</td>
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
            <td>#</td>
          </tr>
          <tr>
            <td>SD</td>
            <td>#</td>
            <td>#</td>
            <td>#</td>
            <td>#</td>
            <td>#</td>
          </tr>
        </tbody>
      </Table>
      {/* <StatForm /> */}
      <FormInvasionHp />
      <FormKarachiHp />
      <FormSkidrowHp />
      <FormSubBaseHp />
      <FormTerminalHp />





    </>
  )
}