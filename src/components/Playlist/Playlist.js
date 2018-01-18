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
                songInfo: data.songs
            })
        })

    }

    render(){
        let songs = this.state.songInfo.map((songs, i) => {
            <div key = {i}>
            <div className = "titles">{songs.song} by {songs.artist}
            <p>{songs.album} {songs.decade}</p></div>
            </div>
        })
        
        return(
            <div className = "songs">
            
                </div>
        )
    }
}