import React, {Component} from 'react';
import { Text, View, Alert } from 'react-native';
import MovieDetailsView from './view';
import styled from 'styled-components/native';
const placeIcon = {
    'noActive': color="steelblue",
    'active': color="read"
};
const SquaresView = styled.View`s
    width: 16;
    height: 16;
    background-color: gray;
    border-radius: 2;
    margin: 0 5px 5px 0;
`;

export default class MovieDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPlace: [],
        };
        this.places = [];
        this.initialPlaces();
    }
    initialPlaces() {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 14; j++) {
                this.places.push({numberPlace: j + 1, numberRow: i + 1});
            }
        }
    }

    handleSelectPlace = (row, place) =>{
        if(this.state.selectedPlace.length > 0){
            const placeElement = this.state.selectedPlace.find((item)=>{
                return item.numberPlace === place && item.numberRow === row;
            });
            if(placeElement){
                Alert.alert('Ошибка', 'вы уже выбрали  это место');
                return false;
            }
        }

        const newStateArray = this.state.selectedPlace ? this.state.selectedPlace.slice() : [];
        newStateArray.push({ numberRow: row, numberPlace: place });
        this.setState({selectedPlace : newStateArray});

        console.log('!!!row', row);
        console.log('!!!place', place);
    };

    handlePlacesClick(){
        this.setState(
            {place: !this.state.place}
        );
    }
    renderPlace(){
        const Place = this.state.place;
        let icon = null;
        if(Place)
            icon = placeIcon.active;
        else
            icon = placeIcon.noActive;
       return(

             <SquaresView source={icon}/>

       );
    }

    render(){
        console.log('movie details selectedDate', this.props.date);
        console.log('!!!selectedPlaces', this.state.selectedPlace);
        return(
           <MovieDetailsView
               places={this.places}
               selectedDate={this.props.date}
               selectedTime={this.props.time}
               onSelectPlace={this.handleSelectPlace}
               selectedPlaces={this.state.selectedPlace}
           />
        )
    }
}