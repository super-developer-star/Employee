import styled from 'styled-components'
import Images from '../../themes/images'

export const Wrapper = styled.div`
    padding: 250px 0 10vw 0;

    @media(max-width: 767px) {
        padding: 85px 0 0 0;
    }
`

export const Content = styled.div`
    background: url(${Images.triangle}) no-repeat top;    
    font-size: 22px;
    line-height: 31px;
    margin: auto;
    padding: 15px 0 150px 0;    

    @media(max-width:767px){
        background-size: 60vw;
        background-position: center center;
    }
`

export const Heading = styled.h3`    
    font-weight: 300;
    line-height: normal;
    margin:30px 0 35px 0;

    @media(min-width: 1024px) {
        font-size: 80px;
    }

    @media(min-width:768px) and (max-width:1200px){
        font-size: 6vw;
    }

    @media(min-width: 592px) and (max-width: 767px){
        font-size: 6vw;
    }

    @media(max-width:592px){
        font-size: 32px;
    }
`

export const Text = styled.p`
    font-size: ${props => props.smaller ? '18px' : '25px'};
    margin: 0 0 10px;
    z-index: 0;
    line-height: 35px;

    @media(min-width:768px) and (max-width:1023px){
        font-size: ${props => props.smaller ? '13px' : '2.5vw'};
    }

    @media(max-width: 767px){
        font-size: ${props => props.smaller ? '13px' : '20px'};
        margin: 0 25px 0 20px;
        line-height:30px;
    }

    @media(max-width: 392px){
        font-size: ${props => props.smaller ? '12px' : '17px'};
        line-height:25px;
    }
`

export const SignUpLink = styled.a`
    background: #fff;
    border-radius: 35px;
    cursor: pointer;
    display: inline-block;
    font-size: 22px;
    margin-bottom: 15px;
    padding: 20px 115px;
    text-decoration: none;
    font-weight: 700;
    color: #333;

    &:hover, &:focus {
        opacity: 0.95;
    }

    @media(min-width: 1024px) {
        font-size: 28px;
    }

    @media(min-width:768px) and (max-width:1023px){
        font-size: 3vw;
        padding: 2vw 12vw;
    }
    @media(max-width: 767px) {
        padding: 10px 80px;
    }

    @media(max-width: 392px) {
        padding: 7px 70px;
    }
`

export const Image = styled.img`
    margin-right: 5px;
    position: relative;
    top: 5px;
`