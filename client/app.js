import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
//Components utilized in this page
import Login from './login.js';
import Homepage from './containers/homepage.js';


const App = () => {

    return (
      <Router>
        <header>
            Magnolia 🌸
            <Link to="/login">Login</Link>
            <Link to="/homepage">Homepage</Link>
        </header>
        <Route path="/login" component={ Login } />
        <Route path="/homepage" component={ Homepage } />
        <Route path="/homepage/:projectId" component={ Login } />
      </Router>
    )
}

export default App;