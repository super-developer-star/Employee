import styled from 'styled-components'

export const Wrapper = styled.div`  
`
export const Content = styled.div`
   text-align: center;
`
export const Heading = styled.h1`
    font-size: 65px;            
    margin-top: 80px;

    @media(max-width: 1023px){ font-size: 55px;}
    @media(max-width: 767px){ font-size: 45px;}
    @media(max-width: 392px){ font-size: 35px; font-weight: 700;}
`
export const ButtonWrapper = styled.div`
    ${props =>props.signup ? 'margin: 75px 0 50px;':'margin: 75px 0 35px;'}
    display: flex;
    justify-content: center;    
    
    @media(max-width: 767px){        
        flex-direction: column;
        align-items: center;        
    }
`
export const SocialButton =styled.div`
    display: flex;
    align-items: center;
    justify-content: center;    
    margin: 0 1.4vw;
    height: 70px;
    width: 400px;
    font-size: 25px;
    border-radius: 50px;
    ${props =>props.google? 'background-color:#ecebeb; p{color:#333;} img{width:60px}':'p{color:#FFF;} background-color:#3b5998;img{width:45px}'}

    p { margin-left: 5px; font-weight: 700;}
    img { margin-right: 5px;}

    &:hover { cursor: pointer;}

    @media(max-width:1023px){        
        font-size: 22px;
        height: 60px;
        width: 350px;
        margin: 0 2vw;
        ${props =>props.google? 'img{width:45px}':'img{width:35px;}'}
    }
    @media(max-width:767px){
        width: 350px;
        margin-bottom: 30px;
    }
    @media(max-width: 392px){
         font-size: 17px; 
         width: 265px;
    }
`
export const CircleButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border: 1px solid #c7c2c2;
    border-radius: 50px;
    margin: auto;
    margin-bottom: 45px;
    font-size: 18px;
    font-weight: 700;
`
export const Text = styled.p`
    color: #f7be28;
    font-size: 23px;   
    @media(max-width: 392px){
        font-size: 20px;
    } 
`
export const Form = styled.div`    
    display: flex;
    justify-content: center;
    align-items: center;

    div {
        width: 815px !important;
        font-size: 23px !important;
        font-family: 'nudista-web', sans-serif !important;
    }
    label {
        font-size: 23px; 
        ${props =>props.error ? 'color:#f7be28 !important':''}       
    }
    input {
        color: #333 !important;
    }
    @media(max-width: 1023px){
        div {
            width: 700px !important;
        }
    }
    @media(max-width: 767px){
        div {
            width: calc(90% - 40px) !important;
        }
    }
    @media(max-width: 392px){
        div {
            width: 80% !important;
            font-size: 20px !important;
        }
        label {
            font-size:17px
        }
    }    
`
export const UnderLine = styled.hr`
    width: 850px;
    border-top: ${props =>props.empty ? '1px solid #f7be28;':'1px solid #c7c2c2;'}

    @media(max-width: 1023px){
        width: 735px;
    }
    @media(max-width: 767px){
        width: 90%;
    }
    @media(max-width: 392px){
        margin-top: 0;
    }
`
export const Img = styled.img` 
    margin-top: 20px;
    ${props =>props.empty ? 'width:40px;':''}
    @media(max-width: 392px){ 
       ${props =>props.empty ? 'width:40px;':'width:10%;'}
    }
`
export const SignUpButton = styled.a`
    ${props =>props.active ? 'background-color: #4cbf69;':'background-color: #f7be28;'}
    padding: 20px 80px;    
    color: #FFF;
    font-size: 25px;
    font-weight: 700;
    border-radius: 50px;
    margin: 60px 0 120px 0;
    transition: 0.5s;
    -webkit-transition: 0.5s;

    &:hover {
        cursor: pointer;
        ${props =>props.active ? 'background-color: #67c77f;':'background-color: #f5c64d;'}
    }
    @media(max-width: 1023px){ padding: 17px 80px;}
    @media(max-width: 392px){ font-size: 20px;}
`