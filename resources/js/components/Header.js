import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import { Button, Navbar, Nav ,NavDropdown, Form, FormControl  } from 'react-bootstrap';
import Home from './Home';
export default class Header extends Component {
    render(){
    return (
        <Router>
        <div>

            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Link to="/">Home</Link>
            </Nav>
             
            </Navbar.Collapse>
            </Navbar>


            

        <Route path='/' component={Home}/>

        </div>
        </Router>
    );
 }
}


