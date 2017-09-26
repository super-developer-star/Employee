import styled from 'styled-components'

export const Wrapper = styled.div`
    border: 1px solid #FFF;
    background-color: #c5eac5;
    color: #272525;
    border-radius: 50px;
    padding: 10px 30px;
    font-size: 16px;    
    margin: 7px 10px;
    text-transform: capitalize;

    &:hover, &:focus {
        background-color: #9eda9e;
        color: #FFF;
        cursor: pointer;
    }

    @media(max-width:767px){
        font-size: 15px;
        align-items: center;
        display: flex;
        height: 35px;
        justify-content: center;
        padding: 10px 60px;
        width: calc(100% * (1/10) - 10px - 1px);
    }
`
export const Icon = styled.span`
    padding-left: 15px;
    font-size: 18px;
    text-transform: uppercase;
    color: #272525 !important;
`