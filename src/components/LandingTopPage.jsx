import React from 'react'
//import styled components
import styled from "styled-components"
//imported the image on the landing
import LandingPage from "../images/image 3.png"


// CSS STYLED COMPONENTS STYLING
/* *************************************************************/
// style for div container for the landing page
const Container = styled.div`
display: flex;
color: white;
margin-top: 6rem;
height: 60vh;

`
// text container for the texts 
const TextContainer = styled.div`
display: flex;
flex-direction:column;
flex:1.5;
justify-content: space-evenly;
padding-right:7rem;
`
// h1 text
const H1text = styled.h1`
font-size: 37px;
font-weight: 500;
`
const Ptext = styled.p`
margin-bottom: 3rem;
font-size: 15px;
font-family: inherit;
`
const SignUpContainer = styled.div`
display: flex;
justify-content: space-between;
height: 60px;
border-radius: 20px;
background: rgba(28, 26, 184, 1);
padding:0.5rem;
`
const EmailInput = styled.input`
height: 40px;
border-radius: 18px;
border:none;
color: rgba(29, 93, 192, 1);
font-size:15px;
font-family:inherit;
font-weight:bold;
padding-left:1rem;
cursor:pointer;
&::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: rgba(29, 93, 192, 1);
}
`
const PasswordInput = styled.input`
height: 40px;
border-radius: 18px;
border:none;
font-size:15px;
font-family:inherit;
font-weight:bold;
padding-left:1rem;
cursor:pointer;
&::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: rgba(29, 93, 192, 1);
}
`
const GetStartedButton = styled.button`
background: rgba(253, 104, 77, 1);
color: rgba(29, 93, 192, 1);
border-radius: 18px;
border:none;

font-size:14px;
font-family:inherit;
font-weight:bold;
cursor:pointer;
`
const ImageContainer = styled.div`
display: flex;
flex:1;
`
const Image = styled.img`
padding-left: 5rem;
position:relative;
z-index: 2;
`
const GradientImage = styled.div`
margin-left: 7rem;
position:absolute;
width: 390px;
height: 403px;
background: #5958B6;
border-radius: 30px;
transform: rotate(6.58deg);
z-index:1;
`
const DisclaimerText = styled.p`
color:rgba(255, 255, 255, 0.5);
font-size: 13px;
`

const ProductFeatures = styled.div`
color:rgba(255, 255, 255, 0.5);
font-size: 13px;
`

/******************* END OF STYLING*******************/


const LandingTopPage = () => {
  return (
    <Container>
        <TextContainer>
            <H1text>Create Your Online Portfolio Website In Minutes</H1text>
            <Ptext>We understand how important time and money are to you. FOLIOFIX helps reduce the
                amount of time you spend on creating your portfolio website by offering creators
                simple tools to help them create a one page site that enables them to curate and share
                their favourite portfolio link worldwide. <br/>
            <p>Be one of the creators that have started using FOLIOFIX. You can now focus on things
                that move the needle.</p></Ptext>
            <SignUpContainer>
            <EmailInput type="email" placeholder="Your Email"></EmailInput>
            <PasswordInput type="password" placeholder="Your Password"></PasswordInput>
            <GetStartedButton>GET STARTED. IT’S FREE!  </GetStartedButton>
            </SignUpContainer>
        <DisclaimerText>By, continuing, you agree to GMC Terms of Service and Privacy Policy. </DisclaimerText>
        </TextContainer>
        <ImageContainer>
        <GradientImage/>
            {/* imported landinf page as source */}
            <Image src={LandingPage} alt="landing"/>
            
        </ImageContainer>

        <ProductFeatures>
<p>hello</p> 
        </ProductFeatures>
    </Container>
  )
}

export default LandingTopPage