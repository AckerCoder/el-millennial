import React from 'react';
import { Switch, Route } from 'react-router-dom';

<<<<<<< HEAD
=======
import HomePage from './pages/homepage/homepage.component';

>>>>>>> cover page set up
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
<<<<<<< HEAD
          <Route exact path='/'/>
=======
          <Route exact path='/' component={HomePage}/>
>>>>>>> cover page set up
          <Route path='/generador-de-caratulas'/>
        </Switch>
      </div>
    )
  }
}

export default App;
