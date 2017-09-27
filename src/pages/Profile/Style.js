import styled from 'styled-components'

export const Wrapper = styled.div`  
`
export const Content = styled.div`
   text-align: center;
`

export const Heading = styled.h1`
    margin-top: 90px;
    font-size: 65px;        
    font-weight: 400;    

    @media(max-width: 1023px){ font-size: 55px;}
    @media(max-width: 767px){ font-size: 45px;}
    @media(max-width: 462px){ font-size: 35px; font-weight: 700;}
    @media(max-width: 392px){ font-size: 27px; font-weight: 700;}
`
export const FieldWrapper = styled.div`
    margin: 70px auto;
    max-width: 700px;
    text-align: center;
    @media(max-width: 767px){ margin: 80px 0;}
    @media(max-width: 462px){ margin: 65px 0;}
    @media(max-width: 392px){ margin: 50px 0;}
`
export const SubHeading = styled.p`
    margin-bottom: 0px;
    ${props =>props.small ? 'font-size:16px; margin-bottom: 30px; color: #272525;':'font-size:32px; color: #333;'}        

    @media(max-width:767px){
         font-size: ${props =>props.small ? '':'27px;'}
    }

    @media(max-width:462px){
        font-size: ${props =>props.small ? '16px':'24px;'}
        font-weight: 700;
    }

    @media(max-width:392px){
        font-size: ${props =>props.small ? '14px':'20px;'}
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

export const Button = styled.a`
    border: 1px solid #FFF;
    ${props =>props.active ? 'background-color: #4cbf69;color: #FFF;' : 'background-color: #c5eac5;color: #272525;'}
    border-radius: 50px;
    padding: 10px 30px;
    font-size: 16px;    
    margin: 7px 10px;

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
export const Form = styled.div`    
    display: flex;
    justify-content: center;
    align-items: center;
    div {
        width: 450px !important;
        font-size: 23px !important;
        font-family: 'nudista-web', sans-serif !important;
    }
    label {
        font-size: 23px;        
    }

    input {
        color: #333 !important;
    }

    @media(max-width: 767px){
        div {
            width: 60% !important;
        }
    }
    
    @media(max-width: 768px){ div{ font-size: 17px !important; } label {font-size:17px}}
`
export const UnderLine = styled.hr`
    width: 450px;
    border-top: 1px solid #c7c2c2;    
    margin-top: 0px;

    @media(max-width: 767px){
        width: 60%;
    }
`
export const TagWrapper = styled.div`
    margin: 70px auto;
    max-width: 700px;
    text-align: center;
`
export const Navigation = styled.div`
    margin: 100px 0 110px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const NavigationButton = styled.a`
    border: 1px solid #fff;
    ${props =>props.prev? 'border-color:#c7c2c2; background-color: transparent; padding: 20px 25px; margin-right: 25px;'
    :'background-color: #4cbf69; padding: 20px 95px; margin-left: 10px;'}
    border-radius: 50px;        
    font-size: 25px;
    color: #fff;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px;

    @media(max-width:767px){
        ${props =>props.prev? 'padding: 15px 20px;':'padding: 15px 80px;'}
    }
    @media(max-width:645px){
        ${props =>props.prev? '':'padding: 15px 12vw;'}
    }

    &:hover {
        cursor: pointer;
        ${props =>props.prev? 'background-color: #eff5f4;':'background-color: #67c77f;'}
    }
`
export const Img = styled.img`
    width: 60px; 
    ${props =>props.right ? 'padding-left:10px;':''}  
    @media(max-width:645px){
        width: 45px;
    } 
`