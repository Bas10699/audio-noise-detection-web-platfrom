import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Music from './Page/Music.js 2'
import Show from './Page/Menu';
import Play from './Page/Play'
import Text from './Page/Text'
import test from './Page/testnoise'
import wavesing from './Page/wavesing'

function App() {
  return (
    
    <Router exact path="/">

      <Route exact path='/' component={Show} />
      <Route exact path='/Music' component={Music} />
      <Route exact path='/Play' component={Play} />
      <Route exact path='/testnoise' component={test} />
      <Route exact path='/Text' component={Text} />
      <Route exact path='/wavesing' component={wavesing} />
      
    </Router>
  );
}

export default App;
