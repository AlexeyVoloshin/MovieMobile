import React, {Component} from 'react';
import { Text, View, ListView  } from 'react-native';
import PremieresView from './view';
import styled from 'styled-components/native';
import { getAllMovie } from '../../components/api';
import {TabBar, Schema} from 'react-native-router-flux';

export default class Premieres extends Component {
    constructor(props) {
        super(props);
        this.state={
            isLoading: true,
            movie: null,
            selectedDate: null,
        }
    }
    handleSetSelectedDate = (selectedDate) => {
        this.setState( { selectedDate } );
    }
    componentDidMount() {

        getAllMovie().then((value) => {
            console.log("metka", value);
            let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            this.setState({isLoading: false, movie: ds.cloneWithRows(value.message),});

        });
    }
    render(){
        if (this.state.isLoading){
            return (
                <Text>
                    Loading...
                </Text>
            );
        }
        console.log("this.state.movie",this.state.movie);

        return(

            <PremieresView
                allMovie = {this.state.movie}
                selectedDate={this.state.selectedDate}
                onSetSelectedDate={this.handleSetSelectedDate}
            />

        )
    }
}
