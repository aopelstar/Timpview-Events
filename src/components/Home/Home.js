import React, { Component } from 'react';
import '../../Reset.css'
import './Home.css';
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
        <div className ="home">  
               <Header/>


                
                
                <div className="force"><h2 className = "byline">Your party, </h2>
                <div><h3 className = 'byline2'>perfectly entertained</h3></div></div>
                
                </div>

        )
    }
}