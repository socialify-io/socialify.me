import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
    background: #fff;
    height: 80px;
    /* margin-top: -10%; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-weight: 300;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all case;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
    color: fff;
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    height: 100%;
    align-items: center;
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 760px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(100%, -100%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    /* margin-right: -22px; */

    @media screen and (max-width: 760px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLink = styled(LinkS)`
    color: #000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        color: #aaa;
    }
`