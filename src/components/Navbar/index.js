import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, NavMenu, NavItem, NavLink, MobileIcon } from './NavbarElements';

const logoStyle = {
    height: '45%'
}

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        <img src="/images/logo.png" style={logoStyle} alt="logo" />
                    </NavLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLink to="/">Why?</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/">Download</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/">FAQ</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/">Waitlist</NavLink>
                        </NavItem>
                    </NavMenu> 
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;
