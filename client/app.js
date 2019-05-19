import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
//Components utilized in this page
import Login from './login.js';
import Homepage from './containers/homepage.js';
import ProjectCanvas from './containers/project.js';


const App = () => {

    return (
      <Router>
        <Header>
            Magnolia 🌸
            <Link to="/login">Login</Link>
            <Link to="/homepage">Homepage</Link>
            <Link to="/login">Logout</Link>
        </Header>
        <Route path="/login" component={ Login } />
        <Route path="/homepage" component={ Homepage } />
        <Route path="/project/:id" component={ ProjectCanvas } />
      </Router>
    )
}

export default App;

const Header = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 400px;
    font-family: 'Poppins', sans-serif;
    padding: 10px;
    border-radius: 3px;
`
