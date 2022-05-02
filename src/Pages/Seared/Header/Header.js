import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import "../../Styles/Header.css"
const Header = () => {
  const [user] = useAuthState(auth)
  return (
    <div className="header">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold fs-2 text-muted brand">
            Car-Deal
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" className="fw-bold pt-3 Sheared-Color">Home</Nav.Link>
              <Nav.Link as={Link} to="/blogs" className="fw-bold pt-3 Sheared-Color">Blogs</Nav.Link>
              {user ?
                <Nav>
                  <Nav.Link as={Link} to="/inventory/manageProduct" className="fw-bold pt-3 Sheared-Color">Manage-Inventory</Nav.Link>
                  <Nav.Link as={Link} to="/inventory/manageProduct/AddItem" className="fw-bold pt-3 Sheared-Color">Add-Items</Nav.Link>
                  <Nav.Link as={Link} to="/inventory/manageProduct/AddItem/myItems" className="fw-bold pt-3 Sheared-Color">My-Items</Nav.Link>
                </Nav> :
                <Nav>
                </Nav>
              }
              <Nav.Link as={Link} to="/signup">
                <button className="Sign-Login">Signup</button>
              </Nav.Link>
              {!user ? <Nav.Link as={Link} to="/login">
                <button className="Sign-Login">Login</button>
              </Nav.Link> :
                <Nav.Link>
                  <button className="Sign-Login" onClick={() => signOut(auth)}>Logout</button>
                </Nav.Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;