import styled from 'styled-components'

export const Heading = styled.a`
    color: #fff;
    font-size: 36px;
    font-weight: 300;
    padding: 50px 0;
    text-decoration: none;

    span {
        font-weight: 700;
    }
    &:hover, &:focus {
        cursor: pointer;
        span {
            color: #7e5d81;
            transition: 5s ease all;
        }
    }
    @media(max-width:767px){
        margin-right: auto;
    }
    @media(max-width:462px){
        font-size: 30px;
    }
`