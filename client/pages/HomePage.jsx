import '../styling/HomePage.css'
import hardpointImage from '../assets/hardpoint.webp'
import searchImage from '../assets/search.webp'
import controlImage from '../assets/control.webp'
import { Card, Button } from 'react-bootstrap';



export default function HomePage() {

  return (
    <>
      <h1>Home Page</h1>
      <div id="cards-container">
        <Card id="card " style={{ width: '19rem', height: '27rem', border: '2px solid white' }}>
          <Card.Img id="img" variant="top" src={hardpointImage} />
          <Card.Body>
            <Card.Title id="modeName">Hardpoint</Card.Title>
            <Button id="btn" href="/hardpoint">See More</Button>
          </Card.Body>
        </Card>
        <Card id="card " style={{ width: '19rem', height: '27rem', border: '2px solid white' }}>
          <Card.Img id="img" variant="top" src={searchImage} />
          <Card.Body>
            <Card.Title id="modeName">Search & Destroy</Card.Title>
            <Button id="btn" href="/search">See More</Button>
          </Card.Body>
        </Card>
        <Card id="card " style={{ width: '19rem', height: '27rem', border: '2px solid white' }}>
          <Card.Img id="img" variant="top" src={controlImage} />
          <Card.Body>
            <Card.Title id="modeName">Control</Card.Title>
            <Button id="btn" href="/control">See More</Button>
          </Card.Body>
        </Card>
      </div>

    </>
  )
}