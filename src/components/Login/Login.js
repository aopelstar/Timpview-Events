import React from 'react';
import Header from '../Header/Header';
import './Login.css';

function Login(){
    return (
        <div>
        <Header/>
        <h1 className = 'about-h1'>Login</h1>
        <div className = 'songs'>
        <a><div className = 'wed'>Weddings</div></a>
        <a><div className = 'corp'>Corporate Event </div></a>
        </div>
        </div>
    )
}

export default Login;