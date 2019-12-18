import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "antd/dist/antd.css";
import LandingContainer from './Containers/LandingContainer/LandingContainer';
import PedidoContainer from './Containers/PedidoContainer/PedidoContainer';

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/pedir">
            <PedidoContainer />
          </Route>
          <Route path="/">
            <LandingContainer />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
