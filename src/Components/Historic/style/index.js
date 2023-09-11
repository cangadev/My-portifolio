import styled from "styled-components";

export const containerHistoric = styled.div`
    width: 100%;
    padding: 60px 0px;
    color: white;
    display: flex;
    justify-content: center;
`;
export const contentHistoric = styled.div`
    width: 85%;
    padding-bottom: 20px;
    display: flex;
    justify-content: space-between;

    h3{
        font-size: 20px;
        margin-bottom: 40px;
        font-weight: 700;
    }

    @media(max-width: 500px) {
        flex-direction: column;
    }

    .contentDesc{
        width: 100%;
        border-radius: 10px;
        background-color: #151515;
        padding: 30px 20px 40px 30px;

        .timeline-item{
	position: relative;
	padding-left: 37px;
	padding-bottom: 50px;
    border-left: 1px solid rgb(101, 209, 241);

    span{
        font-size: 14px;
        color: silver;
    }

            h4{
                margin: 15px 0px;
            }
            p{
                text-align: justify;
                color: silver;
                letter-spacing: 1px;
                font-size: 15px;
            }
}
    }
`;
export const contentSideLeft = styled.div`
    width: 49%;

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
`;