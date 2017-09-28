import styled from 'styled-components'

export const Wrapper = styled.div`    
`
export const Heading = styled.h1`
    margin: 90px 0 60px 15%;
    font-size: 65px;        
    font-weight: 400;  
    text-algin: left;  

    @media(max-width: 1023px){ font-size: 55px;}
    @media(max-width: 767px){ font-size: 45px;}
    @media(max-width: 462px){ font-size: 35px; font-weight: 700;}    
`
export const UserWrapper = styled.div`
    margin-left: 15%;
    display: flex;    
    align-items: center;
`
export const Avatar = styled.img`
    color: rgb(255, 255, 255);
    background-color: rgb(188, 188, 188);
    user-select: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    border-radius: 50%;
    height: 250px;
    width: 250px;
`
export const User = styled.div`
    margin-left: 4%;

    p {
        font-size: 25px;
    }    
`
export const ToggleWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;    
    width: 32%;
    margin-left: 55px;    

    p {
        font-size: 25px;
    }
`
export const DetailWrapper = styled.div`     
    margin: 30px 0 0 15%;
    display: flex;
`
export const CircleWrapper = styled.div`
    width: 250px;
    height: 250px; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
`
export const BgCircle = styled.div`
    background-color: #c5eac5;
    border-radius: 100px;
    display: flex;
    justify-content: center;  
    align-items: center;  
    width: 170px;
    height: 170px;
`
export const Detail = styled.div`
    margin-left: 4%;
    div {
        display: flex;
        div {
            display: flex;
            flex-direction: column;
        }
        div:first-child {
            margin-right: 50px;
        }
        p {
            font-size: 15px;
            line-height: 3px;
        }        
    }
`
export const FieldWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    max-width: 700px;
    div {
        display: flex;
        float: left
        align-items: center; 
        margin-top: 10px;       
        img {
            width: 45px;
            height: 45px;
            margin-right: 20px;
        }
    }
`
export const TagWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 70px auto;
    max-width: 700px;
`