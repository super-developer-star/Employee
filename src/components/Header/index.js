import React from 'react'
import Logo from '../Logo'
import NavBar from '../NavBar'
import Progress from '../Progress'
import { Wrapper } from './Style'

export default ({landing, percent, visible}) => {    
    return (
        <Wrapper landing={landing}>
            <Logo title="agentify.me" />
            <Progress visible={visible} percent={percent}/>
            <NavBar />
        </Wrapper>
    )
}