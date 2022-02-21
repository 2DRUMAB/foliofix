import React from 'react';
import styled from "styled-components"

import Group33 from '../images/easytouse.png'
import insight from '../images/insight.png';
import letter from '../images/letter.png';
import wage from '../images/wage.png';



const AboutContainer= styled.div`
background:white;
border-radius:70%;
margin-top:200px;
margin-left:0px;
margin-right:0px;
height: 150vh;
width:250vh;
font-size:10px;
color:grey;
`


const ProductFeature = () => {
  return (
    <AboutContainer>
  
<div className='prod1'>
      <image src={Group33} alt="logo"/>
      <h2>Easy to use</h2>
      <p>
       We have built an easy to use platform<br></br> 
       where you can easily update your <br></br>
       information and set up your portfolio.
      </p>
    </div>

    <div className='prod2'>
      <image src={insight} alt='logo'/>
      <h2>Create Portfolio Online</h2>
      <p>
       Our solution is tailored to ensure portfolio<br></br>
       creation is a seamless process for you.
      </p>
    </div>

    <div className='prod3'>
      <image src={letter} />
      <h2>Clean Code</h2>
      <p>
       Our platform is delivered with<br></br>
       best code quality and performance.
      </p>
    </div>

 <div className='prod4'>
      <image src={wage} />
      <h2>Get Support 24/7</h2>
      <p>
      Get in touch with us anytime via<br></br>
      email. Our team is always here to<br></br>
      help you  succeed.
      </p>
      </div>

    

    </AboutContainer>
  

  )
}
export default ProductFeature;

