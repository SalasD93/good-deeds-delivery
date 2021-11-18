import styled from 'styled-components';

export const CatMainDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2%!important;
    margin-bottom: 2%!important;
    width: 100%;

    @media (max-width: 415px) {
        margin-top: 3%!important;
    }
`;

export const CatH2 = styled.h2`
    color: #104a36;

    @media (max-width: 1025px) {
        font-size: 30px;
    }
    @media (max-width: 769px) {
        font-size: 25px;
    }
    @media (max-width: 415px) {
        font-size: 20px;
    }
    @media (max-width: 415px) {
        font-size: 16px;
    }
`;

export const CatScrollDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 90vw;
    height: 50px;
    overflow: hidden;
    white-space: nowrap;

    &:hover {
        overflow: auto;
    }

    @media (max-width: 1025px) {
        height: 70px;
    }
    @media (max-width: 769px) {
        height: 55px;
    }
    @media (max-width: 376px) {
        height: 50px;
    }
`;

export const CatDiv = styled.div`
    width: 90vw;
    height: 40px;

    @media (max-width: 1025px) {
        height: 60px;
    }
    @media (max-width: 769px) {
        height: 40px;
    }
`;

export const CatBtn = styled.button`
    display: inline-block;
    width: 20%;
    height: 90%;
    background-color: #787777;
    color: #ffffff;
    font-size: 16px;
    font-weight: bolder;

    @media (max-width: 1025px) {
        width: 25%;
        font-size: 20px;
    }
    @media (max-width: 769px) {
        width: 35%;
        font-size: 18px;
    }
    @media (max-width: 415px) {
        width: 45%;
        font-size: 15px;
    }
    @media (max-width: 376px) {
        font-size: 12px;
    }
`;