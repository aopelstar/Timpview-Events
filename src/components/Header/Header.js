import React, { Component } from 'react';
import '../Home/Home.css';
import hamburger from '../../images/hamburger.png'
import { Link } from 'react-router-dom';

export default class Header extends Component {
    constructor(){
        super();
        this.state = {
            slide: false
        }
    }

    hamburger() {
        this.setState({
            slide: !this.state.slide
        })
    };

    render(){
        return(
            <div>
            <div className = "head">
           <div className = 'ham-menu' onClick = {() => this.hamburger()}><img src = { hamburger } className = "hamburger"/></div>
           <div className ='logo'>Timpview Events</div>
           <div className = 'enter'><Link to ='/login'>Login</Link></div>
            
            </div>

            <div className={this.state.slide? 'menu-slide menu':'menu'}>
            <ul>
               <Link to ='/login'><li>Login</li></Link>
               <Link to = '/home'> <li>Home</li></Link>
               <Link to = '/about'> <li>About</li></Link>
               <Link to ='/about'><li>Reviews</li></Link>
               <Link to ='/price'><li>Prices</li></Link>
               
    
            </ul>
            </div>
         </div>
        )
    }
}
