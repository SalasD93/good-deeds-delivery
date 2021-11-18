import styled from 'styled-components';

export const CatMainDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2%!important;
    margin-bottom: 2%!important;
    width: 100%;
`;

export const CatH2 = styled.h2`
    color: #104a36;
`;

export const CatScrollDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 90vw;
    height: 50px;
    overflow: auto;
    white-space: nowrap;

    @media (max-width: 1025px) {
        height: 70px;
    }
`;

export const CatDiv = styled.div`
    width: 90vw;
    height: 40px;

    @media (max-width: 1025px) {
        height: 60px;
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
    }
`;