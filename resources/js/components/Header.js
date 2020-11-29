import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import { Button, Navbar, Nav ,NavDropdown, Form, FormControl  } from 'react-bootstrap'
import Home from './Home';
import About from './About';
import Inc from './inc/Index';
import All from './AllMusic';
export default class Header extends Component {
    render(){
    return (
        <Router>
        <div>

            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/inc">Inc</Link>
            <Link to="/all-music">All Music</Link>
            </Nav>
             
            </Navbar.Collapse>
            </Navbar>


            

        <Route path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/all-music' component={All}/>
        <Route path='/inc' component={Inc}/>

        </div>
        </Router>
    );
 }
}


