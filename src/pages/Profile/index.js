import React, { Component } from 'react';
import { browserHistory } from 'react-router'

import { session } from '../../services/session'

class ProfilePage extends Component {

    componentWillMount(){
        const loggedIn = session();
        if(!loggedIn){
            browserHistory.push('/signup');
        }
    }
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default ProfilePage;