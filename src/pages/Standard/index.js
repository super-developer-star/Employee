import React, { Component } from 'react'

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { 
    Wrapper,
    Heading, 
    Info,
    FieldWrapper } from './Style';
import Images from '../../themes/images';

class Standard extends Component {

    render() {
        return (
            <Wrapper>
                <Header />
                <Heading>About Us</Heading>
                <Info>
                    <h1>Lorem ipsum dolor sit amet</h1>
                    <p>
                    You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.<br/><br/>
                        You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel <span>obligated to use this feature</span>. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
                    </p>                    
                </Info>
                <FieldWrapper>
                    <img src={Images.aboutUs} alt="about" />
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod</p>
                </FieldWrapper>
                <Info>
                    <h1>Duis autem vel eum iriure</h1>
                    <p>
                    You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.<br/><br/>
                        You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
                    </p>
                </Info>
                <Footer />
            </Wrapper>
        )
    }
}

export default Standard;