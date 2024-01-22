import '../styling/HomePage.css'
import hardpointImage from '../assets/hardpoint.webp'
import searchImage from '../assets/search.webp'
import controlImage from '../assets/control.webp'
import { Card, Button, Table, Form } from 'react-bootstrap';
import StatForm from './StatForm';
import FormInvasionHp from './FormInvasionHp'
import FormKarachiHp from './FormKarachiHp'



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

      {/* <h1 className='title'>Enter Stats:</h1>
      <form className='inputContainer'>
        <Form.Select className='inputBox' aria-label="Default select example">
          <option>Select a mode:</option>
          <option value="Hardpoint">Hardpoint</option>
          <option value="Search&Destroy">Search & Destroy</option>
          <option value="Control">Control</option>
        </Form.Select>
        <Form.Select className='inputBox' aria-label="Default select example">
          <option>Select a map:</option>
          <option value="Invasion">Invasion</option>
          <option value="Karachi">Karachi</option>
          <option value="Skidrow">Skidrow</option>
          <option value="SubBase">Sub Base</option>
          <option value="Terminal">Terminal</option>
          <option value="Highrise">Highrise</option>

        </Form.Select>
        <Form.Select className='inputBox' aria-label="Default select example">
          <option>Select a player:</option>
          <option value="Da_Bears5422">Da_Bears5422</option>
          <option value="HoneyB">HoneyB</option>
          <option value="Jimmy">Jimmy</option>
          <option value="SD">SD</option>
        </Form.Select>
        <input className='inputBox' type="text" name="kills" placeholder="Enter kills" onChange={handleInputChange} />
        <input className='inputBox' type="text" name="deaths" placeholder="Enter deaths" onChange={handleInputChange} />
        <input className='inputBox' type="text" name="time" placeholder="Enter time (HP only)" onChange={handleInputChange} />
        <input className='inputBox' type="text" name="plants" placeholder="Enter plants (SND only)" onChange={handleInputChange} />
        <Button id="btnStats" href="/">Submit</Button>
      </form> */}

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

    </>
  )
}