import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Jobfinder from './Jobfinder';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home"><img src={logo} className="App-logo" alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Jobfinder</Nav.Link>
            <Nav.Link href="#link">Skillmanager</Nav.Link>
            <Nav.Link href="#link">Feedback</Nav.Link>
          </Nav>
          <Button variant="outline-primary" style={{ borderColor: '#303F9F', color: '#303F9F' }} >Login</Button>
          <Button variant="primary" style={{ backgroundColor: '#303F9F', borderColor: '#303F9F', marginLeft: 15 }}>Register</Button>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
          <Route path="/about">
            <Jobfinder/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
