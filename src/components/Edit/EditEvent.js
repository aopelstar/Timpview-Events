import React, { Component } from 'react';
import './EditEvent.css';
import Header from '../Header/Header';
import axios from 'axios';

import image from '../../images/DJ/DJ2.jpg';

export default class EditEvent extends Component {
    constructor() {
        super();
        this.state = {
            groom: '',
            bride: '',
            gPhone: '',
            bPhone: '',
            date: '',
            time: '',
            venue: '',
            groomTrue: false,
            brideTrue: false,
            gphoTrue: false,
            bphoTrue: false,
            dateTrue: false,
            timeTrue: false,
            venueTrue: false,

        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        let promise = axios.get('/api/wedding')
        promise.then( ({data}) => 
    this.setState({
        groom: data.groom_name,
        bride: data.bride_name,
        gPhone: data.g_phone,
        bPhone: data.b_phone,
        date: data.dates,
        time: data.time_frame,
        venue: data.venue
    }))
    }

    handleChange( key, val ){
        let togglers = ['groomTrue', 'brideTrue', 'gphoTrue', 'bphoTrue', 'dateTrue', 'timeTrue', 'venueTrue'];
        if(togglers.includes(key)){
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
        let body={
            groom_name: this.state.groom,
            bride_name: this.state.bride,
            g_phone: this.state.gPhone,
            b_phone: this.state.bPhone,
            dates: this.state.date,
            time_frame: this.state.time,
            venue: this.state.venue
        }

        let promise = axios.put('/api/wedding', body)
        promise.then( () => this.props.history.push('/event') )
    }


    render() {
        return (
            <div>
                <div><img src = {image} alt="whatever" className="image-home"/></div>
                <Header />
                <h1 className='edit-h1'>Edit Event</h1>
                <div className='songs'>
                    <div className='edit-rows' onClick={() => this.handleChange("groomTrue")}>Groom: <div className={this.state.groomTrue? 'edit-desc-text' : 'edit-desc-textH'}>
                        <input className="edit-input" value={this.state.groom} onChange={(e) => this.handleChange("groom", e.target.value)} />
                        </div>
                        <div className={this.state.groomTrue ? 'edit-descH' : 'edit-desc'}> {this.state.groom} </div>
                    </div>
                    <div className='edit-rows' onClick={() => this.handleChange("brideTrue")}>Bride: <div className={this.state.brideTrue ? 'edit-desc-text' : 'edit-desc-textH'}>
                        <input className="edit-input" value={this.state.bride} onChange={(e) => this.handleChange("bride", e.target.value)} />
                        </div>
                        <div className={this.state.brideTrue ? 'edit-descH' : 'edit-desc'}> {this.state.bride} </div>
                    </div>
                    <div className='edit-rows' onClick={() => this.handleChange('gphoTrue')}>Groom's Phone: <div className={this.state.gphoTrue ? 'edit-desc-text' : 'edit-desc-textH'}>
                        <input className="edit-input" value={this.state.gPhone} onChange={(e) => this.handleChange("gPhone", e.target.value)}/>
                        </div>
                        <div className={this.state.gphoTrue ? 'edit-descH' : 'edit-desc'}> {this.state.gPhone} </div></div>
                        <div className='edit-rows' onClick={() => this.handleChange('bphoTrue')}>Bride's Phone: <div className={this.state.bphoTrue ? 'edit-desc-text' : 'edit-desc-textH'}>
                        <input className="edit-input" value={this.state.bPhone} onChange={(e) => this.handleChange("bPhone", e.target.value)}/>
                        </div>
                        <div className={this.state.bphoTrue ? 'edit-descH' : 'edit-desc'}> {this.state.bPhone} </div></div>
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