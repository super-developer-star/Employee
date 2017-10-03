import styled from 'styled-components'
import Images from '../../themes/images'

export const Container = styled.footer`
    background: url(${Images.triangle}) no-repeat center center;
    background-size: cover;
    color: #333;
    margin: auto;
    max-width: 800px;    
    text-align: center;
    height: 600px;
    justify-content: center;

    @media(min-width: 768px) {
        height: 600px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    @media(max-width:392px){
        height: 300px;
    }    
`

export const Logo = styled.img`
    width: 300px;
    margin-top: -30px;
    @media(max-width:767px){
        width: 45vw;
        margin-top: 160px;
    }
    @media(max-width:392px){
        width: 50vw;  
        margin-top:60px;      
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
        margin-top: 45px;        
    }
`

export const MobileList = styled.ul`
    display: none; 
    @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
        list-style: none;
        justify-content: center;
        margin-top: 50px;
        padding: 0;
        display: block;
    }
    @media(max-width:392px){
        margin-top: 35px;
    }      
`

export const ListItems = styled.li`
    padding: 5px 20px;
    ${props =>props.social ? 'padding: 5px 5px; img { width: 50px } @media(max-width: 767px){padding: 20px 5px;}': ''}
    ${props =>props.linkedin ? 'margin-left:20px':''}
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
        ${props =>props.social ? '':'margin: 5px 15px; font-size: 20px;'}
    }
    @media(max-width: 392px) {
        ${props =>props.social ? '':'margin: 5px 15px; font-size: 5vw;'}
    }
`