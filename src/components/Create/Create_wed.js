import React, { Component } from 'react';
import Header from '../Header/Header';
import './Create.css'
export default class Create_wed extends Component {
    constructor(){
        super();
        this.state = {
            groomName: "",
            brideName: "",
            groomPhone: "",
            bridePhone: "",
            date: "",
            time: "",
            venue: "",
        }
        this.handleChange=this.handleChange.bind(this);
    }

 

    handleChange(key, val){
        this.setState({
            [key]: val
        })
    }

    render(){
        return(
            <div>
                <Header/>
                <h1 className="about-h1">Create Your Wedding</h1>
                <div className='create'>
                <div className='subCreate'>Groom's Name:  <input className ="justify"  onChange = {event => this.handleChange("groomName", event.target.value)}/></div>
                <div className='subCreate'>Bride's Name:  <input className ="justify"  onChange = {event => this.handleChange("brideName", event.target.value)}/></div>
                <div className='subCreate'>Groom's Telephone:  <input className ="justify"  onChange = {event => this.handleChange("groomPhone", event.target.value)}/></div>
                <div className='subCreate'>Bride's Telephone:  <input className ="justify"  onChange = {event => this.handleChange("bridePhone", event.target.value)}/></div>
                <div className='subCreate'>Date:  <input className ="justify"  onChange = {event => this.handleChange("date", event.target.value)}/></div>
                <div className='subCreate'>Time Frame:  <input className ="justify"  onChange = {event => this.handleChange("time", event.target.value)}/></div>
                <div className='subCreate'>Venue:  <input className ="justify"  onChange = {event => this.handleChange("venue", event.target.value)}/></div>
                
                
                </div>
                <div className = "submit"><button className ="button" onClick ={ event=> this.submit(event.target.value)}>Submit</button>
                    </div>
                </div>
        )
    }
}