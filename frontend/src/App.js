import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import PokemonSearch from './containers/PokemonSearch';

function App() {
  return (
    <Router>
      <div className="App">
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/search" component={PokemonSearch} />
            </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;
