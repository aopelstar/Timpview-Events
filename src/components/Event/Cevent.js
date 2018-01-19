import React, {Component } from 'react';
import Header from '../Header/Header';
import axios from 'axios';
import E_copulate from './E_populate/E_copulate'
import { Link } from 'react-router-dom'



export default class Event extends Component {
    constructor() {
        super();
        this.state = {
            company: "",
            contact: "",
            phone: "",
            date: "",
            time: "",
            venue: ""

        }
    } 

    componentDidMount(){
        let promise = axios.get('/api/corp/'+this.props.match.params.id)
        promise.then( ({data}) => {
            this.setState({
                company: data.company,
                contact: data.contact_name,
                phone: data.phone,
                date: data.dates,
                time: data.time_frame,
                venue: data.venue


            })
        })

    }

    delete(){
        let promise = axios.delete('/api/corp/'+this.props.match.params.id)
        promise.then( () => {
            this.props.history.push('/home')})
    }

    render() {
        return(
            <div>
                <Header/>
                <E_copulate company ={this.state.company} name ={this.state.contact}
                 phone = {this.state.phone} date = {this.state.date}
                 time = {this.state.time} venue = {this.state.venue} />
                 <div className="event-edit">
                 <Link to = { '/editc/'+this.props.match.params.id}><div>Edit Event</div></Link>
                 <div onClick = {() => this.delete()}>Delete Event</div>
                 </div>
            </div>
        )
    }
}