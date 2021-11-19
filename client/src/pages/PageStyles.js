import styled from 'styled-components';


export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 5%;
    color: var(--main-text-color);
`;

export const FormH2 = styled.h2`
    align-self: center;
    text-decoration: underline;
`;

export const SignupCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    background-color: rgba(84, 98, 99, 0.466);
    padding: 20px 30px;
    border-radius: 20px;

    @media (max-width: 1025px) {
        width: 60%;
        height: 35vh;
        justify-content: space-around;
    }
    @media (max-width: 769px) {
        margin-top: 5%;
        width: 80%;
        height: 50vh;
    }
    @media (max-width: 415px) {
        width: 90%;
        height: 65vh;
        justify-content: center;
    }
`;

export const LoginCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    background-color: rgba(84, 98, 99, 0.466);
    padding: 20px 30px;
    border-radius: 20px;

    @media (max-width: 1025px) {
        width: 60%;
        height: 25vh;
        justify-content: space-around;
    }
    @media (max-width: 769px) {
        margin-top: 5%;
        width: 80%;
        height: 32vh;
    }
    @media (max-width: 415px) {
        width: 90%;
        height: 40vh;
    }
`;