import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "antd/dist/antd.css";
import LoginContainer from './Containers/LoginContainer/LoginContainer';
import HomeContainer from './Containers/HomeContainer/HomeContainer';
import InicioContainer from './Containers/InicioContainer/InicioContainer';

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/home">
            <HomeContainer />
          </Route>
          <Route path="/login">
            <LoginContainer />
          </Route>
          <Route path="/">
            <InicioContainer />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
