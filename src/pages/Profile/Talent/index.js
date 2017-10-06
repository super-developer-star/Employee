import React, { Component } from 'react';
// import { browserHistory } from 'react-router'
import { connect } from 'react-redux'

// import { session } from '../../../services/session'

class TalentPage extends Component {

    componentDidMount(){
        // const { isLoggedIn } = this.props;
        // if(!isLoggedIn && !session()){
        //     { this.props.type === 'talent' ?   
                    // browserHistory.push('/signup/talent') : browserHistory.push('signup/employer');
        //     }
        // }
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth.isLoggedIn,
        type: state.auth.type
    }
}

export default connect(mapStateToProps)(TalentPage);