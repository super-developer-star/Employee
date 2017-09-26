import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import $ from 'jquery';

import { Wrapper, Button, Nav } from './Style'
import Images from '../../themes/images'

export default class Navigation extends Component {
    constructor() {
      super()
      this.state = {
          isActive: false
      }
      this.toggleNavigation = this.toggleNavigation.bind(this)
    }
  
    toggleNavigation() {
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
          <Button hambuger onClick={this.toggleNavigation}>
              { !this.state.isActive ? 
                   <img src={Images.hambugerButton} alt="" /> :  <img src={Images.xButton} alt="" style={{width:'42px'}}/>
              }              
          </Button>
          
          <Nav className={this.state.isActive ? "active" : ""} >
            <li><a onClick={() => this.navigationPage('/home')}>Home</a></li>
            <li><a onClick={() => this.navigationPage('/')}>About</a></li>
            <li><a onClick={() => this.navigationPage('/')}>Contact</a></li>
            <li><a onClick={() => this.navigationPage('/')}>Privacy and GDPR</a></li>
            <li><a onClick={() => this.navigationPage('/')}>LinkedIn</a></li>
            <li><a onClick={() => this.navigationPage('/')}>Facebook</a></li>
          </Nav>
  
          <Button profile>
              <img src={Images.Profile}  alt="Profile"/>
          </Button>
        </Wrapper>
      )
    }
  }