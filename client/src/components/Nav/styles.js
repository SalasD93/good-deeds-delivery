import styled from 'styled-components';


export const HeaderMain = styled.header`
    display: flex;
    flex-direction: row;
    position: relative;
    align-content: center;
    justify-content: space-between;
    padding: .5rem;
    background-color: #04b577!important;
    color: #104a36;
    font-weight: bolder;
`;

export const DivMain = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 20vw;
    background-color: white;
    border-radius: 15px;
`;

export const H1Main = styled.h1`
    margin-top: 0!important;
`;

export const ImgMain = styled.img`
    width: 15%;
    margin-top: 2%;
`;

export const NavMain = styled.nav`
    height: 10vh;
`;

export const NavListMain = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding-left: 0;
    width: 10vw;
    margin: 0;
    height: 100%;
`;

export const NavItemMain = styled.li`
    font-size: 16px;
    font-weight: bolder;
    width: 50%;
    display: block;
    text-align: center;
    height: 100%;
    padding-top: 1rem;
    color: white;

    &:hover {
        background-color: #32cf98;
        border-radius: 20px;
    }
`;