import React from 'react'
import {Nav,NavbarContainer,NavLogo,Button, NavItem,NavLinks,MobileIcon,Navbtn,NavbtnLink,NavMenu} from "./navbarElements";
import { FaBars } from "react-icons/fa";



function Navbar() {
 

  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                    bookingo
                </NavLogo>
                <MobileIcon>
                 < FaBars/>
                </MobileIcon>
                <NavMenu>
                <NavItem>
                  <NavLinks to='about'>About</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to='Discover'>Discover</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to='Tours'>Tours</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to='Hotels'>Hotels</NavLinks>
                </NavItem>
                </NavMenu>
                <Navbtn>
              <NavbtnLink to="./signin">
                Sign In
              </NavbtnLink>
            </Navbtn>
            </NavbarContainer>
           
        </Nav>


    </>
  )
}

export default Navbar