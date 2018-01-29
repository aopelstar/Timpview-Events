import React, { Component } from 'react';
import Header from '../Header/Header';
// import './Create.css';
import axios from 'axios';
import image from '../../images/DJ/spinny_light.jpg'


export default class Create_wed extends Component {
    constructor(){
        super();
        this.state = {
            company: "",
            contact: "",
            phone: "",
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

    submit(){
        let body = {
            company: this.state.company,
            contact_name: this.state.contact,
            phone: this.state.phone,
            dates: this.state.date,
            time_frame: this.state.time,
            venue: this.state.venue
        }
        

        let promise = axios.post("api/corp", body)
        promise.then(({data})=> {
            console.log(data);
            this.props.history.push('/cevent/' +data[0].id)})
    }

    render(){
        return(
            <div>
                 <img src = {image} alt="whatever" className="image-home"/>
                <Header/>
                <div className="create-container-c">
                <h1 className="create-h1">Create Your Party</h1>
                <div className='create-c'>
                <div className='subCreate'>Company Name:  <input onChange = {event => this.handleChange("company", event.target.value)} className ="justify-c" /></div>
                <div className='subCreate'>Contact Name:  <input className ="justify-c"  onChange = {event => this.handleChange("contact", event.target.value)}/></div>
                <div className='subCreate'>Contact Telephone:  <input className ="justify-c"  onChange = {event => this.handleChange("phone", event.target.value)}/></div>
                <div className='subCreate'>Date:  <input className ="justify-c"  onChange = {event => this.handleChange("date", event.target.value)}/></div>
                <div className='subCreate'>Time Frame:  <input className ="justify-c"  onChange = {event => this.handleChange("time", event.target.value)}/></div>
                <div className='subCreate'>Venue:  <input className ="justify-c"  onChange = {event => this.handleChange("venue", event.target.value)}/></div>
                
                
                </div>
                </div>
                <div className = "submit"><button className ="button" onClick ={ event=> this.submit(event.target.value)}>Submit</button>
                    </div>
                </div>
        )
    }
}