import React from 'react';

import './main-menu-button.styles.css';

const MainMenuButton = ({children, ...otherProps}) => {
    return(
        <button className='main-menu-button' {...otherProps}>
            {children}
        </button>
    )
};

export default MainMenuButton;