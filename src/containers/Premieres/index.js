import React, {Component} from 'react';
import { Text, View, ListView  } from 'react-native';
import PremieresView from './view';
import styled from 'styled-components/native';
import { getAllMovie } from '../../components/api';
import {Scene, Router, TabBar, Modal, Schema, Actions, Reducer, ActionConst} from 'react-native-router-flux';

export default class Premieres extends Component {
    constructor(props) {
        super(props);
        this.state={
            isLoading: false,
            movie: null,
        }
    }
    componentDidMount() {
        /*const self = this;
        getAllMovie().then((value) => {
            console.log("metka", value);
            let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            self.setState({isLoading: false, movie: ds.cloneWithRows(value),});

        }); */
    }
    render(){
        if (this.state.isLoading){
            return (
                <Text>
                    Loading...
                </Text>
            );
        }


        return(

            <PremieresView
                allMovie = {this.state.movie}
                />

        )
    }
}
