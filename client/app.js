import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './login.js';


const App = () => {

    return (
      <Router>
        <header>
            Magnolia 🌸
            <Link to="/login">Login</Link>
        </header>
        <Route path="/login" component={ Login } />
      </Router>
    )
}

export default App;