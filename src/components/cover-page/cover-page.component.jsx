import React from 'react';

import './cover-page.styles.css';
import logo from '../../assets/img/logo.png'

class CoverPage extends React.Component {
  constructor(){
    super();
    this.state = {
        
    }
  }

  render(){
    return(
      <div className="background-cover-page">
          <img id="logo" src={logo} alt="Logo"/>
      </div>
    )
  }
}

export default CoverPage;