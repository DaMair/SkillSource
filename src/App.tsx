import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";
import { Button, Nav, Navbar } from 'react-bootstrap';
import Jobfinder from './Jobfinder';
import Skillmanager from './Skillmanager';
import Feedback from './Feedback';
import { jobs } from './data';
import Login from './Login';
import Register from './Register';

//https://rangle.github.io/react-training/react-cardlist/
const App = () => {
  return (
   <div className="App">
      <head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </head> 
      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand><img src={logo} className="App-logo" alt="logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/jobfinder">Jobfinder</Nav.Link>
              <Nav.Link href="/skillmanager">Skillmanager</Nav.Link>
              <Nav.Link href="/feedback">Feedback</Nav.Link>
            </Nav>
            <Button variant="outline-primary" style={{ borderColor: '#303F9F', color: '#303F9F' }} href="/login">Login</Button>
            <Button variant="primary" style={{ backgroundColor: '#303F9F', borderColor: '#303F9F', marginLeft: 15 }} href="/register">Register</Button>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route path="/jobfinder">
            <Jobfinder />
          </Route>
          <Route path="/skillmanager">
            <Skillmanager />
          </Route>
          <Route path="/feedback">
            <Feedback />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
