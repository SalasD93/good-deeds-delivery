import styled from 'styled-components';


export const ProdListH2 = styled.h2`
    text-align: center;
    margin-left: 4%;
    margin-right: 4%;
    padding-top: 1%;
    padding-bottom: 1%;
    font-size: 25px;
    font-weight: bolder;
    background-color: #04b577;
    border-radius: 5px;

    @media (max-width: 1025px) {
        margin-left: 3%;
        margin-right: 3%;
        padding-top: 2%;
        padding-bottom: 2%;
        font-size: 30px;
    }
    @media (max-width: 769px) {
        margin-left: 5%;
        margin-right: 5%;
        padding-top: 1.5%;
        padding-bottom: 1.5%;
        font-size: 25px;
    }
    @media (max-width: 415px) {
        margin-left: 10%;
        margin-right: 10%;
        padding-top: 2%;
        padding-bottom: 2%;
        font-size: 20px;
    }
    @media (max-width: 376px) {
        margin-left: 8%;
        margin-right: 8%;
    }
`;

export const ProductsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
`;