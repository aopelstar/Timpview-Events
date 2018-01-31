import React, { Component } from 'react';
import './EditEvent.css';
import Header from '../Header/Header';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateEvent, getUser, updateUser } from '../../ducks/reducer'

import image from '../../images/DJ/DJ2.jpg';

class EditEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groom_name: props.groom_name,
            bride_name: props.bride_name,
            g_phone: props.g_phone,
            b_phone: props.b_phone,
            dates: props.date,
            time_frame: props.time,
            venue: props.venue,
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

    componentDidMount() {
        //     let promise = axios.get('/api/wedding')  No longer necessary because of redux
        //     promise.then( ({data}) => 
        this.props.getUser();


    }

    componentWillReceiveProps(nextProps){
        this.setState({
            groom_name: nextProps.groom_name,
            bride_name: nextProps.bride_name,
            g_phone: nextProps.g_phone,
            b_phone: nextProps.b_phone,
            dates: nextProps.date,
            time_frame: nextProps.time,
            venue: nextProps.venue,

        })
    }


    handleChange(key, val) {
        let togglers = ['groomTrue', 'brideTrue', 'gphoTrue', 'bphoTrue', 'dateTrue', 'timeTrue', 'venueTrue'];
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

    submit() {
        let body = {
            groom_name: this.state.groom_name,
            bride_name: this.state.bride_name,
            g_phone: this.state.g_phone,
            b_phone: this.state.b_phone,
            dates: this.state.dates,
            time_frame: this.state.time_frame,
            venue: this.state.venue
        }

        let promise = axios.put('/api/wedding', body)
        promise.then(() => {
            this.props.updateEvent(body);
            this.props.history.push('/event')})
    }


    render() {

        return (
            <div>
                <div><img src={image} alt="whatever" className="image-home" /></div>
                <Header />
                <h1 className='edit-h1'>Edit Event</h1>
                <div className='songs'>
                    <div className='edit-rows' onClick={() => this.handleChange("groomTrue")}>Groom: <div className={this.state.groomTrue ? 'edit-desc-text' : 'edit-desc-textH'}>
                        <input className="edit-input" value={this.state.groom_name} onChange={(e) => this.handleChange("groom_name", e.target.value)} />
                    </div>
                        <div className={this.state.groomTrue ? 'edit-descH' : 'edit-desc'}> {this.props.groom_name} </div>
                    </div>
                    <div className='edit-rows' onClick={() => this.handleChange("brideTrue")}>Bride: <div className={this.state.brideTrue ? 'edit-desc-text' : 'edit-desc-textH'}>
                        <input className="edit-input" value={this.state.bride_name} onChange={(e) => this.handleChange("bride_name", e.target.value)} />
                    </div>
                        <div className={this.state.brideTrue ? 'edit-descH' : 'edit-desc'}> {this.props.bride_name} </div>
                    </div>
                    <div className='edit-rows' onClick={() => this.handleChange('gphoTrue')}>Groom's Phone: <div className={this.state.gphoTrue ? 'edit-desc-text' : 'edit-desc-textH'}>
                        <input className="edit-input" value={this.state.g_phone} onChange={(e) => this.handleChange("g_phone", e.target.value)} />
                    </div>
                        <div className={this.state.gphoTrue ? 'edit-descH' : 'edit-desc'}> {this.props.g_phone} </div></div>
                    <div className='edit-rows' onClick={() => this.handleChange('bphoTrue')}>Bride's Phone: <div className={this.state.bphoTrue ? 'edit-desc-text' : 'edit-desc-textH'}>
                        <input className="edit-input" value={this.state.b_phone} onChange={(e) => this.handleChange("b_phone", e.target.value)} />
                    </div>
                        <div className={this.state.bphoTrue ? 'edit-descH' : 'edit-desc'}> {this.props.b_phone} </div></div>
                    <div className='edit-rows' onClick={() => this.handleChange('dateTrue')}>Date: <div className={this.state.dateTrue ? 'edit-desc-text' : 'edit-desc-textH'}>
                        <input className="edit-input" value={this.state.dates} onChange={(e) => this.handleChange("dates", e.target.value)} />
                    </div>
                        <div className={this.state.dateTrue ? 'edit-descH' : 'edit-desc'}> {this.props.date} </div></div>
                    <div className='edit-rows' onClick={() => this.handleChange('timeTrue')}>Time: <div className={this.state.timeTrue ? 'edit-desc-text' : 'edit-desc-textH'}>
                        <input className="edit-input" value={this.state.time_frame} onChange={(e) => this.handleChange("time_frame", e.target.value)} />
                    </div>
                        <div className={this.state.timeTrue ? 'edit-descH' : 'edit-desc'}> {this.props.time} </div></div>
                    <div className='edit-rows' onClick={() => this.handleChange('venueTrue')}>Venue: <div className={this.state.venueTrue ? 'edit-desc-text' : 'edit-desc-textH'}>
                        <input className="edit-input" value={this.state.venue} onChange={(e) => this.handleChange("venue", e.target.value)} />

                    </div><div className={this.state.venueTrue ? 'edit-descH' : 'edit-desc'}> {this.props.venue} </div></div>
                </div>
                <div className="edit-butt-div">
                    <button className="edit-button" onClick={() => this.submit()}>Submit</button>
                </div>
            </div>
        )
    }
} function mapStateToProps(state) {

    console.log(state.user)

    return {
        groom_name: state.user.groom_name,
        bride_name: state.user.bride_name,
        g_phone: state.user.g_phone,
        b_phone: state.user.b_phone,
        date: state.user.dates,
        time: state.user.time_frame,
        venue: state.user.venue,

    }
}


export default connect(mapStateToProps, { updateEvent, getUser, updateUser })(EditEvent);