import React from 'react';
import CoverPage from '../../components/cover-page/cover-page.component'

import './generador-de-caratulas.styles.css';


class GeneradorDeCaratulas extends React.Component {
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

export default GeneradorDeCaratulas;
