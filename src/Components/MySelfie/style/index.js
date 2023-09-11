import styled from "styled-components";

export const containerMyselfie = styled.div`
    width: 100%;
    padding: 40px 0px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const contentMyselfie = styled.div`
    width: 85%;
    display: flex;
    flex-direction: column;
    background-color: #151515;
    border-radius: 10px;
    padding: 40px 30px;

    .section-title {
        
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

.container-description{
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media (max-width: 850px) {
        flex-direction: column;
    }

    h3{
        margin-bottom: 25px;
    }
    
    p{
        text-align: justify;
        color: silver;
        letter-spacing: 1.5px;
        font-size: 15px;
    }

    .description-first-side{
        width: 50%;

        @media (max-width: 850px) {
        width: 100%;
    }

        h3{

            span{
                color: rgb(101, 209, 241);
            }
        }
    }
    .description-second-side{
        width: 47%;
        display: flex;
        flex-direction: column;

        @media (max-width: 850px) {
        width: 100%;
        margin-top: 30px;
    }

    h3{
        @media (max-width: 420px) {
                display: none;
                     }
    }

        div{
            width: 100%;
            display: flex;
            justify-content: space-between;
            height: 110px;

            @media (max-width: 420px) {
                display: none;
                     }

            section{
                width: 49%;
                height: 100px;

                span{
                    display: flex;
                    width: 100%;
                    font-size: 17px;
                    border-bottom: 1px solid silver;
                    margin-bottom: 15px;

                    @media (max-width: 980px){
                        font-size: 12px;
                    }
                    @media (max-width: 850px) {
                        font-size: 16px;
                    }

                    @media (max-width: 550px) {
                        font-size: 14px;
                     }
                     @media (max-width: 495px) {
                        font-size: 12px;
                     }
                }
            }
        }

        .second-side-btns{
            width: 100%;
            height: 70px;
            display: flex;
            align-items: center;

        @media (max-width: 600px) {
            justify-content: center;
        }

            button{
                margin-right: 15px;
                border-radius: 40px;
                width: 120px;
                height: 35px;
                background-color: rgb(101, 209, 241);
                cursor: pointer;
            }
        }
    }
}

`;