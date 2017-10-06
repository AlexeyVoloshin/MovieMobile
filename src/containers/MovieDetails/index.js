import React, {Component} from 'react';
import { Text, View, Alert } from 'react-native';
import MovieDetailsView from './view';
import styled from 'styled-components/native';


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

    handleSelectPlace = (row, place) => {
        const selectedPlace = this.state.selectedPlace;
        if (selectedPlace.length === 0) {
            const newStateArray = selectedPlace ? selectedPlace.slice() : [];
            newStateArray.push({numberRow: row, numberPlace: place});
            this.setState({selectedPlace: newStateArray});
            console.log('!!!row', row);
            console.log('!!!place', place);
        }
        else if (selectedPlace.length > 0) {
            const placeElement = selectedPlace.find((item) => {
                return (item.numberPlace === place && item.numberRow === row);
            });

            if (placeElement) {
                console.log('delete', place);
                console.log('delete', row);

                const filteredPlaces = [];
                selectedPlace.forEach((item) => {
                    if (item.numberPlace === place && item.numberRow === row) {
                        return false;
                    }
                    else {
                        filteredPlaces.push(item);
                    }

                });
                this.setState({selectedPlace: filteredPlaces});
                console.log('!!!filteredPlaces', filteredPlaces);
            }
            else {
                const newStateArray = selectedPlace ? selectedPlace.slice() : [];
                newStateArray.push({numberRow: row, numberPlace: place});
                this.setState({selectedPlace: newStateArray});
                console.log('!!!row', row);
                console.log('!!!place', place);
            }

        }
    };

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