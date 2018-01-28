import React, { Component } from 'react';
import '../Home/Home.css';
import hamburger from '../../images/hamburger.png'
import { Link } from 'react-router-dom';

export default class Header extends Component {
    constructor(){
        super();
        this.state = {
            page: false,
            slide: false
        }
    }

    hamburger() {
        this.setState({
            slide: !this.state.slide,
            page: !this.state.page
        })
    };


    render(){
        return(
           
            <div>
            <div className = "head">
           <div className = 'ham-menu' onClick = {() => this.hamburger()}><img src = { hamburger } alt="whatevs" className = "hamburger"/></div>
           <div className ='logo'>Timpview Events</div>
           <div className = 'enter'><Link to ='/login'>Login</Link></div>
            
            </div>

            <div className={ this.state.slide ? 'menu-slide menu':'menu'}>
            <ul>
               <Link to ='/login'><li className={ this.state.slide ? 'list-item':'list-item-hidden'}>Login</li></Link>
               <Link to = '/home'> <li className={ this.state.slide ? 'list-item':'list-item-hidden'}>Home</li></Link>
               <Link to = '/about'> <li className={ this.state.slide ? 'list-item':'list-item-hidden'}>About</li></Link>
               <Link to ='/about'><li className={ this.state.slide ? 'list-item':'list-item-hidden'}>Reviews</li></Link>
               <Link to ='/price'><li className={ this.state.slide ? 'list-item':'list-item-hidden'}>Prices</li></Link>
               
    
            </ul>
            </div>
         </div>
        )
    }
}
