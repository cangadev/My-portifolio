import styled from "styled-components";

export const containerContact = styled.div`
    width: 100%;
    padding-top: 60px;
    color: white;
    display: flex;
    justify-content: center;
`;
export const contentContact = styled.div`
    width: 85%;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    background-color: #151515;

    h3{
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 15px;
    }

    @media(max-width: 500px) {
        flex-direction: column;
    }

   
`;
export const contentSideLeft = styled.div`
    width: 49%;

    form{
        display: flex;
        flex-direction: column;
        width: 80%;

        @media(max-width: 500px) {
        width: 100%;
    }
        section{
            display: flex;
            justify-content: space-between;
            height: 70px;
            
            input{
                width: 49%;
            }
        }

        input{
            height: 40px;
            border: 1px solid rgb(101, 209, 241);
            padding-left: 10px;
            border-radius: 7px;
            color: silver;
        }

        #inputmsg{
            height: 80px;
        }

        button{
            width: 100px;
            height: 35px;
            border: 1px solid rgb(101, 209, 241);
            color: aqua;
            margin-top: 20px;
        }
    }

    @media(max-width: 500px) {
        width: 100%;
    }
`;
export const contentSideRight = styled.div`
    width: 49%;

    @media(max-width: 500px) {
        width: 100%;
        margin-top: 25px;
    }

    div{
        width: 90%;
        height: 50%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        @media(max-width: 500px) {
        width: 100%;
    }

        section{
            width: 40px;
            height: 40px;
            background-color: rgb(101, 209, 241);
        }
    }
`;