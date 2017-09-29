import React, {Component} from 'react';
import { Text, View } from 'react-native';
import TicketsView from './view';
import styled from 'styled-components/native';


export default class Tickets extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
        this.places = [];
        this.initialPlaces();
    }
    initialPlaces() {
        for (let i = 0; i < 10; i++) {
            this.places.push({Circle:i+1});
        }
    }
    render(){
        console.log('tickets  selectedDate', this.props.date);
        return(
            <TicketsView places={this.places}
                         selectedDate={this.props.date}
            />

        )
    }
}