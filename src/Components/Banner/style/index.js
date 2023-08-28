import styled,{ keyframes} from "styled-components";
//650
const Animate = keyframes`
  from{
     background-color: rgb(101, 209, 241);
                color: black;
                width: 100px;
    }
    to{
        background-color: #353535;
        color: rgb(101, 209, 241);
        width: 0px;
    }

`;

export const containerBanner = styled.header`
    width: 100%;
    height: 80vh;
    color: white;
    border-bottom: 0.5px solid rgb(83, 82, 82);
    display: flex;
    justify-content: center;
    align-items: center;

    h3{
        margin-left: 90px;
        color: rgb(101, 209, 241);
    }
`;
export const contentBanner = styled.nav`
    height: 400px;
    width: 85%;
    display: flex;
    align-items: center;

    div{
        display: flex;
        flex-direction: column;
        width: 65%;
        justify-content: center;

        @media(max-width: 600px){
        width: 100%;
        align-items: center;
        text-align: center;
        }


        h4{
            font-size: 50px;
            margin-bottom: 30px;

            span{
                animation-name: ${Animate};
                animation-duration: 3s;  
                color: rgb(101, 209, 241);
            }
        }
        .wrap{
            font-size: 20px;
        }

        button{
            width: 100px;
            height: 40px;
            margin-top: 25px;
            border-radius: 4px;
            background-color: rgb(101, 209, 241);
        }
    }
    section{
        width: 28%;
        height: 380px;

        img{
            width: 100%;
            height: 380px;
            border-radius: 7px;
        }

        @media(max-width: 600px){
            display: none;
        }
    }

    section::before {
	content: '';
	position: absolute;
	width: 20px;
	height: 20px;
	border-bottom: 5px solid rgb(101, 209, 241);
	border-left: 5px solid rgb(101, 209, 241);
	bottom: 11vh;
	left: 60vw;
}
section::after {
	content: '';
	position: absolute;
	width: 20px;
	height: 20px;
	border-top: 5px solid rgb(101, 209, 241);
	border-right: 5px solid rgb(101, 209, 241);
	top: 17vh;
	right: 11vw;
}
`;