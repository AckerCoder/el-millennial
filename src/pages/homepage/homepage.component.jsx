import React from 'react';
import CoverPage from '../../components/cover-page/cover-page.component'
import MainMenu from '../../components/main-menu/main-menu.component'

import './homepage.styles.css';


class HomePage extends React.Component {
  constructor(){
    super();
    this.state = {

    }
  }

  render(){
    return(
      <div className="ly-homepage">
        <CoverPage/>
        <MainMenu/>
      </div>
    )
  }
}

export default HomePage;
