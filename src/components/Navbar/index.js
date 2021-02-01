import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu,
     NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({toggle}) => {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY > 80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}>Dolla</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />    
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks
                            to='about'
                            smooth={true}
                            spy={true}
                            duration={500}
                            exact='true'
                            offset={-80}
                        >About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks
                            to='discover'
                            smooth={true}
                            spy={true}
                            duration={500}
                            exact='true'
                            offset={-80}
                         >Discover</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks 
                            to='services'
                            smooth={true}
                            spy={true}
                            duration={500}
                            exact='true'
                            offset={-80}
                        >Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks
                            to='signup'
                            smooth={true}
                            spy={true}
                            duration={500}
                            exact='true'
                            offset={-80}
                         >Sign Up</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink 
                            to='/signin'
                            smooth={true}
                            spy={true}
                            duration={500}
                            exact='true'
                            offset={-80}
                    >Sign In</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar