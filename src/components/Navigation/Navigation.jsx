import * as userService from '../../utilities/users-service';
import './Navigation.css'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function Navigation({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }
  return (
    <Navbar sticky="top" bg="mint" expand="lg">
      <Navbar.Brand ><Link to="/"><img src="https://i.imgur.com/W9JYIXE.png" alt="logo" width="60" className="d-inline-block align-top" /></Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link><Link to="/"><img src="https://i.imgur.com/SAi3uRX.png" alt="logohome" height="20" /></Link></Nav.Link>
          <Nav.Link><Link to="/about">About</Link></Nav.Link>
          <Nav.Link><Link to="/charities">Our Charities</Link></Nav.Link>
          {user ?
            <NavDropdown title="Account" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to="/profile">Profile</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/pledges">My Donations</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item><Link to="/" onClick={handleLogOut}>Logout</Link></NavDropdown.Item>
            </NavDropdown>
            :
            <Nav.Link><Link to="/login">Login</Link></Nav.Link>
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}