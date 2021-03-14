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
      <div className="background-homepage">
        <CoverPage/>
      </div>
    )
  }
}

export default HomePage;
