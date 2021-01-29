import * as userService from '../../utilities/users-service';
import './Navigation.css'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


export default function Navigation({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }
  return (
    <Navbar sticky="top" bg="mint" expand="lg">
      <Navbar.Brand href="/"><img src="https://i.imgur.com/W9JYIXE.png" alt="logo" width="60" className="d-inline-block align-top" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/"><img src="https://i.imgur.com/SAi3uRX.png" alt="logohome" height="20" /></Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/charities">Our Charities</Nav.Link>
          {user ?
            <NavDropdown title="Account" id="basic-nav-dropdown">
              <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">My Donations</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/" onClick={handleLogOut}>Logout</NavDropdown.Item>
            </NavDropdown>
            :
            <Nav.Link href="/login">Login</Nav.Link>
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}