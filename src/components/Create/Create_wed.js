import React, { Component } from 'react';
import Header from '../Header/Header';
import './Create.css';
import axios from 'axios';
import image from '../../images/DJ/spinny_light.jpg';
import { connect } from 'react-redux';
import { updateEvent, getUser } from '../../ducks/reducer'



class Create_wed extends Component {
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
            auth_id: ""}
        

        this.handleChange=this.handleChange.bind(this);
    }

 

    handleChange(key, val){
        this.setState({
            [key]: val
        })
    }

    submit(){
        let body = {
            groom_name: this.state.groomName,
            bride_name: this.state.brideName,
            g_phone: this.state.groomPhone,
            b_phone: this.state.bridePhone,
            dates: this.state.date,
            time_frame: this.state.time,
            venue: this.state.venue,
            auth_id: this.state.auth_id
        }
        this.props.updateEvent(body)

        let promise = axios.put("/api/wedding", body)
        promise.then(({data})=> {
            console.log(data);
            this.props.history.push('/event/' +data[0].id)})

        
    }

    render(){
        this.props.getUser()
        return(
            <div>
                <img src = {image} alt="whatever" className="image-home"/> 
                 <Header/>
                <div className = 'create-container'>
                <h1 className="create-h1">Create Your Wedding</h1>
                <div className='create'>
                <div className='subCreate'>Groom's Name:  
                <input className ="justify"  value={this.state.groomName} onChange = {event => this.handleChange("groomName", event.target.value)}></input></div>
                <div className='subCreate'>Bride's Name:  
                <input className ="justify"  onChange = {event => this.handleChange("brideName", event.target.value)}/></div>
                <div className='subCreate'>Groom's Telephone:  
                <input className ="justify"  onChange = {event => this.handleChange("groomPhone", event.target.value)}/></div>
                <div className='subCreate'>Bride's Telephone:  
                <input className ="justify"  onChange = {event => this.handleChange("bridePhone", event.target.value)}/></div>
                <div className='subCreate'>Date:  
                <input className ="justify"  onChange = {event => this.handleChange("date", event.target.value)}/></div>
                <div className='subCreate'>Time Frame:  
                <input className ="justify"  onChange = {event => this.handleChange("time", event.target.value)}/></div>
                <div className='subCreate'>Venue:  
                <input className ="justify"  onChange = {event => this.handleChange("venue", event.target.value)}/></div>
                
                </div>
                </div>
                
                <div className = "submit"><button className ="button" onClick ={ event=> this.submit(event.target.value)}>Submit</button>
                    </div>
                    

                    
                    
                </div>
        )
    }
}

function mapStateToProps( state ) {

    return{
        groomName: state.groomName,
        brideName: state.brideName,
        groomPhone: state.groomPhone,
        bridePhone: state.bridePhone,
        date: state.date,
        time: state.time,
        venue: state.venue,
        auth_id: state.auth_id

    }
}

export default connect( mapStateToProps, { updateEvent, getUser } ) (Create_wed); 