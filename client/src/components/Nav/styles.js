import styled from 'styled-components';


export const HeaderMain = styled.header`
    display: flex;
    flex-direction: row;
    position: relative;
    align-content: center;
    justify-content: space-between;
    padding: .5rem;
    background-color: #04b577!important;
    font-weight: bolder;

    @media (max-width: 1025px) {
        flex-direction: column;
    }
`;

export const DivMain = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 350px;
    height: 7vh;
    background-color: #ffffff;
    border-radius: 15px;

    @media (max-width: 1025px) {
        width: 100%;
        justify-content: center;
        height: 8vh;
    }
`;

export const H1Main = styled.h1`
    margin-top: 0!important;
    margin-right: 2px;
    color: var(--main-text-color);
    font-size: 2rem!important;

    @media (max-width: 1025px) {
        font-size: 5rem;
    }
    @media (max-width: 769px) {
        font-size: 4rem;
    }
    @media (max-width: 415px) {
        font-size: 2rem;
    }
`;

export const ImgMain = styled.img`
    width: 70px;
    height: 5vh;
    margin-top: 2%;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;

    @media (max-width: 1025px) {
        margin-top: 0;
        padding-right: .5rem;
        height: 4vh;
    }
    @media (max-width: 769px) {
        height: auto;
    }
    @media (max-width: 415px) {
        width: 50px;
        border-radius: 0;
    }
`;

export const NavMain = styled.nav`
    height: 7vh;

    @media (max-width: 1025px) {
        height: 5vh;
    }
    @media (max-width: 769px) {
        height: 6vh;
        margin-top: 10px;
    }
    @media (max-width: 415px) {
        margin-top: 5px;
    }
`;

export const NavListMain = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: start;
    padding-left: 0;
    width: 30vw;
    margin: 0;
    height: 100%;

    @media (max-width: 1025px) {
        width: 100%;
    }
`;

export const NavItemMain = styled.li`
    font-size: 16px;
    font-weight: bolder;
    width: 150px;
    display: block;
    text-align: center;
    height: 100%;
    padding-top: 1.5rem;
    color: #ffffff;

    &:hover {
        background-color: #32cf98;
        border-radius: 20px;
    }

    @media (max-width: 1025px) {
        padding-top: 3%;
        font-size: 25px;
        width: 200px;
    }
    @media (max-width: 415px) {
        font-size: 15px;
        padding-top: 1rem;
    }
    @media (max-width: 376px) {
        padding-top: .75rem;
    }
`;