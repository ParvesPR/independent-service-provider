import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo.png';
import { signOut } from 'firebase/auth';

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  }

  return (
    <Navbar sticky="top" bg="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-space-around'>
          <Nav className="me-auto ">
            <Nav.Link className='text-white' as={Link} to="/home">Home</Nav.Link>
            <Nav.Link className='text-white' href="home#services">Services</Nav.Link>
            <Nav.Link className='text-white' as={Link} to="/about">About</Nav.Link>
            <Nav.Link className='text-white' href="home#footer">Footer</Nav.Link>
          </Nav>
          <Nav className="ms-auto ">
            {
              user ?
                <button onClick={handleSignOut} className='btn btn-primary'>Sign Out</button> :
                <Link className='btn btn-outline-info text-decoration-none' to="/login">Login</Link>}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};

export default Header;