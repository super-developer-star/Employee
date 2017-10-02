import styled from 'styled-components'

export const Wrapper = styled.div`    
    font-size: 18px;
    font-weight: 400;
    line-height: 35px;
    margin: auto;
    max-width: 1290px;
    padding: 75px 20px;
    text-align: center;

    @media (min-width: 768px) {
        font-size: 23px;
        padding: 75px 0;
    }
    @media (max-width: 767px) {
        font-size: 16px;
        line-height: 25px;
        padding: 75px 20px 0;
    }    
`

export const FlexWrapper = styled.div`
    margin-top: 20px;
    
    @media (min-width: 768px) {
        display: flex;
        width: 100%;
    }
    @media(max-width:392px){
        margin-top: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const Heading = styled.h2`
    cursor: pointer;
    display: inline-block;        
    font-weight: 400;
    margin: 0;

    @media (min-width: 1200px) {
        font-size: 80px;
        line-height: normal;
    }
    @media(min-width:768px) and (max-width:1200px){
        font-size: 6vw;
    }
    @media(min-width:592px) and (max-width:767px){
        font-size: 6vw;
    }
    @media(max-width:592px){
        font-size: 32px;
    }
`

export const Img = styled.div`  

    @media (min-width: 1024px) {
        padding: 0 100px;
        width: 50%;
    }
    @media(min-width:768px) and (max-width: 1023px){
        padding: 0 40px;
        width: 50%
    }
    @media (max-width: 767px) {
        padding: 0 10px;
    }
    img {
        @media(max-width:767px){
            width: 60vw;
        }
        @media(max-width:392px){
            width: 80vw;
        }
    }
`
export const RightArrow = styled.img`
    width: 70px;

    @media(min-width:1024px) and (max-width:1300px){
        width: 5.5vw;
    }
    @media(min-width:768px) and (max-width:1023px){
        width: 6.5vw;
    }
    @media(max-width:767px){
       display: none;
    }
`
export const VerticalArrow = styled.img`
    width:11vw;

    @media(min-width:768px){
        display: none;
    }
    @media(min-width:393px) and (max-width:767px){
        width: 8vw;
    }
`
export const Content = styled.div`
    padding: 0 3vw;
  
    p {
        margin: 25px 10px;
        text-align: left;
    }
    @media (min-width: 768px) {
        width: 50%;
        padding: 0 45px;
    }
    @media(max-width:392px){
        p {
            margin: 25px 0;
        }
    }
`