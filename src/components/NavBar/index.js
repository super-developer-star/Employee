import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import $ from 'jquery';

import Model from '../Model'
import { Wrapper, ModelWrapper, Img, Nav, Menu, LoginButton, Container } from './Style'
import Images from '../../themes/images'

class Navigation extends Component {
    constructor() {
        super()
        this.state = {
            isActive: false,
            isHover: false,
            switched: false
        }      
    }
    
    

    toggleNavigation = () => {
        this.setState({
            isActive: !this.state.isActive
         });
  
        if(!this.state.isActive){
            $("body").css({"overflow": "hidden"});
        } else {
            $("body").css("overflow", "visible");
        }        
    }
    
    navigationPage = (path) => {
        this.setState({
            isActive: !this.state.isActive
        })
        $("body").css("overflow", "visible");
        browserHistory.push(path);
    } 
    
    render() {
        return (
            <Wrapper>
                <ModelWrapper landing={this.props.landing}>
                    <Model />
                </ModelWrapper>
                { !this.state.isActive ? 
                    <Menu onClick={this.toggleNavigation}/> :  <Img onClick={this.toggleNavigation} src={Images.xButton} alt="" style={{width:'42px'}}/>
                }                                             
                <Nav className={this.state.isActive ? "active" : ""} >
                    <li><a onClick={() => this.navigationPage('/home')}>Home</a></li>
                    <li><a onClick={() => this.navigationPage('/')}>About</a></li>
                    <li><a onClick={() => this.navigationPage('/')}>Contact</a></li>
                    <li><a onClick={() => this.navigationPage('/')}>Privacy and GDPR</a></li>
                    <li><a onClick={() => this.navigationPage('/')}>LinkedIn</a></li>
                    <li><a onClick={() => this.navigationPage('/')}>Facebook</a></li>
                </Nav>
                <Container>
                    <LoginButton />
                </Container>                                          
            </Wrapper>
        )
    }
}

export default Navigation;