import React, {Component } from 'react';
import Header from '../Header/Header';
import Playlist from '../Playlist/Playlist'
import axios from 'axios';
import E_populate from './E_populate/E_populate'
import { Link } from 'react-router-dom';



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
            console.log(data);
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

    render() {
        return(
            <div>
                <Header/>
                <E_populate groom ={this.state.groomName} bride ={this.state.brideName}
                 gPhone = {this.state.g_phone} bPhone = {this.state.b_phone} date = {this.state.date}
                 time = {this.state.time} venue = {this.state.venue} />

                <Link to ={ '/music/'+this.props.match.params.id}>Feel free to create or add to your play list by clicking here</Link>
                <Playlist id ={this.props.match.params.id}/>
            </div>
        )
    }
}