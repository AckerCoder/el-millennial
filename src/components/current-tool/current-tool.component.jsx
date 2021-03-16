import React from 'react';

import './current-tool.styles.css';

class CurrentTool extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            title: ''
        }
    }

    render(){
        return(
            <div className='ly-current-tool'>
                {this.props.children}             
            </div>
        )
    }
}

export default CurrentTool;