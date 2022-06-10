import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import PokemonSearch from './containers/PokemonSearch';
import Teams from './containers/Teams';
import Saved from './containers/Saved'

function App() {
  return (
    <Router>
      <div className="App">
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/search" component={PokemonSearch} />
              <Route path="/teams" component={Teams}/>
              <Route path="/saved" component={Saved} /> 
              <Route path="/about" component={About} />
            </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;
