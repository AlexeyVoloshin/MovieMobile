import React, {Component} from 'react';
import {Text, View, Alert} from 'react-native';
import MovieDetailsView from './view';
import styled from 'styled-components/native';
import {Actions} from 'react-native-router-flux';

export default class MovieDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPlace: [],
        };
        this.places = [];
        this.initialPlaces();
        this.placesNumeric = [];
        this.initialNumeric();
        this.TopPlace = [];
        this.initialTopPlace();
        console.log('placesNumeric', this.placesNumeric);
    }

    initialPlaces() {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 14; j++) {
                this.places.push({numberPlace: j + 1, numberRow: i + 1});
            }
        }
    }

    initialNumeric() {
        for (let i = 0; i < 1; i++) {
            for (let j = 0; j < 11; j++) {
                this.placesNumeric.push({numericPlace: j + 1, numericRow: i + 1});
            }
        }
    }

    initialTopPlace() {
        for (let i = 0; i < 1; i++) {
            for (let j = 0; j < 10; j++) {
                this.TopPlace.push({numericPlace: j + 1, numericRow: i + 1});
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
    checkChoiceDate = (places, date, time, price) => {

        const ChoiceDate = this.state.selectedPlace;
        console.log('!!!ChoiceDate', ChoiceDate);
        if (ChoiceDate.length <= 0)
            return alert('Please select place and row');
        this.MovieDetails(places, date, time, price);
    };

    MovieDetails(places, date, time, price) {
        Actions.tickets(places, date, time, price);
    }

    render() {
        console.log('movie details selectedDate', this.props.date);
        console.log('!!!selectedPlaces', this.state.selectedPlace);
        return (
            <MovieDetailsView
                checkChoiceDate={this.checkChoiceDate}
                TopPlace={this.TopPlace}
                placesNumeric={this.placesNumeric}
                places={this.places}
                selectedDate={this.props.date}
                selectedTime={this.props.time}
                onSelectPlace={this.handleSelectPlace}
                selectedPlaces={this.state.selectedPlace}
                selectMoviePhoto={this.state.photoMovie}
            />
        )
    }
}