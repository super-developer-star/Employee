import styled from 'styled-components'
import Images from '../../themes/images'

export const Container = styled.footer`
    background: url(${Images.triangle}) no-repeat center center;
    background-size: contain;
    color: #333;
    margin: auto;
    max-width: 800px;
    padding: 25px 0 100px;
    text-align: center;

    @media(min-width: 768px) {
        padding: 150px 0 70px;
    }
    @media(max-width: 392px){
        padding: 100px 0 100px;
        margin-top: -35px;
    }
`

export const Logo = styled.h3`
    font-size: 32px;
    font-weight: 300;
    span {
        font-weight: 600
    }
`

export const List = styled.ul`  
    display: none;

    @media(min-width: 768px) {
        flex-direction: row;
        align-items: center;
        display: block;
        display: flex;
        list-style: none;
        justify-content: center;
        margin: auto;
        padding: 0;
    }
`

export const MobileList = styled.ul`
    @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
        list-style: none;
        justify-content: center;
        margin: auto;
        padding: 0;
        display: block;
    }
        display: none;   
`

export const ListItems = styled.li`
    padding: 5px 20px;
    ${props =>props.social ? 'padding: 5px 5px; img { width: 50px } @media(max-width: 767px){padding: 20px 5px;}': ''}
`

export const Link = styled.a`
    color: #333;
    text-decoration: none;    
    font-size: 23px; 
    -webkit-transition: 0.5s;
    transition: 0.5s;   

    &:hover, &:focus {        
        cursor: pointer;
        color: #777;
    }
    @media(max-width: 767px) {
        ${props =>props.social ? '':'margin: 5px 15px; font-size: 17px;'}
    }
`