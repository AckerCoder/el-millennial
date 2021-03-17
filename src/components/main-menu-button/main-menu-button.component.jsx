import React from 'react';

import './main-menu-button.styles.css';

const MainMenuButton = (props) => {
    return(
        <button className='ly-main-menu-button'>
            <img src={props.imgDirectory} alt={props.imgAlt} onClick={props.click}/>
            <span>{props.title}</span>
        </button>
    )
};

export default MainMenuButton;