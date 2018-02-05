import React from 'react';
import './Splash.css';
import image from '../../images/splash.jpg';
import {Link} from 'react-router-dom';

var sectionStyle = {
    backgroundImage: `url(${image}`
}

function Splash(){
    return(
        <div className="splash" style={ sectionStyle }>
            
        <div className='header-container'>
            <div className = "header">
             Timpview Events 
            </div>
            </div>


            <Link to ='/Home'> <div className = "login"> <button className ="button">Enter</button></div></Link>
           
           </div>
        
        
    )
}
export default Splash;