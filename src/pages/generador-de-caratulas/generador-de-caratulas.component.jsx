import React from 'react';
import CoverPage from '../../components/cover-page/cover-page.component'

import './homepage.styles.css';


class HomePage extends React.Component {
  constructor(){
    super();
    this.state = {

    }
  }

  render(){
    return(
      <div className="ly-generador-de-caratulas">
        <CoverPage/>
      </div>
    )
  }
}

export default HomePage;
