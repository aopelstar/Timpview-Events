import React, {Component } from 'react';
import Header from '../Header/Header';
import image from '../../images/DJ/DJ1.jpg'

export default class Price extends Component {
    constructor() {
        super();
        this.state= {

        }
    }

    render(){
        return(
            <div>
                <img src = {image} alt="whatever" className="image-home"/>
                <Header/>
                <div className="about-container">
                <h1 className = "about-h1">Prices</h1>
                <div className = "about">Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Suspendisse malesuada maximus dignissim. Nulla 
                facilisi. Quisque commodo, ligula sed lobortis suscipit, purus 
                tellus porta massa, vel imperdiet arcu erat vel elit. Aenean 
                malesuada viverra blandit. Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Donec tincidunt sapien lectus. Vestibulum in 
                euismod lacus. Quisque condimentum augue eu mauris ultricies 
                condimentum at eu enim. Sed maximus luctus pharetra. Proin 
                volutpat auctor sollicitudin. Aliquam leo ex, cursus a blandit 
                sed, ultricies et ex. Quisque suscipit nibh elementum, convallis 
                lectus quis, molestie ipsum. Ut turpis purus, aliquet venenatis 
                ipsum non, blandit volutpat mi. Suspendisse potenti. Pellentesque 
                fringilla congue eros. Class aptent taciti sociosqu ad litora 
                torquent per conubia nostra, per inceptos himenaeos.</div>
                </div>
                </div>
        )
    }
}