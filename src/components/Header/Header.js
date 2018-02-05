import React, { Component } from 'react';
import hamburger from '../../images/hamburger.png'
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Header.css';

export default class Header extends Component {
    constructor(){
        super();
        this.state = {
            page: false,
            slide: false,
            auth_id: ""
        }
    }

    hamburger() {
        this.setState({
            slide: !this.state.slide,
            page: !this.state.page
        })
    };

    componentDidMount(){
        var promise = axios.get('/auth/me')
        promise.then( user => {
            this.setState({
                auth_id: user.data.auth_id
            })
        })
    }


    render(){
        return(
           
            <div className ="navbar-container">
            <div className = "head">
           <div className = 'ham-menu' onClick = {() => this.hamburger()}><img src = { hamburger } alt="whatevs" className = "hamburger"/></div>
           <div className ='logo'>Timpview Events</div>
        <div className = 'enter'>
            {this.state.auth_id?<a href={process.env.REACT_APP_LOGOUT}>Logout</a>:
                                <a href='http://localhost:3030/auth'>Login</a>
                }</div>
            
            </div>

            <div className={ this.state.slide ? 'menu-slide menu':'menu'}>
            <ul>{ this.state.auth_id? 
               <Link to = '/event'><li >Event</li></Link>:
               <a href='http://localhost:3030/auth'><li>Login</li></a>}
               <Link to = '/home'> <li className='list-item'>Home</li></Link>
               <Link to = '/about'> <li className='list-item'>About</li></Link>
               <Link to ='/about'><li className='list-item'>Reviews</li></Link>
               <Link to ='/price'><li className='list-item'>Prices</li></Link>
               
    
            </ul>
            </div>
         </div>
        )
    }
}
