import React, {Component} from 'react';
import { Text, View } from 'react-native';
import MovieDetailsView from './view';
import styled from 'styled-components/native';


export default class MovieDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.places = [];
        this.initialPlaces();
    }
    initialPlaces(){
        for (let i = 0; i< 10; i++){
            for (let j = 0; j< 14; j++){
                this.places.push({numberPlace:j+1, numberRow:i+1});
            }
        }

        /*this.placesVip = [];
        this.initialPlacesVip();
}
        initialPlacesVip(){
            for (let v =0; v<13; v++){
                this.placesVip.push({numberPlace:v+1});
            }*/
        }
    render(){

        return(
           <MovieDetailsView places={this.places}
             /* placesVip={this.placesVip}*/

           />

        )
    }
}