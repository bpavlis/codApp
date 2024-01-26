import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useAppCtx } from "../utils/AppProvider"

export default function Header() {
  const { user } = useAppCtx()

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">COD Stats</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/hardpoint">Hardpoint</Nav.Link>
            <Nav.Link href="/search">Search & Destroy</Nav.Link>
            <Nav.Link href="/control">Control</Nav.Link>
            <Nav.Link href="https://www.youtube.com/channel/UCuu2Wct3qvJmOJRijb_3rCA" target="_blank">YouTube</Nav.Link>

            {/* { user?._id !== undefined ? (
              <Nav.Link href="/logout">Logout</Nav.Link>
            ):(
              <Nav.Link href="/auth">Login</Nav.Link>
            )} */}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
