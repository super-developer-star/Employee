import React from 'react'
import Logo from '../Logo'
import NavBar from '../NavBar'
import Progress from '../Progress'
import Model from '../Model'
import { Container, Wrapper, ModelWrapper } from './Style'

export default ({landing, percent, visible}) => {    
    return (
        <Container>
            <Wrapper landing={landing} percent={percent}>
                <Logo />
                <Progress visible={visible} percent={percent}/>
                <NavBar landing={landing} />            
            </Wrapper>
            <ModelWrapper landing={landing}>
                <Model />
            </ModelWrapper>
        </Container>
    )
}