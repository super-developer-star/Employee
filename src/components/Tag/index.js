import React, { Component } from 'react'

import { Wrapper, Icon } from './Style'

export default class Tag extends Component {

    render() {
        return (
            <Wrapper>
                {this.props.name}
                <Icon onClick={() => this.props.onRemove()}>x</Icon>
            </Wrapper>
        )
    }
}