/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React,{Component} from 'react';

import axios from 'axios';
import AlbumDetails from './AlbumDetails';
import {ScrollView} from 'react-native';


class AlbumList extends Component{
    state ={albums:[]};

    componentWillMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response =>this.setState({albums:response.data}));
    }

    renderAlbum(){
        return this.state.albums.map(album=>
            <AlbumDetails key={album.title} album={album}/>
        );
    }

    render(){

        console.log(this.state)
        return (
            <ScrollView>
                {this.renderAlbum()}
            </ScrollView>

             );
    }

}


export default AlbumList;
