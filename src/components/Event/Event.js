import React, {Component } from 'react';
import Header from '../Header/Header';
import Playlist from '../Playlist/Playlist'
import axios from 'axios';
import E_populate from './E_populate/E_populate'
import { Link } from 'react-router-dom';
import './Event.css';
import image from '../../images/DJ/booth.jpg';



export default class Event extends Component {
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
        let promise = axios.get('/api/wedding/'+this.props.match.params.id)
        promise.then( ({data}) => {
            this.setState({
                groomName: data.groom_name,
                brideName: data.bride_name,
                g_phone: data.g_phone,
                b_phone: data.b_phone,
                date: data.dates,
                time: data.time_frame,
                venue: data.venue


            })
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

                <Link to ={ '/music/'+this.props.match.params.id}><div className = "event-footer">Create or add to your play list by clicking here</div></Link>
                <Playlist id ={this.props.match.params.id}/>
                <div className = "event-edit"> 
                <Link to = { '/editw/'+this.props.match.params.id}><div>Edit Event</div></Link>
                <div onClick = {() => this.delete()}>Delete Event</div>
                </div>

            </div>
        )
    }
}