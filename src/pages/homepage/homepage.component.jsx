import React from 'react';
import CoverPage from '../../components/cover-page/cover-page.component'
import CurrentTool from '../../components/current-tool/current-tool.component'
import MainMenuButton from '../../components/main-menu-button/main-menu-button.component'

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
        <CurrentTool/>
      </div>
    )
  }
}

export default HomePage;
