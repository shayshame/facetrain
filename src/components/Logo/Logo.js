import React from 'react';
import Tilt from 'react-parallax-tilt';
import alien from './alien.png'
import './Logo.css'

const Logo = () => {
 return (
 <Tilt>
  <div style={{ 
      position: 'absolute',
      top: '50%',
      left: '10%', // Adjust this value to move your logo to the left
      transform: 'translate(-50%, -50%)',
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '15vh', 
      width: '10vw', 
      backgroundColor: 'white',
      paddingLeft: '10px' // Add this line to add padding to the left
  }}>
    <img src={alien} alt="Alien" />
  </div>
 </Tilt>
 );
}

export default Logo;