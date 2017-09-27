import styled from 'styled-components';

export const Wrapper = styled.div`
    margin: 90px auto;
    max-width: 700px;
    text-align: center;
`
export const FieldWrapper = styled.div`
    margin: 90px 0;
`
export const SubHeading = styled.p`
    font-size:32px; 
    color: #333;
    
    @media(max-width:767px){
        font-size: 27px;
    }
    @media(max-width:462px){
        font-size: 24px;
        font-weight: 700;
    }
    @media(max-width:392px){
        font-size: 20px;
        font-weight: 700;
    }
`
export const ButtonWrapper = styled.div`
    margin: 15px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
`

export const Button = styled.label`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #FFF;
    ${props =>props.active ? 'background-color: #4cbf69;color: #FFF;' : 'background-color: #c5eac5;color: #555;'}
    border-radius: 50px;
    padding: 10px 30px;
    font-size: 16px;    
    margin: 7px 10px;
    transition: 0.5s;
    -webkit-transition: 0.5s;

    input {
        display: none;
    }

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

    img {
        width: 18px;
        margin-left: 15px;
    }
`