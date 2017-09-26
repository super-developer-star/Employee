import React from 'react'
import { browserHistory } from 'react-router'
import { Heading } from './Style'

export default ({title}) => {
    return (        
        <Heading onClick={() =>browserHistory.push('/')}>
            agentify
            <span>.me</span>
        </Heading>        
    )
}