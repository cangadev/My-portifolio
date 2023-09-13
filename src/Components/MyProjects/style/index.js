import styled from "styled-components";
import IMG from "../../../images/tendencias_software.png"

export const containerMyProject = styled.div`
    width: 100%;
    padding: 40px 0px;
    color: white;
    display: flex;
    align-items: center;
    flex-direction: column;

    .section-title {
        width: 85%;
        margin-bottom: 60px;
    }
    
    .section-title h2 {
        font-size: 30px;
        color: #fff;
        font-weight: 700;
        position: relative;
    }
    
    .section-title h2::before {
        content: '';
        height: 4px;
        width: 50px;
        background-color: rgb(101, 209, 241);
        position: absolute;
        top: 100%;
        left: 0;
        margin-top: 15px;
    }
    
    .section-title h2::after {
        content: '';
        height: 4px;
        width: 25px;
        background-color: rgb(101, 209, 241);
        position: absolute;
        top: 100%;
        left: 0;
        margin-top: 25px;
    }
`;
export const contentMyProject = styled.div`
    width: 85%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: #151515;
    border-radius: 10px;
    padding: 40px 0px;
`;
export const Card = styled.div`
    width: 200px;
    height: 200px;
    background-image: url(${IMG});
    background-size: cover;
    border-radius: 10px;
    margin: 10px;
    display: flex;

    a{
    color: black;
    padding: 0 10px;
    border-radius: 10px;
    height: 200px;
        width: 100%;
    display: flex;
    justify-content: center;
  background-color: rgba(101, 208, 241, 0.550);
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0 10px;

    @media(max-width: 517px){
    width: 150px;
    height: 150px;
    }
    @media(max-width: 399px){
    width: 140px;
    height: 150px;
    }
    @media(max-width: 376px){
    width: 130px;
    height: 150px;
    font-size: 14px;
    }
    }

    @media(max-width: 517px){
    width: 150px;
    height: 150px;
    }
    @media(max-width: 399px){
    width: 140px;
    height: 150px;
    }
    @media(max-width: 376px){
    width: 130px;
    height: 150px;
    }
    
    

    div{
        width: 60px;
        height: 60px;
        background-color: black;
    }
    h4{
        margin: 10px 0px;
    }
    p{
        font-size: 15px;
    }
`;