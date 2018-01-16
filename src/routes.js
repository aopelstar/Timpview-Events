import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Splash from './components/Splash/Splash';
import Welcome from './components/Home/Home';
import About from './components/About/About';
import Price from './components/Price/Price';
import Events from './components/Event/Event';
import Music from './components/Music_Select/Music_Select';
import Login from './components/Login/Login'
import Create_wed from './components/Create/Create_wed'
import Create_party from './components/Create/Create_party'


export default (
    <Switch>
        <Route exact path = '/' component = { Splash } />
        <Route path = '/home' component = { Welcome } />
        <Route path = '/about' component = { About } />
        <Route path = '/price' component = { Price } />
        <Route path = '/event/:id' component = { Events } />
        <Route path = '/music' component = { Music } />
        <Route path = '/login' component = { Login } />
        <Route path = '/createw' component = { Create_wed } />
        <Route path = '/createc' component = { Create_party } />
     </Switch>

)