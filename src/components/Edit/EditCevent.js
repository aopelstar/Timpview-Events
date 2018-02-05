import React, { Component } from 'react';
import axios from 'axios';
import './EditEvent.css';
import Header from '../Header/Header'
import image from '../../images/DJ/DJ2.jpg';

var sectionStyle = {
    backgroundImage: `url(${image}`
}


export default class EditCevent extends Component {
    constructor() {
        super();
        this.state = {
            company: '',
            contact: '',
            phone: '',
            date: '',
            time: '',
            venue: '',
            compTrue: false,
            contTrue: false,
            phoTrue: false,
            dateTrue: false,
            timeTrue: false,
            venueTrue: false,

        }

        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        let promise = axios.get('/api/corp/'+this.props.match.params.id)
        promise.then(({ data }) =>
            this.setState({
                company: data.company,
                contact: data.contact_name,
                phone: data.phone,
                date: data.dates,
                time: data.time_frame,
                venue: data.venue


            })
        )
    }

    handleChange(key, val) {
        let togglers = ['compTrue', 'contTrue', 'phoTrue', 'dateTrue', 'timeTrue', 'venueTrue'];
        if (togglers.includes(key)) {
            this.setState({
                [key]: !this.state.key
            })
        } else {
            this.setState({
                [key]: val
            })
        }
    }

    submit(){
let body ={
    company: this.state.company,
    contact_name: this.state.contact,
    phone: this.state.phone,
    dates: this.state.date,
    time_frame: this.state.time,
    venue: this.state.venue
    }

        let promise = axios.put('/api/corp/'+this.props.match.params.id, body)
        promise.then( ( { data } ) => { 
            this.props.history.push('/cevent/'+this.props.match.params.id)})
    }

    render() {
        return (
            <div className ="edit-event" style={sectionStyle}> 
                <Header />
                <div className='songs'>
                    <div className='edit-rows' onClick={() => this.handleChange("compTrue")}>Company: <div className={this.state.compTrue ? 'edit-desc-text' : 'edit-desc-textH'}>
                        <input className="edit-input" value={this.state.company} onChange={(e) => this.handleChange("company", e.target.value)} />
                        </div>
                        <div className={this.state.compTrue ? 'edit-descH' : 'edit-desc'}> {this.state.company} </div>
                    </div>
                    <div className='edit-rows' onClick={() => this.handleChange("contTrue")}>Contact: <div className={this.state.contTrue ? 'edit-desc-text' : 'edit-desc-textH'}>
                        <input className="edit-input" value={this.state.contact} onChange={(e) => this.handleChange("contact", e.target.value)} />
                        </div>
                        <div className={this.state.contTrue ? 'edit-descH' : 'edit-desc'}> {this.state.contact} </div>
                    </div>
                    <div className='edit-rows' onClick={() => this.handleChange('phoTrue')}>Phone Number: <div className={this.state.phoTrue ? 'edit-desc-text' : 'edit-desc-textH'}>
                        <input className="edit-input" value={this.state.phone} onChange={(e) => this.handleChange("phone", e.target.value)}/>
                        </div>
                        <div className={this.state.phoTrue ? 'edit-descH' : 'edit-desc'}> {this.state.phone} </div></div>
                    <div className='edit-rows' onClick={() => this.handleChange('dateTrue')}>Date: <div className={this.state.dateTrue ? 'edit-desc-text' : 'edit-desc-textH'}>
                        <input className="edit-input" value={this.state.date} onChange={(e) => this.handleChange("date", e.target.value)}/>
                        </div>
                        <div className={this.state.dateTrue ? 'edit-descH' : 'edit-desc'}> {this.state.date} </div></div>
                    <div className='edit-rows' onClick={() => this.handleChange('timeTrue')}>Time: <div className={this.state.timeTrue ? 'edit-desc-text' : 'edit-desc-textH'}>
                        <input className="edit-input" value={this.state.time} onChange={(e) => this.handleChange("time", e.target.value)}/>
                        </div>
                        <div className={this.state.timeTrue ? 'edit-descH' : 'edit-desc'}> {this.state.time} </div></div>
                    <div className='edit-rows' onClick={() => this.handleChange('venueTrue')}>Venue: <div className={this.state.venueTrue ? 'edit-desc-text' : 'edit-desc-textH'}>
                        <input className="edit-input" value={this.state.venue} onChange={(e) => this.handleChange("venue", e.target.value)}/>
                        
                    </div><div className={this.state.venueTrue ? 'edit-descH' : 'edit-desc'}> {this.state.venue} </div></div>
                </div>
                <div className = "edit-butt-div">
                <button className="edit-button" onClick={() => this.submit()}>Submit</button>
                </div>
            </div>
        )
    }

}