import styled from 'styled-components'

export const Wrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
`
export const Button = styled.button`
    ${props =>props.profile? 'border: 1px solid white; border-radius: 50%;' : 'border: none; height:62px !important; width: 62px !important; !important;'};
    background: transparent;
    height: 40px;
    justify-content: center;
    margin: 0 5px;
    position: relative;
    z-index: 3;
    width: 40px;
    &:hover, &:focus {        
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
        transition: 0.5s;
        -webkit-transition: 0.5s;

        &:hover, &:focus {
            cursor: pointer;
            color: #9e8c8c;
        }
    }
    }
`
