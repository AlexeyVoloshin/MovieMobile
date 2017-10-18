import React, {Component} from "react";
import { Text, View, ListView  } from 'react-native';
import VipPlaceView from './view';


export default class VipPlace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPlaceVip: [],
        };

        this.placesVip = [];
        this.initialPlaces();
        console.log("this.places", this.placesVip);
    }

    initialPlaces() {
        for (let i = 0; i < 1; i++) {
            for (let j = 0; j < 13; j++) {
                this.placesVip.push({numberPlaceVip: j + 1, numberRowVip: i + 1});
            }
        }
    }
    handleSelectPlace = (row, place) => {
        const selectedPlace = this.state.selectedPlace;
        if (selectedPlace.length === 0) {
            const newStateArray = selectedPlace ? selectedPlace.slice() : [];
            newStateArray.push({numberRowVip: row, numberPlaceVip: place});
            this.setState({selectedPlace: newStateArray});
            console.log('!!!row', row);
            console.log('!!!place', place);
        }
        else if (selectedPlace.length > 0) {
            const placeElement = selectedPlace.find((item) => {
                return (item.numberPlaceVip === place && item.numberRowVip === row);
            });

            if (placeElement) {
                console.log('delete', place);
                console.log('delete', row);

                const filteredPlaces = [];
                selectedPlace.forEach((item) => {
                    if (item.numberPlaceVip === place && item.numberRowVip === row) {
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
        return (
            <VipPlaceView
                placesVip={this.placesVip}
                selectedDate={this.props.date}
                selectedTime={this.props.time}
                onSelectPlace={this.handleSelectPlace}
                selectedPlaces={this.state.selectedPlace}
            />
        );
    }
}
