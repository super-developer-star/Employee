import React from 'react'
import Logo from '../Logo'
import NavBar from '../NavBar'
import Progress from '../Progress'
import { Wrapper } from './Style'

export default ({landing, percent}) => {    
    return (
        <Wrapper landing={landing}>
            <Logo title="agentify.me" />
            <Progress landing={landing} percent={percent}/>
            <NavBar />
        </Wrapper>
    )
}