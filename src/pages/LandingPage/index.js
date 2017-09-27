import React, { Component } from 'react';
import styled from 'styled-components';

import Header from '../../components/Header';
import MainBanner from '../../components/MainBanner';
import HowItWork from '../../components/HowItWork';
import Footer from '../../components/Footer';
import Images from '../../themes/images'

const Wrapper = styled.div`
    background: -webkit-linear-gradient(top,rgba(54, 193, 93, 0.5) 0%,rgba(64, 7, 61, 0.75) 80%), url(${Images.background}) center center no-repeat;
    background-size: cover;
    color: #fff;
    font-weight: 300;
    margin-top: -10px;

    text-align: center;
`

export default class LandingPage extends Component {

  render() {
    return (
        <div>
            <Wrapper>
                <Header landing />
                <MainBanner />
            </Wrapper>
            <HowItWork />
            <Footer />
        </div>
    )
  }
}