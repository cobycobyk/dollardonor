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
    <Navbar bg="mint" expand="lg">
      <Navbar.Brand ><Link to="/"><img src="https://i.imgur.com/W9JYIXE.png" alt="logo" width="60" className="d-inline-block align-top" /></Link></Navbar.Brand>
          <Nav.Link><Link to="/"><img src="https://i.imgur.com/159ISA3.png" alt="logohome" height="30" /></Link></Nav.Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
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