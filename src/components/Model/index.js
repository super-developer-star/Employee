import React from 'react'
import Switch from 'react-toggle-switch'
import "../../../node_modules/react-toggle-switch/dist/css/switch.min.css" 

import { Wrapper } from './Style'

class Model extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            switched: false
        }
    }

    toggleSwitch = () => {
        this.setState(prevState => {
            return {
                switched: !prevState.switched
            };
        });
    };

    render () {
        
            return (
                <Wrapper>
                    <span>Talent</span><Switch onClick={this.toggleSwitch} on={this.state.switched}/><span>Employer</span>
                </Wrapper>
            )
           
    }
}

export default Model