import React, { Component } from 'react';
import '../../Reset.css'
import './Home.css';
import image from '../../images/IMG_3578.jpg';
import Header from '../Header/Header';

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


                <div><img src = {image} alt="whatever" className="image"/></div>
                <div className= "line">
                <h2 className = "byline">Your party, </h2>
                <h3 className = 'byline2'>perfectly entertained</h3>
                </div>
                </div>

        )
    }
}