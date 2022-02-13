import React from 'react'
import styled from "styled-components"
//imported the image on the landing page
import FolioFix from "../images/GMC logo 1.png"


const Container = styled.div`
display: flex;
justify-content: space-between;
margin: 3rem;
align-items:center;
`
const Logo = styled.img`
cursor:pointer;
`
const LoginButton = styled.button`
background: rgba(253, 104, 77, 1);
color: rgba(29, 93, 192, 1);
border-radius: 18px;
border:none;
width: 184px;
height: 40px;
font-size:15px;
font-family:inherit;
font-weight:bolder;
cursor:pointer;


`
const NavBar = () => {
  return (
    <Container>
        <Logo src={FolioFix} alt="FolioFix Logo"/>
        <LoginButton>LOGIN TO FOLIOFIX</LoginButton>
    </Container>
  )
}

export default NavBar