import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import thinking from './thinking.png';


const Logo = () => {
    return (
        <div className= 'ma4 mt0'>
        <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
        <div className="Tilt-inner"> <img style={{paddingLeft: '5px', height: 245, width: 225 }} src={thinking} alt='thinking' /> </div>
        </Tilt>
        </div>
        
    )
}

export default Logo;