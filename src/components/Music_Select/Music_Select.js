import React, {Component } from 'react';
import './Music_Select.css';
import Header from '../Header/Header';
import axios from 'axios';
import image from '../../images/arrow.png';

export default class Music_Select extends Component {
    constructor(){
        super();
        this.state = {
            songInfo: [],
            addedSongs: [],
            index: 0
        }
    }

    componentDidMount(){
        let promise = axios.get('/api/music')
        promise.then(response => {
            this.setState({
                songInfo: response.data
            })
        })
    }

    incrementDown(){
        if(this.state.index!==0){
            this.setState({
                index: this.state.index-5
            })
            
        }
    }

    incrementUp(){
        if(this.state.index+5<this.state.songInfo.length){
            this.setState({
                index: this.state.index+5
            })
            
        }
    }


    render() {
        let songs = this.state.songInfo.filter( (e,i) => i >= this.state.index && i < this.state.index+5).map((e,i) => {
            return(
                <p key ={i}>
                    <div className = 'titles'>{e.song} by {e.artist}
                    <div> {e.album} {e.decade}</div></div>
                </p>
            )
        })
        return(
            <div>
                <Header/>
                <h1 className = "about-h1">Music</h1>
                <div className = 'songs'>
                <div className = 'populate'>{ songs }</div>
                </div>
                <div className = "arrows">
                    <button onClick={ (event) => this.incrementDown(event.target.value)}>
                        <img src = { image } className="arrow1"/>
                    </button>
                    <button onClick={ (event) => this.incrementUp(event.target.value)}>
                        <img src = { image } className="arrow2"/>
                    </button>
                </div>

            </div>
        )
    }
}