import React, { Component } from 'react';
import '../../Reset.css'
import './Home.css';
import hamburger from '../../images/hamburger.png'
import { Link } from 'react-router-dom';
import image from '../../images/IMG_3578.jpg';
import Header from '../Header/Header';
import axios from 'axios';

export default class Home extends Component {
    constructor(){
        super();
        this.state = {
            slide: false
        }
    }

   

    render(){
        return(
           <div>    
               <Header/>


                <div><img src = {image} className="image"/></div>
                <div className= "line">
                <h2 className = "byline">Your party, </h2>
                <h3 className = 'byline2'>perfectly entertained</h3>
                </div>
                </div>

        )
    }
}