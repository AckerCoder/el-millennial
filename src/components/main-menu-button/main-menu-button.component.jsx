import React from 'react';

import './main-menu-button.styles.css';

const MainMenuButton = (props) => {
    return(
        <a className='ly-main-menu-button' href={props.click}>
            <img src={props.imgDirectory} alt={props.imgAlt} />
            <span>{props.title}</span>
        </a>
    )
};

export default MainMenuButton;