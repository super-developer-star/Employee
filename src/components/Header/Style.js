import styled from 'styled-components'

export const Container = styled.div`
   
`

export const Wrapper = styled.div`
    ${props => props.landing ? 'background: transparent' : 'background: -webkit-linear-gradient(left, #79cc90 0%,#7f3b7c 100%); margin-top:-10px;'};
    display: flex;
    justify-content: space-between;
    padding: 0 35px;

    @media(max-width:767px){
        ${props => props.percent ? 'padding-bottom: 40px;justify-content: center;align-items: center;'
            :''}
    }
    @media(max-width:462px){
        margin-left: -17px;
    }
`
export const ModelWrapper = styled.div`
    display: none;
    float: right;
    @media(max-width:700px){
        ${props =>props.landing ? 'display: block':''}
    }
    
`