import './Navigation.css'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, NavLink} from 'react-router-dom';


export default function Navigation({ user, handleLogOut }) {

  return (
    <Navbar bg="mint" expand="lg">
      <Navbar.Brand as={Link} to="/"><img src="https://i.imgur.com/W9JYIXE.png" alt="logo" width="60" className="d-inline-block align-top" /></Navbar.Brand>
      <Nav.Link as={NavLink} to="/"><img src="https://i.imgur.com/159ISA3.png" alt="logohome" height="30" /></Nav.Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={NavLink} to="/about">About</Nav.Link>
          <Nav.Link as={NavLink} to="/charities">Our Charities</Nav.Link>
          {user ?
            <NavDropdown title="Account" id="basic-nav-dropdown" >
              <NavDropdown.Item as={NavLink}to="/profile">Profile</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/pledges">My Donations</NavDropdown.Item>
              {user.isAdmin ?
              <>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to="/charities/add">Add Charity</NavDropdown.Item>
                </>
                :
                ''
              }
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/" onClick={handleLogOut}>Logout</NavDropdown.Item>
            </NavDropdown>
            :
            <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}