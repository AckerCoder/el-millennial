import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

class CoverPage extends React.Component {
  constructor(){
    super();
    this.state = {
        
    }
  }

  render(){
    return(
      <div>
        <Switch>
          <Route exact path='/'/>
          <Route path='/generador-de-caratulas'/>
        </Switch>
      </div>
    )
  }
}

export default CoverPage;