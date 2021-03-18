import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import GeneradorDeCaratulas from './pages/generador-de-caratulas/generador-de-caratulas.component'

import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {

    }
  }

  render(){
    return(
      <div>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/generador-de-caratulas' component={GeneradorDeCaratulas}/>
        </Switch>
      </div>
    )
  }
}

export default App;
