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
          <Link className="link" to="/login"><Logo>Magnolia</Logo></Link>
          <RightNav>
            <Link className="right-link" to="/homepage">Homepage</Link>
            <Link className="right-link" to="/login">Logout</Link>
          </RightNav>
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
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-family: 'Raleway', sans-serif;
    padding: 20px;
    border-radius: 3px;
    background-color: #847996;
`
const Logo = styled.h2`
  font-family: 'Raleway', sans-serif;
  color: white;
`

const RightNav = styled.div`
  display: flex;
  width: 200px;
  justify-content: flex-end;
`

