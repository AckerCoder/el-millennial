import React from 'react';
<<<<<<< HEAD
import { Switch, Route } from 'react-router-dom';

import './App.css';
=======

import './cover-page.styles.css';
import logo from '../../assets/logo.png'
>>>>>>> cover page set up

class CoverPage extends React.Component {
  constructor(){
    super();
    this.state = {
        
    }
  }

  render(){
    return(
<<<<<<< HEAD
      <div>
        <Switch>
          <Route exact path='/'/>
          <Route path='/generador-de-caratulas'/>
        </Switch>
=======
      <div className="background-cover-page">
          <img id="logo" src={logo} alt="Logo"/>
>>>>>>> cover page set up
      </div>
    )
  }
}

export default CoverPage;