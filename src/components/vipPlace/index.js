import React, {Component} from "react";
import { Text, View, ListView  } from 'react-native';
import VipPlaceView from './view';


export default class VipPlace extends Component {

    constructor(props) {
        super(props);
        this.state = {

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


    render(){
        return (
            <VipPlaceView
                placesVip={this.placesVip}

            />
        );
    }
}
