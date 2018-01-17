import React, {Component } from 'react';
import Header from '../Header/Header';
import axios from 'axios';
import E_populate from './E_populate/E_populate'



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
                <E_populate/>
            </div>
        )
    }
}