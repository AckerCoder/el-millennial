import React from 'react';

import './main-menu.styles.css';
import MainMenuButton from '../main-menu-button/main-menu-button.component'

import ButtonImgGeneradorDeCaratulas from '../../assets/img/generador-de-caratulas-button.png';

class MainMenu extends React.Component{
    constructor(){
        super();

        this.state = {
        }
    }

    render(){
        return(
            <div className='ly-main-menu'>
                <MainMenuButton title={"Generador de Caratulas"} imgDirectory={ButtonImgGeneradorDeCaratulas} imgAlt="Generador de Caratulas" click='/generador-de-caratulas'></MainMenuButton>
            </div>
        )
    }
}

export default MainMenu;