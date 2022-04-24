import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import PokemonList from './containers/PokemonList';

function App() {
  return (
    <Router>
      <div className="App">
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/pokemon" component={PokemonList} />
            </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;
