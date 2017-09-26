import React, { Component } from 'react'

import Tag from '../Tag'
import { Wrapper } from './Style'

export default class TagList extends Component {

    render() {
        return (
            <Wrapper>
                { this.props.data.map((name, index) => {
                    return (
                        <Tag name={name} key={index} onRemove={() => this.props.removeTag(index)} />
                    )                    
                })}
            </Wrapper>
        )
    }
}