import React, {Component } from 'react';
import Header from '../Header/Header';
import Playlist from '../Playlist/Playlist'
import axios from 'axios';
import E_populate from './E_populate/E_populate'
import { Link } from 'react-router-dom';
import './Event.css';
import image from '../../images/DJ/booth.jpg';
import { connect } from 'react-redux';
import { updateEvent } from '../../ducks/reducer'



class Event extends Component {
    constructor() {
        super();
        this.state = {
            groomName: "",
            brideName: "",
            g_phone: "",
            b_phone: "",
            date: "",
            time: "",
            venue: ""

        }
    } 

    componentDidMount(){
        let promise = axios.get('/api/wedding')
        promise.then( ({data}) => {
            let body = {
                groom_name: this.state.groomName,
                bride_name: this.state.brideName,
                g_phone: this.state.groomPhone,
                b_phone: this.state.bridePhone,
                dates: this.state.date,
                time_frame: this.state.time,
                venue: this.state.venue,
                auth_id: this.state.auth_id
            };
            this.setState({
                groomName: data.groom_name,
                brideName: data.bride_name,
                g_phone: data.g_phone,
                b_phone: data.b_phone,
                date: data.dates,
                time: data.time_frame,
                venue: data.venue


            });
            this.props.updateEvent(body)
            
        })

    }

    delete(){
        let promise = axios.delete('/api/wedding/'+this.props.match.params.id)
        promise.then( () => {
            this.props.history.push('/home')})
    }

    render() {
        return(
            <div>
                <img src = {image} alt="whatever" className="image-home"/>
                <Header/>
                <E_populate groom ={this.state.groomName} bride ={this.state.brideName}
                 gPhone = {this.state.g_phone} bPhone = {this.state.b_phone} date = {this.state.date}
                 time = {this.state.time} venue = {this.state.venue} />

                <Link to ={ '/music'}><div className = "event-footer">Create or add to your play list by clicking here</div></Link>
                <Playlist id ={this.props.match.params.id}/>
                <div className = "event-edit"> 
               <Link to = {'/createw/'}> <div>Create Event</div></Link><Link to = { '/editw/'+this.props.match.params.id}><div>Edit Event</div></Link>
                <div onClick = {() => this.delete()}>Delete Event</div>
                </div>

            </div>
        )
    }
}

function mapStateToProps(state){
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

export default connect(mapStateToProps, { updateEvent } ) (Event)