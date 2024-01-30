import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import AuthContext from '../MyContext2';

function NavBar() {
  const authCtx = useContext(AuthContext)
  return (
    <>
       <Navbar bg="dark" fixed='top' data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            {authCtx.isLoggedIn && <Nav.Link as={Link} to="/store">Store</Nav.Link>}
            
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/login">Login/signup</Nav.Link>
            {authCtx.isLoggedIn && <Nav.Link as={Link} to="/logout">Logout</Nav.Link>}
            
          </Nav>
        </Container>
      </Navbar>
     
    </>
  );
}

export default NavBar;