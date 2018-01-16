import React, {Component } from 'react';
import './Splash.css';
import image from '../../images/G0010535.jpg';
import {Link} from 'react-router-dom';

function Splash(){
    return(
        <div className="splash">
        
            <div className = "header">
            Timpview Events
            </div>
            <div><img src = {image} className="image"/></div>


            <Link to ='/Home'> <div className = "login"> <button className ="button">Enter</button></div></Link>
           </div>
        
        
    )
}
export default Splash;