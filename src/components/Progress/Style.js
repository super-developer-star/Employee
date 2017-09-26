import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width:767px){
        position: absolute;        
        margin-top: 65px;
    }
`
export const Fraction = styled.div`
    margin: 0 40px 0 -60px;

    @media(max-width:1472px){
        margin: 0 3vw 0 -5vw;
    }
`
export const Number = styled.div`
    ${props =>props.static ? 'padding-left:30px;':''}
    font-size: 20px;
    color: #FFF;
    font-weight: 100;

    @media(max-width:767px){
        font-size: 17px;
    }

    @media(max-width:462px){
        font-size: 15px;
        ${props =>props.static ? 'padding-left:25px;':''}
    }
`
export const Slash = styled.div`
    &:after {
    content: "";
    position: absolute;
    border-top: 1px solid #FFF;
    width: 40px;
    transform: rotate(-60deg);

        @media(max-width:767px){
            width: 35px;
        } 

        @media(max-width:462px){
            width: 32px;
        }    
    }    
`
export const ProgressBar = styled.div`
    background-color: #a09ea5;
    border-radius: 13px;
    width: 21vw;
    
    div {
        background-color: #FFF;
        ${props =>props.percent === 1 ? 'width:30%;':''}
        ${props =>props.percent === 2 ? 'width:70%;':''}
        ${props =>props.percent === 3 ? 'width:100%;':''}
        height: 20px;
        border-radius: 10px;
    }

    @media(max-width:1472px){
        width: 25vw;
    }

    @media(max-width:767px){
        width: 40vw;
    }
`
export const ActiveBar = styled.div`

`