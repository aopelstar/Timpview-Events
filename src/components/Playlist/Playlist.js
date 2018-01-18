import React, { Component } from 'react';
import './Playlist.css';
import axios from 'axios';

export default class Playlist extends Component {
    constructor(props){
        super(props);
        this.state = {
            songInfo:[]

        }
    }

    componentDidMount(){
        let promise = axios.get('/api/playlist/'+this.props.id)
        promise.then( ({data}) => {
            this.setState({
                songInfo: data
            })
        })

    }

    render(){
        let song = this.state.songInfo.map((songs, i) => {
            return(
            <div key = {i}>
            <div className = "titles">{songs.song} by {songs.artist}
            <p>{songs.album} {songs.decade}</p></div>
            </div>
            )
        })
        
        return(<div className ={this.state.songInfo.length === 0 ? "playlist-hidden":"playlist-reveal"}>
                <h1 className="about-h1">Your Playlist</h1>
            <div className = "playlist-songs">
            <div className = "populate"> {song}
            </div>
                </div>
                </div>
        )
    }
}