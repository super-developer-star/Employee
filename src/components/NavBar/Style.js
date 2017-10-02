import styled from 'styled-components'
import Images from '../../themes/images'

export const Wrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    @media(max-width:462px){
        margin-right: -15px;
    }
`
export const ModelWrapper = styled.div`
    ${props =>props.landing ? '' : 'display: none;'}
    @media(max-width:700px){
        display:none;
    }
`
export const Menu = styled.div`
    background: url(${Images.hambugerButton});
    background-size: cover;
    width: 50px;
    height: 50px;
    margin-right: 10px;
    &:hover {
        background: url(${Images.hoverMenu});
        cursor: pointer;
    }
    @media(max-width:392px){
        margin-right: 5px;
    }
`
export const Img = styled.img`
    z-index: 3;
    margin-right: 15px;
    &:hover {
        cursor: pointer;
    }
`
export const Nav = styled.ul`
    align-items: center;
    background: #7F3B7C;
    bottom: 0;
    color: #fff;
    display: none;
    font-size: 32px;
    justify-content: center;
    left: 0;
    list-style: none;
    margin: 0 0 0 -40px;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 2;

    &.active {
        display: flex;
        flex-direction: column;
    }

    li {
        padding: 10px 0;
        a {
            color: #fff;
            text-decoration: none;
            transition: opacity 0.5s;
            -webkit-transition: opacity 0.5s;

            &:hover, &:focus {
                cursor: pointer;
                opacity: 0.5
            }
        }
    }
    @media(max-width:392px){
        font-size: 8.2vw;
    }
`

export const LoginButton = styled.div`
    background: url(${Images.Profile});
    background-size: cover;
    width: 18px;
    height: 25px;
    &:hover {
        margin-left: 1px;
        cursor: pointer;
    }
`
export const Container = styled.div`
    border: 1px solid #fff;
    border-radius: 50px;
    height: 38px;
    width: 38px;
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        border: none;
        margin-left: 2px;
        div {
            background: url(${Images.loginHover});
            width: 51px;
            height: 51px;
            background-size: cover;
            margin-left: -9px;
        }
    }    
`
