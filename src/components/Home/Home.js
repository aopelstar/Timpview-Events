import React, { Component } from 'react';
import '../../Reset.css'
import './Home.css';
import image from '../../images/IMG_3578.jpg';
import Header from '../Header/Header';

export default class Home extends Component {
    constructor(){
        super();
        this.state = {
            slide: false,
            page: false
        }
    }
    // componentDidMount(){ this isn't quite working yet
    //     this.setState({
    //         page: true
    //     })
    // }

   

    render(){
        return(
        //    <div className ={this.state.page?"home-app":"home-app-hidden"}>  this isn't working yet
        <div>  
            <div><img src = {image} alt="whatever" className="image-home"/></div>
               <Header/>


                
                
                <h2 className = "byline">Your party, </h2>
                <div className="force"><h3 className = 'byline2'>perfectly entertained</h3></div>
                
                </div>

        )
    }
}