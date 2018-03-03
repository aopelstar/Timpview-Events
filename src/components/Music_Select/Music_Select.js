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

    addSong(value){
        let newArray = this.state.addedSongs;
        let index = newArray.indexOf(value)
        if(index !==-1){
            newArray.splice(index, 1)
        } else {
        newArray.push(value)
        }


        this.setState({
            addedSongs: newArray
        })

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

    submit(){
        let body = {
            songs: this.state.addedSongs
        }
        console.log(body)

        let promise = axios.post("/api/playlist", body)
        promise.then(({data}) => {
            this.props.history.push('/event')
        })

    }


    render() {
        let songs = this.state.songInfo.filter( (e,i) => i >= this.state.index && i < this.state.index+5).map((e,i) => {
            return(
                <div key ={i} onClick={ ()=> this.addSong(e.id) }>
                    <div className = {this.state.addedSongs.includes(e.id) ? 'titles titles2' : 'titles' }>{e.song} by {e.artist}
                    <p> {e.album} {e.decade}</p></div>
                </div>
            )
        })
        return(
            
            <div className ="music"> 
                <Header/>
                <h1 className = "music-h1">Music</h1>
                <div className = 'songs'>
                <div className = 'populate-songs'>{ songs }</div>
                </div>
                <div className = "arrows">
                    <div className="background-weird"onClick={ (event) => this.incrementDown(event.target.value)}>
                        <img src = { image } className="arrow1"/>
                    </div>
                    <button className ="songs-btn" onClick={() => this.submit()}>Submit</button>
                    <div className="background-weird" onClick={ (event) => this.incrementUp(event.target.value)}>
                        <img src = { image } className="arrow2"/>
                    </div>
                </div>

            </div>
        )
    }
}