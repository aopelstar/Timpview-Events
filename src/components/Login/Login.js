import React from 'react';
import Header from '../Header/Header';
import './Login.css';
import image from '../../images/DJ/DJ2.jpg';

function Login(){
    return(
        <div><div><img src = {image} alt="whatever" className="image-home"/></div>
            <Header/>
            <div className="login-container">
            <h1 className = "login-h1">Login</h1>
            <div className ="login-l">
            Choose Your Event:
            <a><div className ="wed">Wedding
                </div></a>
                <a><div className="corp">Corporate Party</div></a>
            </div>
            </div>
        </div>
    )
}

export default Login;