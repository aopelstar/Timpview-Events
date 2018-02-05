import React, {Component } from 'react';
import Header from '../Header/Header';
import './About.css';
import image from '../../images/DJ/Firworks.jpg'

var sectionStyle = {
    backgroundImage: `url(${image}`
}

export default class About extends Component{
    constructor(){
        super();
        this.state = {
            slide: false
        }
    }
    

    render(){
        return(
            <div className="about-main" style={sectionStyle}>
                <Header/>
                <div className="about-container">
                <h1 className = "about-h1">About</h1>
                <div className ="about">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce  
                condimentum tortor velit, sed dapibus nulla posuere vitae. 
                Vestibulum luctus imperdiet cursus. Integer sagittis nec orci 
                vel tempus. Sed vitae consequat enim. Etiam faucibus quam eget
                 scelerisque porttitor. Aliquam mattis erat non mattis finibus. 
                 Etiam ultrices ex nibh.
                </div>
                </div>
            </div>
        )
    }
}
