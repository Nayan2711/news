import React from 'react';
import { Navbar,Nav,Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


export default function Navbar1() {
  return (
    <div>
      <Navbar bg="dark" className='fixed-top' variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <li><Link className="nav-link" to='/'>Home</Link></li>
      <li> <Link className="nav-link" to="/business">Business</Link></li>
      <li><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
      <li><Link className="nav-link" to="/general">General</Link></li>
      <li><Link className="nav-link" to="/health">Health</Link></li>
      <li><Link className="nav-link" to="/science">Science</Link></li>
      <li><Link className="nav-link" to="/sports">Sports</Link></li>
      {/* <li><Link className="nav-link" to="/technology">Technology</Link></li> */}
    </Nav>
    </Container>
  </Navbar>
    </div>
  )
}
