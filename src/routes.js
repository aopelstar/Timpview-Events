import React from 'react';
import {HashRouter,Switch, Route} from 'react-router-dom';
import {spring, AnimatedSwitch } from 'react-router-transition';
import Splash from './components/Splash/Splash';
import Welcome from './components/Home/Home';
import About from './components/About/About';
import Price from './components/Price/Price';
import Events from './components/Event/Event';
import Cevents from './components/Event/Cevent';
import Music from './components/Music_Select/Music_Select';
import Login from './components/Login/Login';
import Create_wed from './components/Create/Create_wed';
import Create_party from './components/Create/Create_party';
import EditEvent from './components/Edit/EditEvent';
import EditCevent from './components/Edit/EditCevent';
import Header from './components/Header/Header'


    
export default (
    <HashRouter>
     <AnimatedSwitch 
     atEnter={{ opacity: 0 }}
    atLeave={{ opacity: 0 }}
    atActive={{ opacity: 1 }}
    className="switch-wrapper"
    > 
        <Route exact path = '/' component = { Splash } />
        <Route path = '/home' component = { Welcome } />
        <Route path = '/about' component = { About } />
        <Route path = '/price' component = { Price } />
        <Route path = '/event' component = { Events } />
        <Route path = '/cevent/:id' component = { Cevents } />
        <Route path = '/music' component = { Music } />
        <Route path = '/login' component = { Login } />
        <Route path = '/createw' component = { Create_wed } />
        <Route path = '/createc' component = { Create_party } />
        <Route path = '/editw' component = { EditEvent } />
        <Route path = '/editc/:id' component = { EditCevent } />
        <Route path = '' component = {Header }/>
     </AnimatedSwitch> 
        </HashRouter>

)